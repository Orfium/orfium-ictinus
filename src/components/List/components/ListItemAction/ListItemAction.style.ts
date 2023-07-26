import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

export const listItemActionWrapper = () => (): SerializedStyles =>
  css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    //min-width: ${rem(36)};
  `;
