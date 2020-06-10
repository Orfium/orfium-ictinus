import { Theme } from 'theme';
import { css } from '@emotion/core';

export const breadcrumbStyles = () => (theme: Theme) => css`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
`;
