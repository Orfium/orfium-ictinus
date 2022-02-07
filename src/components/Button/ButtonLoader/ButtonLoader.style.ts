import { css, SerializedStyles } from '@emotion/react';
import { flex } from 'theme/functions';
import { rem } from 'theme/utils';

export const centralizedLoader: (clientWidth?: number) => SerializedStyles = clientWidth => css`
  width: ${clientWidth ? rem(clientWidth) : 'auto'};
  ${flex};
  justify-content: center;
`;
