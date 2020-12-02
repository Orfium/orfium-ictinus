import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import { BgColorType } from './TopAppBar.types';

const DEFAULT_NAVBAR_HEIGHT = 62;

interface StyleProps {
  bgColor: BgColorType;
}

const topAppBarWrapper = ({ bgColor }: StyleProps) => (theme: Theme): SerializedStyles => css`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${theme.utils.getColor(bgColor.type, bgColor.variant)};
  color: ${theme.palette.white};
  height: ${DEFAULT_NAVBAR_HEIGHT}px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
`;

export default {
  topAppBarWrapper,
};
