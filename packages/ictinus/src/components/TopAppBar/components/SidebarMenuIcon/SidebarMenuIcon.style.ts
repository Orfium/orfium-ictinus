import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { vars } from '@orfium/tokens';

const iconWrapper = (): SerializedStyles => css`
  cursor: pointer;
  margin: ${vars.spacing['8']} 0px ${vars.spacing['8']} ${vars.spacing['3']};
`;

export default {
  iconWrapper,
};
