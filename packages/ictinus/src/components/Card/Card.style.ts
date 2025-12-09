import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { vars } from '@orfium/tokens';
import type { Theme } from '../../theme';
import type { CardProps } from './Card';

export const cardStyle =
  ({ elevated, isTransparent, radius }: CardProps) =>
  (theme: Theme): SerializedStyles => css`
    box-shadow: ${elevated ? theme.globals.elevation[elevated] : undefined};
    background: ${isTransparent ? vars.color.transparent['1'] : vars.color.background.default};
    border-radius: ${radius ? vars.spacing[radius] : 0};
    outline: ${isTransparent
      ? undefined
      : `${vars['border-width']['1']} solid ${vars.color['border-color'].decorative.default}`};
  `;
