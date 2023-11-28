import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '../../../../theme';

const buttonTextStyle = (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.globals.typography.fontWeight.get('medium')};
`;

export default {
  buttonTextStyle,
};
