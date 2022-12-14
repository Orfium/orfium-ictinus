import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../../../theme';

const iconWrapper = (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin: ${theme.globals.spacing.get('8')} 0px ${theme.globals.spacing.get('8')} ${theme.globals.spacing.get('3')};
`;

export default {
  iconWrapper,
};
