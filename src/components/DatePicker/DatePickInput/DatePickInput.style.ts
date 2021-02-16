import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';
import { rem } from 'polished';

export const rangeInputsWrapper = () => (theme: Theme): SerializedStyles => css`
  max-width: ${rem(280)};
`;
