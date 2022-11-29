import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../../../theme';

const iconWrapper = (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin: ${theme.spacing.get('8')} 0px ${theme.spacing.get('8')} ${theme.spacing.get('3')};
`;

export default {
  iconWrapper,
};
