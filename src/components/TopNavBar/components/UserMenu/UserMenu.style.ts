import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../../../theme';

const buttonTextStyle = (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.medium};
`;

export default {
  buttonTextStyle,
};
