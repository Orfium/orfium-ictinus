import { CSSObject } from '@emotion/react';

export type LabelConfig = {
  /** Sets the label's placement */
  placement?: 'left' | 'right';
  /** Sets the label's size */
  size?: 'normal' | 'large';
  /** Helptext rendered under the label */
  helpText?: string;
  /** Styles that will apply on the container that holds the control input and the label */
  sx?: CSSObject;
};
