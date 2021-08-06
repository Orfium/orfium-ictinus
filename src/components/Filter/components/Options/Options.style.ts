import { css } from '@emotion/react';
import { rem } from 'polished';
import { Theme } from 'theme';
import { flexCenter } from 'theme/functions';

export const emptyStyle = () => (theme: Theme) => css`
  color: ${theme.utils.getColor('lightTintedGrey', 750)};
  height: ${rem(48)};
  padding: 0 ${rem(16)};
  font-size: ${theme.typography.fontSizes['14']};
  ${flexCenter};
`;
