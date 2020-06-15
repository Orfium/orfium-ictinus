import { Theme } from 'theme';
import { css } from '@emotion/core';

export const separatorStyles = () => (theme: Theme) => css`
  margin: auto ${theme.spacing.md};
  color: ${theme.palette.gray50};
  cursor: default;
`;
