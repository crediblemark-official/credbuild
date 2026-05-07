# @crediblemark/build

The open-source visual editor for React. Build complex, high-performance page builders and CMS interfaces with ease.

[![npm version](https://img.shields.io/npm/v/@crediblemark/build.svg)](https://www.npmjs.com/package/@crediblemark/build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Drag & Drop**: Powered by `@dnd-kit` for smooth, accessible, and highly customizable layouts.
- **Rich Text Editing**: Integrated with `tiptap` for a seamless content editing experience.
- **Headless & Flexible**: Decouples logic from UI, allowing you to build your own custom blocks and components.
- **React Server Components (RSC) Support**: Optimized for modern Next.js applications.
- **High Performance**: Built with `zustand` for efficient state management and optimized rendering.
- **TypeScript First**: Fully typed API for a great developer experience.

## Installation

```bash
bun add @crediblemark/build
```

## Quick Start

### 1. Setup the Editor

```tsx
import React from "react";
import { CredBuild } from "@crediblemark/build";
import "@crediblemark/build/dist/index.css";

const config = {
  blocks: {
    Hero: {
      render: ({ title }) => <h1>{title}</h1>,
    },
    // Add more blocks here
  },
};

const MyEditor = () => {
  return (
    <CredBuild
      config={config}
      data={{ content: [] }}
      onChange={(newData) => console.log(newData)}
    />
  );
};
```

### 2. Render the Content

```tsx
import { Render } from "@crediblemark/build";

const MyPage = ({ data }) => {
  return <Render config={config} data={data} />;
};
```

## Creating Custom Components

Adding new components (blocks) to your editor is straightforward. Follow this pattern:

### 1. Define your Props

```tsx
type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
};
```

### 2. Create the Component Config

The configuration defines how the component is rendered and which fields are editable in the sidebar.

```tsx
import { ComponentConfig } from "@crediblemark/build";

export const Hero: ComponentConfig<HeroProps> = {
  label: "Hero Section",
  fields: {
    title: { 
      type: "text", 
      label: "📝 Title" 
    },
    description: { 
      type: "textarea", 
      label: "📄 Description" 
    },
    buttonText: { 
      type: "text", 
      label: "🔘 Button Label" 
    },
  },
  defaultProps: {
    title: "Welcome to our site",
    description: "Built with @crediblemark/build",
    buttonText: "Get Started",
  },
  render: ({ title, description, buttonText }) => (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </section>
  ),
};
```

### 3. Register in the Editor Config

```tsx
const config = {
  blocks: {
    Hero,
    // Add more blocks here
  },
  categories: {
    "🎬 Hero Sections": {
      components: ["Hero"],
    },
  },
};
```

## Organizing with Categories

You can group your components into categories to keep the sidebar organized.

```tsx
const config = {
  categories: {
    "🎬 Hero Sections": {
      components: ["Hero", "Banner"],
    },
    "📦 Content Blocks": {
      components: ["Text", "Image", "Video"],
    },
  },
  blocks: {
    // ... all blocks defined here
  },
};
```

## Best Practices for Components

To create a premium editing experience, follow these patterns:

1. **Emoji Labels**: Use emojis in your field labels to make them more visual and easier to scan.
   ```tsx
   title: { type: "text", label: "📝 Title" }
   ```
2. **Responsive Typography**: Use `clamp()` for fluid font sizes that work on all screens.
   ```tsx
   <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>{title}</h1>
   ```
3. **Smart Fallbacks**: Always provide sensible `defaultProps` and handle missing images/content gracefully in your `render` function.
4. **Group Related Fields**: If a component has many fields, group them logically in the `fields` definition.

## Advanced Usage


### Array Fields (Multiple Items)

For repeating content like features, testimonials, or pricing plans:

```tsx
features: {
  type: "array",
  label: "✨ Features",
  arrayFields: {
    title: { type: "text", label: "Feature Title" },
    description: { type: "textarea", label: "Description" },
  },
  getItemSummary: (item) => item.title || "Feature",
}
```


### Using Hooks

Access the editor state or trigger actions programmatically.

```tsx
import { useCredBuild } from "@crediblemark/build";

const CustomTool = () => {
  const { appendBlock } = useCredBuild();

  return (
    <button onClick={() => appendBlock({ type: "Hero", props: { title: "New Hero" } })}>
      Add Hero
    </button>
  );
};
```

## Documentation

For full documentation and examples, visit [build.crediblemark.com](https://build.crediblemark.com).

## License

MIT © [Rasyiqi Crediblemark](https://github.com/crediblemark-official)
