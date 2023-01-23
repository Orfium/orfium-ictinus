import globals from 'theme/globals';
import semantic from 'theme/tokens/semantic';

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

const tokens: ButtonTokens = {
  size: globals.sizing.get('5'),
  spacing: {
    textButton: {
      padding: globals.spacing.get('4'),
      paddingVertical: globals.spacing.get('4'),
      paddingHorizontal: globals.spacing.get('6'),
    },
    iconButton: {
      padding: globals.spacing.get('4'),
    },
  },
  borderRadius: {
    text: globals.borderRadius.get('2'),
    wrapper: globals.borderRadius.get('0'),
    icon: globals.borderRadius.get('5'),
  },
  borderWidth: {
    1: globals.borderWidth.get('1'),
    2: globals.borderWidth.get('2'),
  },
  color: {
    primary: {
      borderColor: semantic.borderColor.get('decorative.transparent'),
      textColor: semantic.textColor.get('inverted.primary'),
    },
    secondary: {
      borderColor: semantic.borderColor.get('decorative.transparent'),
      textColor: semantic.textColor.get('light.active'),
    },
    tertiary: {
      borderColor: semantic.borderColor.get('decorative.transparent'),
      borderColorSegmented: semantic.borderColor.get('decorative.lightMuted'),
      textColor: semantic.textColor.get('light.active'),
    },
    invertedAlt: {
      borderColor: semantic.borderColor.get('decorative.transparent'),
      textColor: semantic.textColor.get('inverted.active'),
    },
    danger: {
      borderColor: semantic.borderColor.get('decorative.transparent'),
      textColor: semantic.textColor.get('light.error'),
    },
    inverted: {
      borderColor: semantic.borderColor.get('decorative.transparent'),
      textColor: semantic.textColor.get('light.primary'),
    },
  },
};

export default tokens;
