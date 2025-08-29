import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { BreadcrumbItemProps } from './BreadcrumbItem';
import type { Theme } from '../../../theme';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const breadcrumbListStyles = (): SerializedStyles => css`
  display: flex;
  align-items: center;
`;

export const breadcrumbItemStyles =
  ({ isLastItem }: Pick<BreadcrumbItemProps, 'isLastItem'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      align-items: center;
      gap: ${theme.dimension.spacing.get('sm')};

      ${isLastItem && generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))}

      ${isLastItem &&
      `
          color: ${theme.tokens.colors.get('textColor.default.secondary')};
      `}
    `;
  };
