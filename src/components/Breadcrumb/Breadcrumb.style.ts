import { Theme } from 'theme';
import { rem } from 'polished';
import { css } from '@emotion/core';

export const breadcrumbStyles = () => (theme: Theme) => css`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  padding: ${rem(28)} 0;

  & > li {
    padding: 0.4rem;
  }
`;

export const breadcrumbLinkStyles = () => (theme: Theme) => css`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${theme.palette.gray200};
  }
`;
