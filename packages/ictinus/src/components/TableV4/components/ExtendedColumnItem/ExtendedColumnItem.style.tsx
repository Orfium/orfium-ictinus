import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { flexCenterVertical } from 'theme/functions';
import { rem } from '@orfium/tokens';

import type { Theme } from '../../../../theme';

export const containerStyles = (gap: string) => (): SerializedStyles =>
  css`
    ${flexCenterVertical};
    display: inline-flex;
    gap: ${rem(`${gap}px`)};
  `;

export const contentStyles =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
    `;
