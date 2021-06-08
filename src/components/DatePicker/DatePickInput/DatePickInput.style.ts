import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from 'theme';

export const rangeInputsWrapper = () => (theme: Theme): SerializedStyles => css`
  max-width: ${rem(280)};
`;
