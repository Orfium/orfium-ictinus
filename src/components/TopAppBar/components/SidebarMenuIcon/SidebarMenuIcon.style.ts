import { Theme } from '../../../../theme';
import { css, SerializedStyles } from '@emotion/react';

const iconWrapper = (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin: ${theme.spacing.lg} 0px ${theme.spacing.lg} ${theme.spacing.xsm};
`;

export default {
  iconWrapper,
};
