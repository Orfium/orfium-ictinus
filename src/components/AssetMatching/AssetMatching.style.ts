import { flex } from 'theme/functions';
import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';
import { formFieldStyles } from 'theme/palette';

const wrapperStyleSwitch = (theme: Theme) => ({
  outlined: `border: 1px solid ${theme.utils.getColor('lightGray', 200)}`,
  elevated: `box-shadow: ${theme.elevation['01']};`,
  filled: ``,
});

const section = (styleType: formFieldStyles) => (theme: Theme): SerializedStyles => css`
  > div {
    ${flex};
    width: 100%;
    border-radius: ${theme.spacing.sm};
    ${wrapperStyleSwitch(theme)[styleType]}
  }
  .selected {
    background: ${theme.utils.getColor('primary', 100, 'normal')};
  }
`;

export const inner = css`
  ${flex};
  flex-direction: column;
  width: 100%;
`;

export const assets = (theme: Theme): SerializedStyles => css`
  ${flex};
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding: ${theme.spacing.md};
`;

export default { section, inner, assets };
