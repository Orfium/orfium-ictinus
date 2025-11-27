import { css, type CSSObject } from '@emotion/react';
import { vars } from '@orfium/tokens';

import { flexCenterVertical } from 'theme/functions';

export const containerStyles = (sx?: CSSObject) => css`
  cursor: pointer;
  ${flexCenterVertical};
  gap: ${vars.spacing['4']};
  padding: ${vars.spacing['4']};
  ${sx};
`;
