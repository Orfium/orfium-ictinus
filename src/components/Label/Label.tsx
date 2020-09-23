/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { labelStyle } from './Label.style';

export type Props = {
  /** If the label has error */
  error?: boolean;
  /** The label that is going to be displayed */
  label: string;
  /** If the label value is required */
  required: boolean;
  /** If the label must be moved to the top */
  animateToTop?: boolean;
  htmlFor?: string;
};

const Label: React.FC<Props> = ({
  error = false,
  htmlFor,
  label,
  required = false,
  animateToTop = false,
}) => {
  return (
    <label htmlFor={htmlFor} css={labelStyle({ animateToTop, error })}>
      {label} {required && '*'}
    </label>
  );
};

export default Label;
