# @crediblemark/build

The open-source visual editor for React. Build complex, high-performance page builders and CMS interfaces with ease.

[![npm version](https://img.shields.io/npm/v/@crediblemark/build.svg)](https://www.npmjs.com/package/@crediblemark/build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎨 Features

- **Drag & Drop**: Powered by `@dnd-kit` for smooth, accessible, and highly customizable layouts.
- **Rich Text Editing**: Integrated with `tiptap` for a seamless content editing experience.
- **Premium Matrix UI**: A sleek, high-density neutral-dark theme designed for professional CMS workflows.
- **Path Aliases Support**: Ready for `@/*` aliases to keep your codebase clean.
- **Magic Edit Mode**: Integrated pattern for `/edit` URL rewrites.
- **React Server Components (RSC) Support**: Optimized for modern Next.js applications.

## 🔌 Companion Block Library: `@crediblemark/build-ui`

Accelerate your visual editor setup by pairing it with the official companion block library: **`@crediblemark/build-ui`**. It provides **45+ highly polished thematic blocks** (Hero sections, Navigation, Features, Grid lists, Accordions, and Footers) designed with clean Vanilla CSS that plug straight into your editor out of the box.

Integrating the library is completely automated via the CLI:
```bash
npx credbuild add build-ui
```

---

## 🚀 Installation

```bash
bun add @crediblemark/build
```

### ⚡ Zero-Config Companion Scaffolding

To instantly add and auto-configure companion block libraries (such as `@crediblemark/build-ui`) in your project, run our intelligent, zero-config CLI:

```bash
npx credbuild add build-ui
```

The CLI tool will dynamically:
- **Detect your package manager** (`bun`, `pnpm`, `yarn`, or `npm`) by scanning local lockfiles and run the correct install command automatically.
- **Auto-inject companion styles** by prepending `@import "@crediblemark/build-ui/sidebar-neat.css";` to your global CSS stylesheet.
- **Generate configuration files** by autogenerating `credbuild.config.tsx` configured with `buildUiPreset` exports if no config is found.

### 🔍 Automatic Component Registry Scaffolding (`credbuild scan`)

To automatically scan your React component directories and generate visual editor schemas, run our intelligent **Static Analysis CLI**:

```bash
npx credbuild scan [directory]
```

#### What it does:
- **TypeScript AST-Driven & Fallback Regex Parser**: Dynamically detects your local project's `typescript` package to run a highly accurate AST analysis on your `.tsx` source files. If TypeScript is not installed, it automatically falls back to a robust and resilient regex-based engine.
- **Smart Prop Field Mappings**:
  - `string` ➔ `text` (and intelligently maps properties named `description`, `content`, `text`, or `body` to `textarea`).
  - `boolean` ➔ `boolean`.
  - `number` ➔ `number`.
  - Union String Literals (e.g. `'primary' | 'secondary' | 'danger'`) ➔ `select` with populated options.
- **Export Type Resolution**: Distinguishes default vs named exports (e.g. `export default function Card` ➔ `import Card from "..."` vs `export const Card` ➔ `import { Card } from "..."`).
- **Configuration Scaffolding**: Generates a unified `credbuild.components.tsx` file in your root folder ready to be imported and merged directly in your main `credbuild.config.tsx`:

```tsx
import { buildUiPreset } from "@crediblemark/build-ui";
import { customComponents } from "./credbuild.components";

const config = {
  ...buildUiPreset,
  components: {
    ...buildUiPreset.components,
    ...customComponents
  }
};

export default config;
```

## 🏗️ Next.js Implementation Pattern

To replicate the professional CMS setup used in `NEXT_CMS`, follow this architecture:

### 1. Folder Structure
Organize your project to keep the editor logic separate from your public site logic:
```
/
├── credbuild.config.tsx      # Central configuration
├── app/
│   ├── (site)/               # Public site routes
│   │   └── [...path]/        # Dynamic renderer
│   └── credbuild/            # Editor-only routes
│       └── [...path]/        # Dynamic editor
└── components/
    └── credbuild/            # Your custom blocks
```

### 2. The "Magic Edit" Rewrite
Use Next.js `proxy.ts` to allow users to visit any page and simply add `/edit` to the URL to start building:

```typescript
// proxy.ts
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname.endsWith("/edit")) {
    const pathWithoutEdit = url.pathname.replace(/\/edit$/, "");
    // Rewrite to the internal editor route
    url.pathname = `/credbuild${pathWithoutEdit || "/"}`;
    return NextResponse.rewrite(url);
  }
}
```

### 3. Dynamic Editor Route
Create a catch-all route at `app/credbuild/[...path]/page.tsx` that loads the `CredBuild` component:

```tsx
import { CredBuild } from "@crediblemark/build";
import config from "@/credbuild.config";
import "@crediblemark/build/dist/index.css";

export default async function EditorPage({ params }) {
  const { path } = await params;
  const data = await getPageData(path); // Fetch your JSON data

  return (
    <CredBuild
      config={config}
      data={data}
      headerPath={path}
      onPublish={async (newData) => {
        await savePageData(path, newData);
      }}
    />
  );
}
```

## 🧩 Creating Premium Components

For a high-fidelity "Premium Matrix" feel, follow the modular component pattern:

### 1. Define Component Logic (`AboutCompany.tsx`)
Keep your configuration and fields clean. Use Lucide icons and compact labels for a dashboard feel.

```tsx
import { ComponentConfig } from "@crediblemark/build";
import { User, Settings } from "lucide-react";
import { AboutRender } from "./AboutRender";

export const AboutCompany: ComponentConfig<AboutProps> = {
  label: "About Company",
  fields: {
    title: { 
      type: "text", 
      label: "📝 Title",
      placeholder: "Enter company name..."
    },
    count: {
      type: "number",
      label: "🔢 Employee Count"
    }
  },
  render: AboutRender,
};
```

### 2. Standardize UI Aesthetics
CredBuild enforces a high-density UI. When creating custom field labels or sidebars, use these CSS variables and standards:
- **Font Size**: Labels at `9px`, Inputs at `12px`.
- **Border Radius**: `5px` (rounded-md).
- **Icons**: Always include icons in field labels for visual scanning.

## 💎 Premium Design System Standards

To maintain the "Premium Matrix" aesthetic across your host application:

1. **Isolation**: CredBuild uses `data-cb-theme="dark"` to isolate its styles. Ensure your host application CSS doesn't leak into the editor by using specific selectors.
2. **Compactness**: Set your sidebar width to `300px` to `380px`. The fields are optimized for narrow containers.
3. **Typography**: Use modern fonts like *Inter* or *Outfit* for the best visual results.

## ⚡ Quick Start (Basic)

If you just want a simple standalone editor:

```tsx
import { CredBuild } from "@crediblemark/build";

const MyEditor = () => (
  <CredBuild
    config={{ components: { ... } }}
    data={{ content: [] }}
    onChange={(data) => console.log(data)}
  />
);
```

## 📜 License

MIT © [Rasyiqi Crediblemark](https://github.com/crediblemark-official)
