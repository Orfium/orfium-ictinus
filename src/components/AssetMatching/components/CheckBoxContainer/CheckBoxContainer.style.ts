import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex } from 'theme/functions';
import { BASE_SHADE } from 'theme/palette';

import { boldFont, normalFont } from '../Asset/Asset.style';

const score = (isEnabled: boolean) => (theme: Theme): SerializedStyles => css`
  ${boldFont(26, theme)};
  margin: 0 ${theme.spacing.sm} 0 ${theme.spacing.md};
  color: ${isEnabled
    ? theme.utils.getColor('darkGrey', 850)
    : theme.utils.getColor('lightGrey', 650)};
`;

const checkBoxWrapper = css`
  ${flex};
  align-items: center;
`;

const text = (isEnabled: boolean) => (theme: Theme): SerializedStyles => css`
  ${normalFont(11, theme)};
  color: ${theme.utils.getColor('lightGrey', isEnabled ? 650 : BASE_SHADE)};
  margin-right: ${theme.spacing.sm};
`;

const scoreWrapper = css`
  ${flex};
  align-items: center;
`;

export default {
  scoreWrapper,
  score,
  checkBoxWrapper,
  text,
};
