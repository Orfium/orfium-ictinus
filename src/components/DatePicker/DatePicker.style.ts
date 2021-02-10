import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';

export const datePickerStyles = () => (theme: Theme): SerializedStyles => css`
  position: absolute;

  margin-top: ${theme.spacing.sm};
  box-shadow: ${theme.elevation['02']};
`;
