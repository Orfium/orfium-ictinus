import * as React from 'react';
import type { ComponentSizes } from 'types';

import { labelStyle } from './Label.style';

export type LabelProps = {
  /** If the label has error */
  hasError?: boolean;
  /** The label that is going to be displayed */
  label: string;
  /** If the label value is required */
  isRequired: boolean;
  /** If the label must be moved to the top */
  isAnimated?: boolean;
  /** HTML <label/>'s for prop */
  htmlFor?: string;
  /** The size of the label */
  size?: ComponentSizes;
};

const Label: React.FCC<LabelProps> = ({
  hasError = false,
  htmlFor,
  label,
  size = 'normal',
  isRequired = false,
  isAnimated = false,
}) => {
  return (
    <label htmlFor={htmlFor} css={labelStyle({ isAnimated, hasError, size })}>
      {label} {isRequired && '*'}
    </label>
  );
};

export default Label;
