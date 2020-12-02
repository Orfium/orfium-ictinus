import { Theme } from '../../../theme';
import { css, SerializedStyles } from '@emotion/core';

const iconWrapper = (theme: Theme): SerializedStyles => css`
  margin: ${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.xsm};
`;

export default {
  iconWrapper,
};
