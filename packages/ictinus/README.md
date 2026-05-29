# Ictinus

React implementation of Orfium's Ictinus Design System.

## Installation

Install the package using your package manager of choice:

```sh
pnpm install @orfium/ictinus
```

## Getting Started

### 1. Add the Provider

Wrap your application with `ThemeProvider` and `VanillaThemeProvider`:

```jsx
import { ThemeProvider } from '@orfium/ictinus';
import { ThemeProvider as VanillaThemeProvider } from '@orfium/ictinus/vanilla';

export function App() {
  return (
    <ThemeProvider>
      <VanillaThemeProvider>{/* Your app code here */}</VanillaThemeProvider>
    </ThemeProvider>
  );
}
```

### 3. Use Components

Import and use components in your application:

```jsx
import { Box, Button } from '@orfium/ictinus/vanilla';

export function MyComponent() {
  return (
    <Box display="flex" alignItems="start" flexDirection="column">
      <Button>Submit</Button>
    </Box>
  );
}
```

## Migrating from Emotion to Vanilla CSS

Components are gradually moving from Emotion (`@orfium/ictinus`) to Vanilla Extract (`@orfium/ictinus/vanilla`); switch imports per component and keep both theme providers until Ictinus no longer uses Emotion.

## Documentation

For comprehensive guides, component API reference, and more examples:

- [Storybook](https://designlab.orfium.com/)

## Contributing

See the [main repository](https://github.com/Orfium/orfium-ictinus) for contribution guidelines.

## License

Apache-2.0
