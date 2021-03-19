import { flex } from '../../../../theme/functions';
import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../../../theme';
import { cardElevation } from '../../../Card/Card.style';

const header = (checked: boolean) => (theme: Theme): SerializedStyles => css`
  padding: ${theme.spacing.lg};
  border-top-left-radius: ${theme.spacing.sm};
  border-top-right-radius: ${theme.spacing.sm};
  background: ${checked ? theme.utils.getColor('primary', 100, 'normal') : theme.palette.white};
  ${flex};
  ${cardElevation(theme, '01')}
  justify-content: space-between;
`;

export default {
  header,
};
