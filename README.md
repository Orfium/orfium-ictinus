# Orfium Ictinus

> A comprehensive design system and UI component library for Orfium products

![npm](https://img.shields.io/npm/v/@orfium/ictinus)
[![CI/CD](https://github.com/Orfium/orfium-ictinus/actions/workflows/main.yml/badge.svg)](https://github.com/Orfium/orfium-ictinus/actions/workflows/main.yml)
![min size](https://img.shields.io/bundlephobia/min/@orfium/ictinus)
![minzip size](https://img.shields.io/bundlephobia/minzip/@orfium/ictinus)

This monorepo contains the Orfium Design System - an opinionated UI kit library focused on solving UI duplications and providing unified, cross-product UX, UI, and accessibility standards.

## Repository Structure

This is a **monorepo** managed with [Turbo](https://turbo.build/) and [pnpm](https://pnpm.io/):

```
orfium-ictinus/
├── apps/
│   └── storybook/          # Storybook documentation and component showcase
├── packages/
│   └── ictinus/            # Main design system package (@orfium/ictinus)
```

### Packages

- **[@orfium/ictinus](./packages/ictinus/)** - The main design system package containing all UI components, themes, tokens, and utilities
- **[@orfium/tokens](./packages/tokens/)** - A dedicated package containing the design system tokens for external system usage

### Apps

- **[Storybook](./apps/storybook/)** - Interactive documentation and component playground

## Prerequisites

- **Node.js** >= 22
- **pnpm** >= 10

## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/Orfium/orfium-ictinus.git
   cd orfium-ictinus
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development servers**

   ```bash
   # Start all development servers (Storybook, etc.)
   pnpm dev

   # Or start Storybook specifically
   pnpm --filter storybook dev
   ```

4. **Build all packages**
   ```bash
   pnpm build
   ```

## 📋 Available Scripts

| Script               | Description                                      |
| -------------------- | ------------------------------------------------ |
| `pnpm dev`           | Start all development servers                    |
| `pnpm build`         | Build all packages and apps                      |
| `pnpm test`          | Run all tests                                    |
| `pnpm test:coverage` | Run tests with coverage                          |
| `pnpm lint`          | Run linting across all packages                  |
| `pnpm check`         | Run all checks (TypeScript, linting, formatting) |
| `pnpm clean`         | Remove all node_modules                          |

## Testing

We use [Vitest](https://vitest.dev/) for testing:

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Generate coverage report
pnpm coverage:report
```

## Documentation

- **[Storybook](http://localhost:6006)** - Interactive component documentation (after running `pnpm dev`)
- **[Package README](./packages/ictinus/README.md)** - Detailed usage instructions for the design system
- **[Contribution Guidelines](./CONTRIBUTING.md)** - How to contribute to this project

## Using the Design System

For detailed usage instructions, see the [Ictinus package README](./packages/ictinus/README.md).

**Quick example:**

```jsx
import { ThemeProvider, Button, Select } from '@orfium/ictinus';

function App() {
  return (
    <ThemeProvider>
      <Button>Click me</Button>
      <Select options={[]} />
    </ThemeProvider>
  );
}
```

## Migration & Codemods

The library includes codemods to help migrate between versions:

```bash
# Run migration codemods
npx @orfium/ictinus migrate
```

Available codemods can be found in [`packages/ictinus/codemods/`](./packages/ictinus/codemods/).

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting a PR.

### Development Workflow

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make your changes
3. Run checks: `pnpm check`
4. Submit a PR with a [conventional commit](https://conventionalcommits.org/) title

### PR Guidelines

- Use conventional commit format for PR titles (e.g., `feat(Button): add loading state`)
- Provide detailed descriptions and screenshots
- Ensure all tests pass
- Update documentation as needed

## Versioning & Releases

This project uses [Changesets](https://github.com/changesets/changesets) for versioning and releases:

```bash
# Create a changeset
pnpm changeset

# Release (CI/CD handles this)
pnpm release
```

## Links

- [npm package](https://www.npmjs.com/package/@orfium/ictinus)
- [GitHub repository](https://github.com/Orfium/orfium-ictinus)
- [Issues](https://github.com/Orfium/orfium-ictinus/issues)
