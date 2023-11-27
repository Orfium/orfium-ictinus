import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '../../../theme';
import { getBreadcrumbTokens } from '../Breadcrumb.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const backToStyles = (): SerializedStyles =>
  css`
    display: flex;
    align-items: center;
  `;

export const backToContainerStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getBreadcrumbTokens(theme);

    return css`
      display: flex;
      ${generateStylesFromTokens(tokens('defaultText'))};
      color: ${tokens('defaultColor')};
    `;
  };
