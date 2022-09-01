import * as React from 'react';

import { labelStyle } from './Label.style';

export type Props = {
  /** If the label has error */
  hasError?: boolean;
  /** The label that is going to be displayed */
  label: string;
  /** If the label value is required */
  isRequired: boolean;
  /** If the label must be moved to the top */
  isAnimated?: boolean;
  htmlFor?: string;
};

const Label: React.FC<Props> = ({
  hasError = false,
  htmlFor,
  label,
  isRequired = false,
  isAnimated = false,
}) => {
  return (
    <label htmlFor={htmlFor} css={labelStyle({ isAnimated, hasError })}>
      {label} {isRequired && '*'}
    </label>
  );
};

export default Label;
