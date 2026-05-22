#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Color helpers
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  bold: "\x1b[1m"
};

console.log(`${colors.cyan}${colors.bold}⚡ Crediblemark CLI v0.25.4${colors.reset}\n`);

const args = process.argv.slice(2);
const command = args[0];

if (!command || (command !== 'add' && command !== 'scan')) {
  console.log(`${colors.yellow}Usage:${colors.reset}`);
  console.log("  npx credbuild add [package-name]");
  console.log("  npx credbuild scan [dir]");
  console.log("\nExamples:");
  console.log("  npx credbuild add build-ui");
  console.log("  npx credbuild scan src/components");
  process.exit(1);
}

const cwd = process.cwd();

if (command === 'add') {
  const targetPackage = args[1];
  if (!targetPackage) {
    console.log(`${colors.yellow}Usage:${colors.reset}`);
    console.log("  npx credbuild add [package-name]");
    process.exit(1);
  }

  // Map short name to full package name
  let packageName = targetPackage;
  if (targetPackage === 'build-ui') {
    packageName = '@crediblemark/build-ui';
  }

  console.log(`📦 Preparing to add ${colors.green}${packageName}${colors.reset}...`);

  // Step 1: Detect package manager by scanning lockfiles
  let packageManager = 'npm';
  let installCmd = 'install';

  if (fs.existsSync(path.join(cwd, 'bun.lock')) || fs.existsSync(path.join(cwd, 'bun.lockb'))) {
    packageManager = 'bun';
    installCmd = 'add';
  } else if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
    packageManager = 'pnpm';
    installCmd = 'add';
  } else if (fs.existsSync(path.join(cwd, 'yarn.lock'))) {
    packageManager = 'yarn';
    installCmd = 'add';
  }

  console.log(`🔍 Detected package manager: ${colors.cyan}${packageManager}${colors.reset}`);

  // Step 2: Install the companion package
  console.log(`\n🚀 Installing ${colors.green}${packageName}${colors.reset} using ${packageManager}...`);
  try {
    const fullCmd = `${packageManager} ${installCmd} ${packageName}`;
    console.log(`${colors.yellow}> ${fullCmd}${colors.reset}`);
    execSync(fullCmd, { stdio: 'inherit' });
    console.log(`\n✅ ${colors.green}Successfully installed${colors.reset} ${packageName}!`);
  } catch (error) {
    console.error(`\n❌ ${colors.red}Failed to install${colors.reset} ${packageName}. Error:`, error.message);
    process.exit(1);
  }

  // Step 3: Handle CSS Stylesheets for @crediblemark/build-ui
  if (packageName === '@crediblemark/build-ui') {
    const cssPaths = [
      'app/globals.css',
      'src/app/globals.css',
      'src/index.css',
      'src/globals.css',
      'styles/globals.css',
      'styles.css',
      'index.css',
      'credbuild.css'
    ];

    let cssFileFound = null;
    for (const relPath of cssPaths) {
      const fullPath = path.join(cwd, relPath);
      if (fs.existsSync(fullPath)) {
        cssFileFound = fullPath;
        break;
      }
    }

    const importStatement = `@import "@crediblemark/build-ui/sidebar-neat.css";\n`;

    if (cssFileFound) {
      const content = fs.readFileSync(cssFileFound, 'utf8');
      if (!content.includes('sidebar-neat.css')) {
        // Prepend import statement
        fs.writeFileSync(cssFileFound, importStatement + content, 'utf8');
        console.log(`✨ ${colors.cyan}Added stylesheet import${colors.reset} to: ${colors.bold}${path.relative(cwd, cssFileFound)}${colors.reset}`);
      } else {
        console.log(`ℹ️ Stylesheet import already exists in: ${colors.bold}${path.relative(cwd, cssFileFound)}${colors.reset}`);
      }
    } else {
      // If no css file found, create a simple style.css or let the user know
      const defaultCssPath = path.join(cwd, 'credbuild.css');
      fs.writeFileSync(defaultCssPath, importStatement, 'utf8');
      console.log(`✨ ${colors.cyan}Created stylesheet${colors.reset} at: ${colors.bold}credbuild.css${colors.reset}`);
    }

    // Step 4: Handle Config File (credbuild.config.tsx)
    const configPaths = [
      'credbuild.config.tsx',
      'credbuild.config.ts',
      'credbuild.config.js',
      'src/credbuild.config.tsx',
      'src/credbuild.config.ts'
    ];

    let configFound = null;
    for (const relPath of configPaths) {
      const fullPath = path.join(cwd, relPath);
      if (fs.existsSync(fullPath)) {
        configFound = fullPath;
        break;
      }
    }

    if (!configFound) {
      const defaultConfigContent = `import { buildUiPreset } from "@crediblemark/build-ui";
 
// Crediblemark Visual Editor Configuration
// Automatically configured for @crediblemark/build-ui
const config = buildUiPreset;
 
export default config;
`;
      const targetConfigPath = path.join(cwd, 'credbuild.config.tsx');
      fs.writeFileSync(targetConfigPath, defaultConfigContent, 'utf8');
      console.log(`✨ ${colors.cyan}Generated default configuration${colors.reset} at: ${colors.bold}credbuild.config.tsx${colors.reset}`);
    } else {
      console.log(`\n⚠️  ${colors.yellow}Configuration file already exists${colors.reset} at: ${colors.bold}${path.relative(cwd, configFound)}${colors.reset}`);
      console.log(`💡 To integrate the companion blocks, import ${colors.green}buildUiPreset${colors.reset} from ${colors.green}'@crediblemark/build-ui'${colors.reset} and register it in your config.`);
    }

    console.log(`\n🎉 ${colors.green}${colors.bold}All set!${colors.reset} Your visual editor companion blocks are now fully configured and ready to roll! 🚀`);
  }
} else if (command === 'scan') {
  // Credbuild Scan command logic
  let scanDir = args[1];

  if (!scanDir) {
    const commonDirs = ['src/components', 'components', 'app/components', 'src/app/components'];
    for (const dir of commonDirs) {
      if (fs.existsSync(path.join(cwd, dir))) {
        scanDir = dir;
        break;
      }
    }
  }

  const scanPath = scanDir ? path.resolve(cwd, scanDir) : cwd;
  console.log(`🔍 Scanning directory: ${colors.cyan}${path.relative(cwd, scanPath) || '.'}${colors.reset}`);

  if (!fs.existsSync(scanPath)) {
    console.error(`❌ ${colors.red}Directory does not exist:${colors.reset} ${scanPath}`);
    process.exit(1);
  }

  // 1. Recursive file scanner
  function scanDirectory(dirPath, files = []) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        if (['node_modules', '.git', '.next', 'dist', 'build', 'out', '.gemini', '.system_generated'].includes(entry.name)) {
          continue;
        }
        scanDirectory(fullPath, files);
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
    return files;
  }

  const componentFiles = scanDirectory(scanPath);
  if (componentFiles.length === 0) {
    console.log(`ℹ️ No component files (*.tsx) found in the scanned directory.`);
    process.exit(0);
  }

  console.log(`Found ${colors.green}${componentFiles.length}${colors.reset} potential React component file(s).`);

  // Try loading TypeScript compiler dynamically
  let ts = null;
  try {
    const tsPath = require.resolve('typescript', { paths: [cwd] });
    ts = require(tsPath);
    console.log(`✨ Using project's local ${colors.bold}typescript${colors.reset} package for AST analysis.`);
  } catch (err) {
    console.log(`💡 ${colors.yellow}TypeScript not found in project's node_modules. Falling back to regex parser.${colors.reset}`);
  }

  // Type Mapping Logic
  function mapTypeToField(propName, propInfo) {
    if (!propInfo) return null;
    if (propInfo.type === 'boolean') return { type: 'boolean' };
    if (propInfo.type === 'number') return { type: 'number' };
    if (propInfo.type === 'union') {
      return { type: 'select', options: propInfo.options };
    }
    if (propInfo.type === 'string') {
      const name = propName.toLowerCase();
      if (name === 'description' || name === 'content' || name === 'text' || name === 'body') {
        return { type: 'textarea' };
      }
      return { type: 'text' };
    }
    return null;
  }

  // AST Parsing Logic
  function parseWithTS(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest, true);

    const types = {};
    const components = [];

    function parseTSType(typeNode) {
      if (!typeNode) return null;
      const kind = typeNode.kind;

      if (kind === ts.SyntaxKind.StringKeyword) return { type: 'string' };
      if (kind === ts.SyntaxKind.BooleanKeyword) return { type: 'boolean' };
      if (kind === ts.SyntaxKind.NumberKeyword) return { type: 'number' };
      if (ts.isUnionTypeNode(typeNode)) {
        const isLiteralUnion = typeNode.types.every(t => ts.isLiteralTypeNode(t) && ts.isStringLiteral(t.literal));
        if (isLiteralUnion) {
          const options = typeNode.types.map(t => t.literal.text);
          return { type: 'union', options };
        }
      }
      return null;
    }

    function extractPropsFromMembers(members) {
      const props = {};
      members.forEach(member => {
        if (ts.isPropertySignature(member) && member.name) {
          const propName = member.name.getText(sourceFile);
          const propType = parseTSType(member.type);
          if (propType) {
            props[propName] = propType;
          }
        }
      });
      return props;
    }

    function visit(node) {
      if (ts.isInterfaceDeclaration(node)) {
        const typeName = node.name.text;
        types[typeName] = extractPropsFromMembers(node.members);
      } else if (ts.isTypeAliasDeclaration(node)) {
        const typeName = node.name.text;
        if (ts.isTypeLiteralNode(node.type)) {
          types[typeName] = extractPropsFromMembers(node.type.members);
        }
      }

      if (ts.isFunctionDeclaration(node) && node.name) {
        const isExported = node.modifiers && node.modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
        const isDefault = node.modifiers && node.modifiers.some(m => m.kind === ts.SyntaxKind.DefaultKeyword);
        const name = node.name.text;
        if (isExported && /^[A-Z]/.test(name)) {
          let propTypeName = null;
          if (node.parameters && node.parameters.length > 0) {
            const firstParam = node.parameters[0];
            if (firstParam.type && ts.isTypeReferenceNode(firstParam.type)) {
              propTypeName = firstParam.type.typeName.getText(sourceFile);
            }
          }
          components.push({ name, propTypeName, isDefault });
        }
      }

      if (ts.isVariableStatement(node)) {
        const isExported = node.modifiers && node.modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
        if (isExported) {
          node.declarationList.declarations.forEach(decl => {
            if (decl.name && ts.isIdentifier(decl.name)) {
              const name = decl.name.text;
              if (/^[A-Z]/.test(name)) {
                let propTypeName = null;
                const init = decl.initializer;
                if (init && (ts.isArrowFunction(init) || ts.isFunctionExpression(init))) {
                  if (init.parameters && init.parameters.length > 0) {
                    const firstParam = init.parameters[0];
                    if (firstParam.type && ts.isTypeReferenceNode(firstParam.type)) {
                      propTypeName = firstParam.type.typeName.getText(sourceFile);
                    }
                  }
                  components.push({ name, propTypeName, isDefault: false });
                }
              }
            }
          });
        }
      }

      if (ts.isExportAssignment(node) && !node.isExportEquals) {
        const expr = node.expression;
        if (ts.isIdentifier(expr)) {
          const name = expr.text;
          if (/^[A-Z]/.test(name)) {
            const existing = components.find(c => c.name === name);
            if (existing) {
              existing.isDefault = true;
            } else {
              components.push({ name, propTypeName: null, isDefault: true });
            }
          }
        }
      }

      ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    const scanned = [];
    components.forEach(comp => {
      let fields = null;
      const lookupNames = [comp.propTypeName, comp.name + 'Props', 'Props', 'Props' + comp.name].filter(Boolean);
      for (const lookup of lookupNames) {
        if (types[lookup]) {
          fields = types[lookup];
          break;
        }
      }
      scanned.push({
        name: comp.name,
        isDefault: comp.isDefault,
        fields: fields || {}
      });
    });

    return scanned;
  }

  // Regex Parsing Logic
  function parseWithRegex(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const componentsMap = new Map();

    const funcRegex = /export\s+(default\s+)?function\s+([A-Z]\w*)\s*\(/g;
    let match;
    while ((match = funcRegex.exec(fileContent)) !== null) {
      const isDefault = !!match[1];
      const name = match[2];
      componentsMap.set(name, { name, isDefault, propTypeName: null });
    }

    const constRegex = /export\s+const\s+([A-Z]\w*)\s*=\s*(?:\([^)]*\)|[^=]+)\s*=>/g;
    while ((match = constRegex.exec(fileContent)) !== null) {
      const name = match[1];
      componentsMap.set(name, { name, isDefault: false, propTypeName: null });
    }

    const defExportRegex = /export\s+default\s+([A-Z]\w*)\s*;/g;
    while ((match = defExportRegex.exec(fileContent)) !== null) {
      const name = match[1];
      if (componentsMap.has(name)) {
        componentsMap.get(name).isDefault = true;
      } else {
        componentsMap.set(name, { name, isDefault: true, propTypeName: null });
      }
    }

    const types = {};
    const typeRegex = /(?:interface|type)\s+([a-zA-Z0-9_]+)\s*(?:=)?\s*\{([\s\S]*?)\}/g;
    while ((match = typeRegex.exec(fileContent)) !== null) {
      const typeName = match[1];
      const fieldsBody = match[2];
      const fields = {};
      const fieldRegex = /([a-zA-Z0-9_]+)\s*\??\s*:\s*([^;,\n]+)/g;
      let fieldMatch;
      while ((fieldMatch = fieldRegex.exec(fieldsBody)) !== null) {
        const fieldName = fieldMatch[1].trim();
        const rawType = fieldMatch[2].trim();

        if (rawType === 'string') {
          fields[fieldName] = { type: 'string' };
        } else if (rawType === 'boolean') {
          fields[fieldName] = { type: 'boolean' };
        } else if (rawType === 'number') {
          fields[fieldName] = { type: 'number' };
        } else if (/^(?:'[^']+'|"[^"]+")(?:\s*\|\s*(?:'[^']+'|"[^"]+"))+$/.test(rawType)) {
          const options = rawType.split('|').map(opt => opt.trim().replace(/^['"]|['"]$/g, ''));
          fields[fieldName] = { type: 'union', options };
        }
      }
      types[typeName] = fields;
    }

    const scanned = [];
    for (const comp of componentsMap.values()) {
      let fields = null;
      const lookupNames = [comp.name + 'Props', 'Props', 'Props' + comp.name];
      for (const lookup of lookupNames) {
        if (types[lookup]) {
          fields = types[lookup];
          break;
        }
      }
      scanned.push({
        name: comp.name,
        isDefault: comp.isDefault,
        fields: fields || {}
      });
    }

    return scanned;
  }

  // Scan all component files
  const scannedComponents = [];
  for (const filePath of componentFiles) {
    try {
      const results = ts ? parseWithTS(filePath) : parseWithRegex(filePath);
      for (const comp of results) {
        scannedComponents.push({
          ...comp,
          filePath
        });
      }
    } catch (e) {
      console.warn(`⚠️ Warning: Failed to parse ${colors.yellow}${path.relative(cwd, filePath)}${colors.reset}: ${e.message}`);
    }
  }

  if (scannedComponents.length === 0) {
    console.log(`ℹ️ Found *.tsx files but couldn't detect any exported React components inside them.`);
    process.exit(0);
  }

  console.log(`\n✨ Successfully analyzed components! Ready to output.`);

  // Generate credbuild.components.tsx
  let imports = `import React from 'react';\n`;
  let customComponentsContent = `export const customComponents: Record<string, any> = {\n`;

  scannedComponents.forEach(comp => {
    // Relative path normalized for imports
    let relPath = path.relative(cwd, comp.filePath);
    relPath = relPath.replace(/\.tsx$/, '').replace(/\\/g, '/');
    if (!relPath.startsWith('.')) relPath = './' + relPath;

    // Generate Import
    if (comp.isDefault) {
      imports += `import ${comp.name} from "${relPath}";\n`;
    } else {
      imports += `import { ${comp.name} } from "${relPath}";\n`;
    }

    // Generate Config fields
    const fieldsConfig = {};
    for (const [name, info] of Object.entries(comp.fields)) {
      const mapped = mapTypeToField(name, info);
      if (mapped) fieldsConfig[name] = mapped;
    }

    // Format fields mapping as TS string
    const fieldsStr = JSON.stringify(fieldsConfig, null, 6)
      .split('\n')
      .map((line, idx) => idx === 0 ? line : '    ' + line)
      .join('\n');

    customComponentsContent += `  ${comp.name}: {\n`;
    customComponentsContent += `    component: ${comp.name},\n`;
    customComponentsContent += `    fields: ${fieldsStr}\n`;
    customComponentsContent += `  },\n`;
  });

  customComponentsContent += `};\n`;

  const outputContent = `// Crediblemark Generated Component Visual Editor Schema
// Generated automatically via 'credbuild scan'
// You can merge these into your credbuild.config.tsx

${imports}
${customComponentsContent}
`;

  const outputPath = path.join(cwd, 'credbuild.components.tsx');
  fs.writeFileSync(outputPath, outputContent, 'utf8');

  console.log(`\n🎉 ${colors.green}${colors.bold}Success!${colors.reset} Visual editor schemas generated at: ${colors.bold}credbuild.components.tsx${colors.reset}`);
  console.log(`\nTo integrate these components in your ${colors.bold}credbuild.config.tsx${colors.reset}:`);
  console.log(`${colors.cyan}-------------------------------------------------------`);
  console.log(`import { buildUiPreset } from "@crediblemark/build-ui";`);
  console.log(`import { customComponents } from "./credbuild.components";`);
  console.log(``);
  console.log(`const config = {`);
  console.log(`  ...buildUiPreset,`);
  console.log(`  components: {`);
  console.log(`    ...buildUiPreset.components,`);
  console.log(`    ...customComponents`);
  console.log(`  }`);
  console.log(`};`);
  console.log(``);
  console.log(`export default config;`);
  console.log(`-------------------------------------------------------${colors.reset}`);
}
