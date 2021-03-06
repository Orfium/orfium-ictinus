import { css, SerializedStyles } from '@emotion/core';

import { Theme } from '../../theme';

export const LABEL_TRANSFORM_LEFT_SPACING = '3';

export const labelStyle = ({
  size,
  animateToTop,
  error,
}: {
  size: string;
  animateToTop: boolean;
  error: boolean;
}) => (theme: Theme): SerializedStyles => css`
  transition: transform 0.25s, opacity 0.25s ease-in-out;
  transform-origin: 0 0;
  width: 100%;
  position: absolute;
  user-select: none;
  transform: ${!animateToTop
    ? `translate(${LABEL_TRANSFORM_LEFT_SPACING}px, 0)`
    : `translate(${LABEL_TRANSFORM_LEFT_SPACING}px, -95%) scale(0.8);`};
  font-size: ${theme.typography.fontSizes['16']};
  font-weight: ${theme.typography.weights.regular};
  color: ${error
    ? theme.utils.getColor('error', 400, 'normal')
    : theme.utils.getColor('lightGray', 600)};
  align-items: center;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  white-space: nowrap;
`;
