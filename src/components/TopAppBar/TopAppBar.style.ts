import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import { BgColorType } from './TopAppBar.types';
import { flexCenter } from '../../theme/functions';
import { pickTextColorFromSwatches } from '../../theme/palette';

const DEFAULT_NAVBAR_HEIGHT = 62;

interface StyleProps {
  bgColor: BgColorType;
}

const topAppBarWrapper = ({ bgColor }: StyleProps) => (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  position: relative;
  justify-content: space-between;
  background-color: ${theme.utils.getColor(bgColor.type, bgColor.variant)};
  color: ${pickTextColorFromSwatches(bgColor.type, bgColor.variant)};
  height: ${DEFAULT_NAVBAR_HEIGHT}px;
  padding: 0 ${theme.spacing.md};
`;

const topAppBarSection = css`
  ${flexCenter};
  flex-wrap: nowrap;
`;

const additionalToolsSection = (theme: Theme): SerializedStyles => css`
  ${topAppBarSection};
  margin: 0 ${theme.spacing.md};
`;
const mainSection = css`
  ${topAppBarSection};
  flex-grow: 1;
  justify-content: flex-start;
`;
const searchWrapper = css`
  flex-grow: 1;
  max-width: 520px;
`;
export default {
  topAppBarWrapper,
  topAppBarSection,
  additionalToolsSection,
  mainSection,
  searchWrapper,
};
