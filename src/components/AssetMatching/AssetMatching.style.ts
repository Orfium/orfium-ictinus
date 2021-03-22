import { flex } from '../../theme/functions';
import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';

const section = (theme: Theme): SerializedStyles => css`
  > div {
    ${flex};
    width: 100%;
    border-radius: ${theme.spacing.sm};
  }
  .selected {
    background: red;
  }
`;

export const inner = css`
  ${flex};
  flex-direction: column;
  width: 100%;
`;

export const assets = (theme: Theme): SerializedStyles => css`
  ${flex};
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding: ${theme.spacing.md};
`;

export default { section, inner, assets };
