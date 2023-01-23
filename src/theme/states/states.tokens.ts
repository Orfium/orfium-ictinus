import globals from 'theme/globals';
import semantic from 'theme/tokens/semantic';

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

const tokens: StatesTokens = {
  focus: {
    outline: `${semantic.borderColor.get('interactive.focused')} auto ${globals.borderWidth.get(
      '2'
    )}`,
  },
  disabled: {
    opacity: globals.opacity.get('4'),
    cursor: 'not-allowed',
  },
  inactive: {
    backgroundColor: {
      primary: semantic.palette.get('systemic.light.primary.main'),
      secondary: semantic.palette.get('systemic.light.secondary.main'),
      tertiary: semantic.palette.get('systemic.light.tertiary.light'),
      danger: semantic.palette.get('systemic.error.main'),
      inverted: semantic.palette.get('systemic.inverted.primary.main'),
      invertedAlt: semantic.palette.get('systemic.inverted.tertiary.light'),
    },
  },
  active: {
    backgroundColor: {
      primary: semantic.palette.get('systemic.light.primary.dark'),
      secondary: semantic.palette.get('systemic.light.secondary.dark'),
      tertiary: semantic.palette.get('systemic.light.tertiary.dark'),
      danger: semantic.palette.get('systemic.error.main'),
      inverted: semantic.palette.get('systemic.inverted.primary.dark'),
      invertedAlt: semantic.palette.get('systemic.inverted.tertiary.dark'),
    },
  },
  hover: {
    backgroundColor: {
      primary: semantic.palette.get('systemic.light.primary.light'),
      secondary: semantic.palette.get('systemic.light.secondary.light'),
      tertiary: semantic.palette.get('systemic.light.tertiary.main'),
      danger: semantic.palette.get('systemic.error.light'),
      inverted: semantic.palette.get('systemic.inverted.primary.light'),
      invertedAlt: semantic.palette.get('systemic.inverted.tertiary.main'),
    },
  },
};

export default tokens;
