import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../../../theme';

const buttonTextStyle = (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.globals.typography.fontWeight.get('medium')};
`;

export default {
  buttonTextStyle,
};
