import { css, type SerializedStyles } from '@emotion/react';

import type { TRProps } from './TR';

export const trContainer =
  ({ sx }: Pick<TRProps, 'sx'>) =>
  (): SerializedStyles => {
    return css`
      ${sx};
    `;
  };
