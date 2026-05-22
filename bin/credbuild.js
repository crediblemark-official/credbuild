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
const targetPackage = args[1];

if (!command || command !== 'add' || !targetPackage) {
  console.log(`${colors.yellow}Usage:${colors.reset}`);
  console.log("  npx credbuild add [package-name]");
  console.log("\nExamples:");
  console.log("  npx credbuild add build-ui");
  process.exit(1);
}

// Map short name to full package name
let packageName = targetPackage;
if (targetPackage === 'build-ui') {
  packageName = '@crediblemark/build-ui';
}

console.log(`📦 Preparing to add ${colors.green}${packageName}${colors.reset}...`);

// Step 1: Detect package manager by scanning lockfiles
const cwd = process.cwd();
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
