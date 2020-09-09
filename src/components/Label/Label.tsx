/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import useTheme from '../../hooks/useTheme';
import { labelStyle } from './Label.style';

export type Props = {
  /** The label that is going to be displayed */
  label: string;
  /** If the label value is required */
  required: boolean;
  /** If the label must be moved to the top */
  animateToTop?: boolean;
  htmlFor?: string;
};

const Label: React.FC<Props> = ({ htmlFor, label, required = false, animateToTop = false }) => {
  const theme = useTheme();

  return (
    <label htmlFor={htmlFor} css={labelStyle({ animateToTop })(theme)}>
      {label} {required && '*'}
    </label>
  );
};

export default Label;
