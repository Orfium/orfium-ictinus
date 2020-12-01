import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Theme } from '../../../../theme';

export const notificationsContainer = (notificationsPosition: boolean[]) => (
  theme: Theme
): SerializedStyles => css`
  position: absolute;
  top: ${notificationsPosition[0] ? 0 : 'auto'};
  bottom: ${notificationsPosition[1] ? 0 : 'auto'};
  left: ${notificationsPosition[2] ? 0 : 'auto'};
  right: ${notificationsPosition[3] ? 0 : 'auto'};
  min-width: ${rem(489)};
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.md};
  > div {
    margin: ${theme.spacing.sm} 0;
  }
`;
