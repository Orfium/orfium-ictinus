import { css, SerializedStyles } from '@emotion/react';
import { flex } from 'theme/functions';

import { Theme } from '../../theme';

export const breadcrumbStyles = () => (): SerializedStyles => css`
  ${flex};
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const breadcrumbLinkStyles = (isLast: boolean) => (theme: Theme): SerializedStyles => css`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${isLast ? theme.utils.getColor('blue', 650) : theme.utils.getColor('darkGrey', 650)};
  }
`;
