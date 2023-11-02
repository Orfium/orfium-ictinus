import { css, SerializedStyles } from '@emotion/react';
import { flex } from 'theme/functions';

import { getBreadcrumbTokens } from './Breadcrumb.tokens';
import { Theme } from '../../theme';

export const breadcrumbStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getBreadcrumbTokens(theme);

    return css`
      ${flex};
      gap: ${tokens('padding')};
      flex-wrap: nowrap;
      list-style: none;
      padding: 0;
      margin: 0;
    `;
  };
