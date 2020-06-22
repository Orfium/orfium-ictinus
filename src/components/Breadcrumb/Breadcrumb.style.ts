import { Theme } from 'theme';
import { css } from '@emotion/core';

export const breadcrumbStyles = () => (theme: Theme) => css`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  padding: ${theme.spacing.md} 0;

  & > li {
    padding: ${theme.spacing.md} 0;
    margin: auto;
  }
`;

export const breadcrumbLinkStyles = () => (theme: Theme) => css`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${theme.palette.gray200};
  }
`;
