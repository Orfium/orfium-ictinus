import { Theme } from 'theme/types';

type ComponentVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'inverted'
  | 'invertedAlt';

export type StatesTokens = {
  focus: {
    outline: string;
  };
  disabled: { opacity: string; cursor: string };
  inactive: {
    backgroundColor: Record<ComponentVariant, string>;
  };
  active: {
    backgroundColor: Record<ComponentVariant, string>;
  };
  hover: {
    backgroundColor: Record<ComponentVariant, string>;
  };
};

const getTokens = (theme: Theme): StatesTokens => {
  return {
    focus: {
      outline: `${theme.tokens.borderColor.get(
        'interactive.focused'
      )} auto ${theme.globals.borderWidth.get('2')}`,
    },
    disabled: {
      opacity: theme.globals.opacity.get('4'),
      cursor: 'not-allowed',
    },
    inactive: {
      backgroundColor: {
        primary: theme.tokens.palette.get('systemic.light.primary.main'),
        secondary: theme.tokens.palette.get('systemic.light.secondary.main'),
        tertiary: theme.tokens.palette.get('systemic.light.tertiary.light'),
        danger: theme.tokens.palette.get('systemic.error.main'),
        inverted: theme.tokens.palette.get('systemic.inverted.primary.main'),
        invertedAlt: theme.tokens.palette.get('systemic.inverted.tertiary.light'),
      },
    },
    active: {
      backgroundColor: {
        primary: theme.tokens.palette.get('systemic.light.primary.dark'),
        secondary: theme.tokens.palette.get('systemic.light.secondary.dark'),
        tertiary: theme.tokens.palette.get('systemic.light.tertiary.dark'),
        danger: theme.tokens.palette.get('systemic.error.main'),
        inverted: theme.tokens.palette.get('systemic.inverted.primary.dark'),
        invertedAlt: theme.tokens.palette.get('systemic.inverted.tertiary.dark'),
      },
    },
    hover: {
      backgroundColor: {
        primary: theme.tokens.palette.get('systemic.light.primary.light'),
        secondary: theme.tokens.palette.get('systemic.light.secondary.light'),
        tertiary: theme.tokens.palette.get('systemic.light.tertiary.main'),
        danger: theme.tokens.palette.get('systemic.error.light'),
        inverted: theme.tokens.palette.get('systemic.inverted.primary.light'),
        invertedAlt: theme.tokens.palette.get('systemic.inverted.tertiary.main'),
      },
    },
  };
};

export default getTokens;
