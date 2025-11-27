import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { vars } from '@orfium/tokens';
import { label02 } from 'components/Typography/Typography.config.styles';
import { flex } from 'theme/functions';
import { getDatePickerTokens } from '../DatePicker.tokens';

export const overlayWrapperStyle = (): SerializedStyles => {
  return css`
    ${flex};
    border: ${vars['border-width']['1']} solid ${vars.color['border-color'].decorative.default};
    border-radius: ${vars['border-radius']['2']};
    width: fit-content;
    background-color: ${vars.color.background.default};
  `;
};

export const optionsWrapperStyle = (): SerializedStyles => {
  return css`
    border-right: ${vars['border-width']['1']} solid
      ${vars.color['border-color'].decorative.default};
  `;
};

export const optionStyle =
  ({ isSelected }: { isSelected?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${label02(theme)};
      white-space: nowrap;
      padding: ${vars.spacing['6']};
      font-weight: ${isSelected ? vars.weight.medium : vars.weight.regular};
      color: ${isSelected && vars.color.text.default.active};
      cursor: pointer;
      background-color: ${isSelected ? vars.color.palette.tertiary.muted : 'transparent'};
      position: relative;

      &:hover {
        background-color: ${vars.color.palette.tertiary.muted};
      }
    `;
  };

export const buttonsMonthsWrapperStyle = (): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const monthsWrapperStyle = (): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 10;
  `;
};

export const buttonsWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDatePickerTokens(theme);

    return css`
      display: flex;
      justify-content: flex-end;
      height: ${tokens('actionsContainer')};
      align-items: center;
      gap: ${vars.spacing['4']};
      padding: 0 ${vars.spacing['7']};
      border-top: ${vars['border-width']['1']} solid
        ${vars.color['border-color'].decorative.default};
    `;
  };
