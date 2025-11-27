import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

import { flexCenter } from 'theme/functions';

const wrapper = (): SerializedStyles => css`
  ${flexCenter};
  background-color: transparent;
  margin: ${vars.spacing['6']} ${vars.spacing['8']} ${vars.spacing['6']} ${vars.spacing['6']};
  border-radius: ${vars.spacing['3']};
  max-width: ${rem(400)};
`;

export const placeholderWrapper = css`
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export default {
  wrapper,
  placeholderWrapper,
};
