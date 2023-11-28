import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '../../../../theme';

const iconWrapper = (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin: ${theme.globals.spacing.get('8')} 0px ${theme.globals.spacing.get('8')} ${theme.globals.spacing.get('3')};
`;

export default {
  iconWrapper,
};
