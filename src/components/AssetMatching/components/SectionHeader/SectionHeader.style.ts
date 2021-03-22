import { flex } from '../../../../theme/functions';
import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../../../theme';
import { formFieldStyles } from '../../../../theme/palette';

const header = (checked: boolean, styleType: formFieldStyles) => (
  theme: Theme
): SerializedStyles => css`
  padding: ${theme.spacing.lg};
  border-top-left-radius: ${theme.spacing.sm};
  border-top-right-radius: ${theme.spacing.sm};
  background: ${checked ? theme.utils.getColor('lightGray', 200) : theme.palette.white};
  ${flex};
  ${styleType === 'filled'
    ? 'box-shadow: 0px 7px 8px -5px rgb(0 0 0 / 15%);'
    : 'box-shadow:  0px 2px 4px rgba(0 0 0 / 15%);'}
  justify-content: space-between;
`;

export default {
  header,
};
