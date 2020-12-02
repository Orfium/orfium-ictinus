import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import { backgroundPickerBasedOnType } from '../../utils/themeFunctions';
import { TopAppBarStyleProps } from './TopAppBar.types';

const DEFAULT_NAVBAR_HEIGHT = 62;

const topAppBarWrapper = ({ bgColorType }: TopAppBarStyleProps) => (
  theme: Theme
): SerializedStyles => css`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${backgroundPickerBasedOnType(bgColorType)(theme)};
  color: ${theme.palette.white};
  height: ${DEFAULT_NAVBAR_HEIGHT}px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
`;

export default {
  topAppBarWrapper,
};
