import { flex, transition } from 'theme/functions';
import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';
import { formFieldStyles } from 'theme/palette';

const header = (checked: boolean, styleType: formFieldStyles, isBulkSection: boolean) => (
  theme: Theme
): SerializedStyles => css`
  padding: ${theme.spacing.sm};
  border-top-left-radius: ${theme.spacing.sm};
  border-top-right-radius: ${theme.spacing.sm};
  background: ${getHeaderBg(checked, isBulkSection, theme)};
  ${flex};
  box-shadow: ${getShadowBox(styleType, isBulkSection)};
  justify-content: space-between;
  ${transition(0.2)};
`;

export default {
  header,
};

function getShadowBox(styleType: formFieldStyles, isBulkSection: boolean) {
  if (isBulkSection) {
    return '0px 0px 0px';
  }

  if (styleType === 'filled') {
    return '0px 7px 8px -5px rgb(0 0 0 / 15%)';
  }

  return '0px 2px 4px rgba(0 0 0 / 15%)';
}

function getHeaderBg(isChecked: boolean, isBulkSection: boolean, theme: Theme) {
  if (isBulkSection) {
    return 'transparent';
  }

  if (isChecked) {
    return theme.utils.getColor('lightGray', 200);
  }

  return theme.palette.white;
}
