import { Theme } from 'theme';
import { css, SerializedStyles } from '@emotion/core';
import { flex } from 'theme/functions';

const score = (isEnabled: boolean) => (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes[26]};
  font-weight: 700;
  margin: 0 ${theme.spacing.sm} 0 ${theme.spacing.md};
  color: ${isEnabled ? theme.palette.black : theme.utils.getColor('lightGray', 600)};
`;

const checkBoxWrapper = css`
  ${flex};
  align-items: center;
`;

const text = (isEnabled: boolean) => (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes[11]};
  font-weight: 500;
  color: ${theme.utils.getColor('lightGray', isEnabled ? 600 : 400)};
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
