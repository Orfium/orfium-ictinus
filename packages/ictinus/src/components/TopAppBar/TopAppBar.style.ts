import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

import { flexCenter } from 'theme/functions';
import type { Theme } from '../../theme';

const DEFAULT_NAVBAR_HEIGHT = 62;

const topAppBarWrapper =
  (isDark: boolean) =>
  (theme: Theme): SerializedStyles => css`
    ${flexCenter};
    position: relative;
    justify-content: space-between;
    background-color: ${isDark ? vars.color.background.inverted : vars.color.background.default};
    height: ${rem(DEFAULT_NAVBAR_HEIGHT)};
    padding: 0 ${vars.spacing['6']};
    box-shadow: ${theme.globals.elevation['02']};
    > *:not(:last-of-type) {
      color: ${isDark ? vars.color.background.default : vars.color.background.inverted};
    }
  `;

const topAppBarSection = css`
  ${flexCenter};
  flex-wrap: nowrap;
`;

const additionalToolsSection = (hasAdditionalTools: boolean): SerializedStyles => css`
  ${topAppBarSection};
  margin: 0 ${vars.spacing['6']};
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
