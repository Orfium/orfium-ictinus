import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex } from 'theme/functions';
import { BASE_SHADE } from 'theme/palette';

import { boldFont, normalFont } from '../Asset/Asset.style';

const score = (isEnabled: boolean) => (theme: Theme): SerializedStyles => css`
  ${boldFont(26, theme)};
  margin: 0 ${theme.spacing.sm} 0 ${theme.spacing.md};
  color: ${isEnabled ? theme.palette.black : theme.utils.getColor('lightTintedGrey', 750)};
`;

const checkBoxWrapper = css`
  ${flex};
  align-items: center;
`;

const text = (isEnabled: boolean) => (theme: Theme): SerializedStyles => css`
  ${normalFont(11, theme)};
  color: ${theme.utils.getColor('lightTintedGrey', isEnabled ? 600 : BASE_SHADE)};
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
