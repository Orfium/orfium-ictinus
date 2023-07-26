import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

export const groupStyles = (): SerializedStyles => {
  return css`
    /** @TODO: add tokens instead of rem */
    width: ${`calc(100% - ${rem(44)})`};
  `;
};
