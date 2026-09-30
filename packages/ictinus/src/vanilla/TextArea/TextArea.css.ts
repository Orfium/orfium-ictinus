import { vars } from '@orfium/tokens';

import { style } from '../../vanilla-extract';
import { floatingLabel, floatingLabelWrapper } from '../TextField/TextField.css';

export const textArea = style({
  paddingTop: vars.spacing.lg,
  paddingBottom: vars.spacing.lg,
  selectors: {
    [`${floatingLabelWrapper.classNames.base}:has(> ${floatingLabel.classNames.base}) > &`]: {
      paddingTop: vars.spacing['2xl'],
    },
  },
});
