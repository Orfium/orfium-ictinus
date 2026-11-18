import { css, type SerializedStyles } from '@emotion/react';

import { vars } from '@orfium/tokens';

const buttonTextStyle = (): SerializedStyles => css`
  font-weight: ${vars.weight.medium};
`;

export default {
  buttonTextStyle,
};
