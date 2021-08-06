import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';
import { Theme } from 'theme';

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
    background-color: ${theme.utils.getColor('lightTintedGrey', 50)};
  }
`;
