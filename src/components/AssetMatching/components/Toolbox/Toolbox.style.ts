import { Theme } from '../../../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { flex } from '../../../../theme/functions';

const buttonWrapper = (theme: Theme): SerializedStyles => css`
  > button {
    border: none;
    color: ${theme.palette.black};
  }
`;

const primaryButtonsWrapper = css`
  ${flex};
`;

export default {
  buttonWrapper,
  primaryButtonsWrapper,
};
