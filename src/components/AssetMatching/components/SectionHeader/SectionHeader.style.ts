import { flex } from '../../../../theme/functions';
import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../../../theme';

const score = (theme: Theme): SerializedStyles => css`
  font-size: 26px;
  font-weight: 700;
  margin: 0 ${theme.spacing.sm} 0 ${theme.spacing.md};
`;

const checkBoxWrapper = css`
  ${flex};
  align-items: center;
`;

const text = (theme: Theme): SerializedStyles => css`
  font-size: 11px;
  font-weight: 500;
  color: ${theme.utils.getColor('lightGray', 600)};
  margin-right: ${theme.spacing.sm};
`;

const scoreWrapper = css`
  ${flex};
  align-items: center;
`;

const header = (checked: boolean) => (theme: Theme): SerializedStyles => css`
  width: 100%;
  padding: ${theme.spacing.lg};
  background: ${checked ? theme.utils.getColor('branded1', 100, 'normal') : theme.palette.white};
  ${flex};
  justify-content: space-between;
`;

export default {
  score,
  checkBoxWrapper,
  text,
  scoreWrapper,
  header,
};
