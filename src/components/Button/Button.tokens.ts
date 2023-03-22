import { Theme } from '../../theme';
import { ButtonTypes } from './Button.types';

export type ButtonTokensColors = {
  borderColor: string;
  borderColorSegmented?: string;
  textColor: string;
};

export type ButtonTokens = {
  size: string;
  spacing: {
    textButton: { padding: string; paddingVertical: string; paddingHorizontal: string };
    iconButton: Record<string, string>;
  };
  borderRadius: { text: string; wrapper: string; icon: string };
  borderWidth: Record<string, string>;
  color: Record<ButtonTypes, ButtonTokensColors>;
};

const getTokens = (theme: Theme): ButtonTokens => {
  return {
    size: theme.globals.sizing.get('5'),
    spacing: {
      textButton: {
        padding: theme.globals.spacing.get('4'),
        paddingVertical: theme.globals.spacing.get('4'),
        paddingHorizontal: theme.globals.spacing.get('6'),
      },
      iconButton: {
        padding: theme.globals.spacing.get('4'),
      },
    },
    borderRadius: {
      text: theme.globals.borderRadius.get('2'),
      wrapper: theme.globals.borderRadius.get('0'),
      icon: theme.globals.borderRadius.get('5'),
    },
    borderWidth: {
      1: theme.globals.borderWidth.get('1'),
      2: theme.globals.borderWidth.get('2'),
    },
    color: {
      primary: {
        borderColor: theme.tokens.borderColor.get('decorative.transparent'),
        textColor: theme.tokens.textColor.get('inverted.primary'),
      },
      secondary: {
        borderColor: theme.tokens.borderColor.get('decorative.transparent'),
        textColor: theme.tokens.textColor.get('light.active'),
      },
      tertiary: {
        borderColor: theme.tokens.borderColor.get('decorative.transparent'),
        borderColorSegmented: theme.tokens.borderColor.get('decorative.light.muted'),
        textColor: theme.tokens.textColor.get('light.active'),
      },
      invertedAlt: {
        borderColor: theme.tokens.borderColor.get('decorative.transparent'),
        textColor: theme.tokens.textColor.get('inverted.active'),
      },
      danger: {
        borderColor: theme.tokens.borderColor.get('decorative.transparent'),
        textColor: theme.tokens.textColor.get('light.error'),
      },
      inverted: {
        borderColor: theme.tokens.borderColor.get('decorative.transparent'),
        textColor: theme.tokens.textColor.get('light.primary'),
      },
    },
  };
};

export default getTokens;
