import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

export const datePickerStyles = () => (theme: Theme): SerializedStyles => css`
  position: absolute;
  background-color: ${theme.palette.white};
  z-index: 10;
  margin-top: ${theme.spacing.sm};
  box-shadow: ${theme.elevation['02']};
`;
