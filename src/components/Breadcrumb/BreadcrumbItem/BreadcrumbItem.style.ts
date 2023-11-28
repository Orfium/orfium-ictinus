import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { BreadcrumbItemProps } from './BreadcrumbItem';
import type { Theme } from '../../../theme';
import { getBreadcrumbTokens } from '../Breadcrumb.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const breadcrumbListStyles = (): SerializedStyles => css`
  display: flex;
  align-items: center;
`;

export const breadcrumbItemStyles =
  ({ isLastItem }: Pick<BreadcrumbItemProps, 'isLastItem'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getBreadcrumbTokens(theme);

    return css`
      display: flex;
      gap: ${tokens('padding')};

      ${isLastItem && generateStylesFromTokens(tokens('defaultText'))}

      ${isLastItem &&
      `
          color: ${tokens('defaultColor')};
      `}
    `;
  };
