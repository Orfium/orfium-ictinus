import { Theme } from 'src/theme';
import { css } from '@emotion/core';
import { Props } from './Label';
import { RequiredProperties } from 'src/utils/common';

export const labelStyle = ({ animateToTop }: RequiredProperties<Props>) => (theme: Theme) => css`
  transition: transform 0.25s, opacity 0.25s ease-in-out;
  transform-origin: 0 0;
  width: 100%;
  position: absolute;
  top: 1.3rem;
  left: 0.7rem;
  user-select: none;
  z-index: 1500;
  transform: ${!animateToTop ? 'translate(1%, 0)' : 'translate(1%, -65%) scale(0.8);'};
  font-size: ${theme.typography.fontSizes['14']};
  font-weight: ${theme.typography.weights.black};
  color: ${theme.palette.gray100};
`;
