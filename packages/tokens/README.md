# Tokens

Design tokens and CSS variables for the Orfium Design System.

## Installation

Install the package using your package manager of choice:

```sh
pnpm install @orfium/tokens
```

## Getting Started

### Import tokens

```ts
import { rem, vars } from '@orfium/tokens';
```

### Use CSS variables

```ts
import { vars } from '@orfium/tokens';

const styles = {
  color: vars.color.text.default.primary,
  padding: vars.spacing.md,
};
```

### Import generated CSS

```ts
import '@orfium/tokens/vars.css';
```

## Documentation

For token showcases and design system docs:

- [Storybook](https://designlab.orfium.com/)
- [@orfium/ictinus](https://github.com/Orfium/orfium-ictinus/tree/master/packages/ictinus)

## Contributing

See the [main repository](https://github.com/Orfium/orfium-ictinus) for contribution guidelines.

## License

Apache-2.0
