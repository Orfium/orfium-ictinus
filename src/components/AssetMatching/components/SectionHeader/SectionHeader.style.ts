import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';
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
    return `0px ${rem(7)} ${rem(8)} ${rem(-5)} rgb(0 0 0 / 15%)`;
  }

  return `0px ${rem(2)} ${rem(4)} rgba(0 0 0 / 15%)`;
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
