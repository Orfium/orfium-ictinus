import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';

import { Theme } from 'theme';

const activeStateStyles = (): SerializedStyles => css`
  & > div > span {
    color: black !important;
    font-weight: 700 !important;
  }
`;

export const parentStyles = (isActive: boolean) => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  position: relative;
  height: ${rem(64)};

  ${isActive && activeStateStyles()}

  &:hover {
    ${activeStateStyles()};
    background-color: ${theme.utils.getColor('lightGray', 100)};
  }
`;
