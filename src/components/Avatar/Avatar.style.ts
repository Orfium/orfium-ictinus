import { css, SerializedStyles } from '@emotion/core';
import { Props } from './Avatar';
import { Theme } from '../../theme';
import { rem } from 'polished';
import { RequiredProperties } from '../../utils/common';
import { flex } from '../../theme/functions';
import { pickTextColorFromSwatches } from '../../theme/palette';

const sizeBasedOnProp = (size: 'sm' | 'md' | 'lg') => {
  if (size === 'sm') {
    return rem(40);
  }
  if (size === 'md') {
    return rem(46);
  }

  return rem(56);
};
export const avatarStyle = ({ size, fill, fillShade }: RequiredProperties<Props>) => (
  theme: Theme
): SerializedStyles => css`
  ${flex};
  width: ${sizeBasedOnProp(size)};
  height: ${sizeBasedOnProp(size)};
  border-radius: 100%;
  background: ${theme.utils.getColor(fill, fillShade)};
  overflow: hidden;
  position: relative;
  font-size: ${theme.typography.fontSizes['18']};
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
  user-select: none;
  justify-content: center;
  color: ${pickTextColorFromSwatches(fill, fillShade)};

  img {
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }
`;
