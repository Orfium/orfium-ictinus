import { flex } from '../../../../theme/functions';
import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../../../theme';

const header = (checked: boolean) => (theme: Theme): SerializedStyles => css`
  width: 100%;
  padding: ${theme.spacing.lg};
  background: ${checked ? theme.utils.getColor('branded1', 100, 'normal') : theme.palette.white};
  ${flex};
  justify-content: space-between;
`;

export default {
  header,
};
