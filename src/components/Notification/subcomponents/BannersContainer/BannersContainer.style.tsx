import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Theme } from '../../../../theme';

export const bannersContainer = (bannersPosition: boolean[]) => (
  theme: Theme
): SerializedStyles => css`
  position: absolute;
  top: ${bannersPosition[0] ? 0 : 'auto'};
  bottom: ${bannersPosition[1] ? 0 : 'auto'};
  left: ${bannersPosition[2] ? 0 : 'auto'};
  right: ${bannersPosition[3] ? 0 : 'auto'};
  min-width: ${rem(489)};
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.md};
  > div {
    margin: ${theme.spacing.sm} 0;
  }
`;
