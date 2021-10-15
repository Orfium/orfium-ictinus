import { css } from '@emotion/react';
import { Theme } from 'theme';
import { flexCenter } from 'theme/functions';
import { rem } from 'theme/utils';

export const emptyStyle = () => (theme: Theme) => css`
  color: ${theme.utils.getColor('lightGray', 600)};
  height: ${rem(48)};
  padding: 0 ${rem(16)};
  font-size: ${theme.typography.fontSizes['14']};
  ${flexCenter};
`;
