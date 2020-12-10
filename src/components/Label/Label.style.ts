import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import { labelSize } from '../../utils/size-utils';

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
  left: 0.7rem;
  user-select: none;
  transform: ${!animateToTop ? 'translate(4%, 0)' : 'translate(1%, -95%) scale(0.8);'};
  font-size: ${theme.typography.fontSizes['14']};
  font-weight: ${theme.typography.weights.black};
  color: ${error
    ? theme.utils.getColor('error', 400, 'normal')
    : theme.utils.getColor('lightGray', 500)};
  ${labelSize[size]}
`;
