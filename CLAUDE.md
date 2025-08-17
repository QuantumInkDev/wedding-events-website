# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint

# Install dependencies
pnpm install
```

## Architecture Overview

This is a static marketing website for a wedding and events business built with Vite + React + TypeScript. The key architectural pattern is a **markdown-driven content management system** that allows non-technical content updates.

### Content Management Architecture

The site uses a unique content management approach:

- **Content Source**: All page content lives in `public/content/*.md` files
- **Content Loading**: The `markdownLoader.ts` utility fetches and parses markdown files at runtime
- **Frontmatter Support**: Each markdown file supports YAML frontmatter for metadata:
  ```markdown
  ---
  title: Page Title
  subtitle: Optional subtitle
  ---
  Content goes here...
  ```
- **Fallback Handling**: If markdown files fail to load, the system shows graceful fallback content

### Component Architecture

- **Page Component**: `src/components/Page.tsx` is a layout wrapper that handles both markdown content and custom React content
- **Navigation**: Fixed header with React Router integration and mobile responsive menu
- **Footer**: Reusable footer with contact info and social links
- **Pages**: All pages (`src/pages/*.tsx`) follow the same pattern:
  1. Load markdown content via `loadMarkdownContent()`
  2. Render using the `Page` component wrapper
  3. Exception: `Home.tsx` has custom layout with markdown + additional React components

### TypeScript Configuration

The project uses strict TypeScript settings with `verbatimModuleSyntax` enabled. This requires:
- Type-only imports: `import { type PageContent }` not `import { PageContent }`
- Proper separation of types and runtime values

### Styling Approach

- **Global Styles**: `src/index.css` contains base styles and CSS custom properties
- **Component Styles**: Each component has its own CSS file with BEM-like naming
- **Design System**: Purple gradient color scheme (`#667eea` to `#764ba2`) with modern animations
- **Responsive**: Mobile-first approach with CSS Grid and Flexbox

## Content Management

To add or modify page content:

1. Edit the corresponding `.md` file in `public/content/`
2. Changes appear immediately in development
3. For new pages, add a new markdown file and create a corresponding React component in `src/pages/`
4. Update routing in `src/App.tsx` and navigation in `src/components/Navigation.tsx`

## Common Issues

- **White page on load**: Usually indicates TypeScript compilation errors. Run `pnpm build` to see specific errors.
- **Markdown not loading**: Check that files exist in `public/content/` and are properly formatted with frontmatter.
- **Type import errors**: Use `import { type TypeName }` for type-only imports due to strict TypeScript configuration.