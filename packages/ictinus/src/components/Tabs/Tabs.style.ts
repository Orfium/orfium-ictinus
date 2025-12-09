import { css } from '@emotion/react';

import { vars } from '@orfium/tokens';
import type { TabOrientation } from './types';

export const tagStyles = (isActive = false) => css`
  border: none;
  background: ${vars.color.palette[isActive ? 'primary' : 'primary-alt'].contrast};
  color: ${vars.color.text[isActive ? 'inverted' : 'default'].primary};
  transition: background 0.2s;
  transition: color 0.2s;
`;

export const showcaseContent = (orientation: TabOrientation) => css`
  display: flex;
  flex-direction: ${orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${vars.spacing['7']};
  padding: ${`${vars.spacing['5']} ${orientation === 'horizontal' ? 0 : vars.spacing['7']}`};
`;
