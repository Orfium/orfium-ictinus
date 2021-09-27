import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex, transition } from 'theme/functions';
import { formFieldStyles } from 'theme/palette';

const header = (checked: boolean, styleType: formFieldStyles, isBulkSection: boolean) => (
  theme: Theme
): SerializedStyles => css`
  padding: ${theme.spacing.sm};
  border-top-left-radius: ${theme.spacing.sm};
  border-top-right-radius: ${theme.spacing.sm};
  background: ${getHeaderBg(checked, isBulkSection, theme)};
  ${flex};
  box-shadow: ${getShadowBox(styleType, isBulkSection, theme)};
  justify-content: space-between;
  ${transition(0.2)};
`;

export default {
  header,
};

function getShadowBox(styleType: formFieldStyles, isBulkSection: boolean, theme: Theme) {
  if (isBulkSection) {
    return '0px 0px 0px';
  }

  if (styleType === 'filled') {
    return theme.elevation['02'];
  }

  return theme.elevation['01'];
}

function getHeaderBg(isChecked: boolean, isBulkSection: boolean, theme: Theme) {
  if (isBulkSection) {
    return 'transparent';
  }

  if (isChecked) {
    return theme.utils.getColor('primary', 100, 'normal');
  }

  return theme.palette.white;
}
