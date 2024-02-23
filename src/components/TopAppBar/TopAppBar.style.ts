import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { Theme } from '../../theme';
import { flexCenter } from '../../theme/functions';

const DEFAULT_NAVBAR_HEIGHT = 62;

const topAppBarWrapper =
  (isDark: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flexCenter};
      position: relative;
      justify-content: space-between;
      background-color: ${isDark
        ? theme.tokens.colors.get('backgroundColor.inverted')
        : theme.tokens.colors.get('backgroundColor.default')};
      height: ${rem(DEFAULT_NAVBAR_HEIGHT)};
      padding: 0 ${theme.globals.spacing.get('6')};
      box-shadow: ${theme.globals.elevation['02']};
      > *:not(:last-of-type) {
        color: ${isDark
          ? theme.tokens.colors.get('backgroundColor.default')
          : theme.tokens.colors.get('backgroundColor.inverted')};
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
      margin: 0 ${theme.globals.spacing.get('6')};
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
