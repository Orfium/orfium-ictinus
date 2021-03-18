import { flex } from '../../theme/functions';
import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';

const section = (theme: Theme): SerializedStyles => css`
  > div {
    ${flex};
    width: 100%;
    border-radius: ${theme.spacing.sm};
  }
`;

export const inner = css`
  ${flex};
  flex-direction: column;
  width: 100%;
`;

export default { section, inner };
