import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { flex } from 'theme/functions';

import type { Theme } from '../../theme';

export const breadcrumbStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${flex};
      gap: ${theme.dimension.spacing.get('sm')};
      flex-wrap: nowrap;
      list-style: none;
      padding: 0;
      margin: 0;
    `;
  };
