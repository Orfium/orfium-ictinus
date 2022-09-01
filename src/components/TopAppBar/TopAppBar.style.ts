import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { flexCenter } from '../../theme/functions';

const DEFAULT_NAVBAR_HEIGHT = 62;

const topAppBarWrapper =
  (isDark: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flexCenter};
      position: relative;
      justify-content: space-between;
      background-color: ${isDark ? theme.palette.black : theme.palette.white};
      height: ${rem(DEFAULT_NAVBAR_HEIGHT)};
      padding: 0 ${theme.spacing.md};
      box-shadow: ${theme.elevation['02']};
      > *:not(:last-of-type) {
        color: ${isDark ? theme.palette.white : theme.utils.getColor('darkGrey', 850)};
      }
    `;

const topAppBarSection = css`
  ${flexCenter};
  flex-wrap: nowrap;
`;

const additionalToolsSection =
  (hasAdditionalTools: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${topAppBarSection};
      margin: 0 ${theme.spacing.md};
      flex-grow: ${hasAdditionalTools ? 1 : 0};
    `;

const mainSection = (hasSearchBar: boolean) => css`
  ${topAppBarSection};
  flex-grow: ${hasSearchBar ? 1 : 0};
  justify-content: flex-start;
`;

export default {
  topAppBarWrapper,
  topAppBarSection,
  additionalToolsSection,
  mainSection,
};
