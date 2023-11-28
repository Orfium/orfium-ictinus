import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

const activeStateStyles = (): SerializedStyles => css`
  & > div > span {
    color: black;
    font-weight: 700;
  }
`;

export const parentStyles = ({ isActive }: { isActive: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  cursor: pointer;
  position: relative;
  height: ${rem(64)};

  ${isActive && activeStateStyles()}

  &:hover {
    ${activeStateStyles()};
    background-color: ${theme.utils.getColor('lightGrey', 50)};
  }
`;
