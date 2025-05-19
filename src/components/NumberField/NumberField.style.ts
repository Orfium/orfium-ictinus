import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

export const groupStyles = ({ size }: { size: 'compact' | 'normal' }): SerializedStyles => {
  return css`
    /** @TODO: add tokens instead of rem */
    width: ${`calc(100% - ${size === 'normal' ? rem(44) : rem(20)})`};
  `;
};
