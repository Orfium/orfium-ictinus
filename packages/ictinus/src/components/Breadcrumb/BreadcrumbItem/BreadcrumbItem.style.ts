import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { vars } from '@orfium/tokens';
import type { BreadcrumbItemProps } from './BreadcrumbItem';

export const breadcrumbListStyles = (): SerializedStyles => css`
  display: flex;
  align-items: center;
`;

export const breadcrumbItemStyles = ({
  isLastItem,
}: Pick<BreadcrumbItemProps, 'isLastItem'>): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    gap: ${vars.spacing['4']};

    ${isLastItem &&
    `
          color: ${vars.color.text.default.secondary};
      `};
  `;
};
