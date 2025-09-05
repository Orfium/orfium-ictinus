import { css, type CSSObject } from '@emotion/react';

import { flexCenterVertical } from 'theme/functions';
import type { Theme } from '~/theme';

export const containerStyles = (sx?: CSSObject) => (theme: Theme) => css`
  cursor: pointer;
  ${flexCenterVertical};
  gap: ${theme.globals.spacing.get('4')};
  padding: ${theme.globals.spacing.get('4')};
  ${sx};
`;
