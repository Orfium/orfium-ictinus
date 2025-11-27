import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

const activeStateStyles = (): SerializedStyles => css`
  & > div > span {
    color: black;
    font-weight: 700;
  }
`;

export const parentStyles = ({ isActive }: { isActive: boolean }): SerializedStyles => css`
  cursor: pointer;
  position: relative;
  height: ${rem(64)};

  ${isActive && activeStateStyles()}

  &:hover {
    ${activeStateStyles()};
    background-color: ${vars.color.palette.secondary.muted};
  }
`;
