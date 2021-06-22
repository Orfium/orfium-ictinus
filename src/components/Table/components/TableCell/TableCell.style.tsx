import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';

import { Theme } from 'theme';

export const parentStyles = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  position: relative;
  height: ${rem(64)};

  &:hover {
    & * {
      color: black;
      font-weight: 700;
    }

    background-color: ${theme.utils.getColor('lightGray', 100)};
  }
`;
