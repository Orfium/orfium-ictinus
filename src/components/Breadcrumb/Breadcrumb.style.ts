import { css } from '@emotion/react';

import { Theme } from '../../theme';

export const breadcrumbStyles = () => (theme: Theme) => css`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    margin: auto;
  }
`;

export const breadcrumbLinkStyles = () => (theme: Theme) => css`
  text-decoration: none;
  color: inherit;
  padding: ${theme.spacing.sm};
  &:hover {
    color: ${theme.utils.getColor('darkGray', 400)};
  }
`;
