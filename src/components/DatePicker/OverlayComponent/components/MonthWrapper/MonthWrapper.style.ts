import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getDatePickerTokens } from 'components/DatePicker/DatePicker.tokens';

export const monthWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDatePickerTokens(theme);

    return css`
      display: flex;
      flex-direction: column;
      gap: ${tokens('rowPadding')};
      padding: ${tokens('padding')};
    `;
  };

export const monthHeaderWrapperStyle = () => (): SerializedStyles =>
  css`
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
  `;

export const monthHeaderNavigationIconWrapperStyle =
  ({ position = 'left' }: { position: 'left' | 'right' }) =>
  (): SerializedStyles =>
    css`
      cursor: pointer;
      margin: auto ${rem(5)};
      position: absolute;
      ${position === 'left' ? 'left: 0' : 'right: 0'};
      top: 0;
      bottom: 0;
      height: fit-content;
      z-index: 10;
    `;

export const monthHeaderTitleWrapperStyle = (): SerializedStyles =>
  css`
    padding: 0;
    align-content: center;
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

export const monthHeaderTitleStyle =
  ({ isRangePicker }: { isRangePicker: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      margin: 0 ${theme.globals.spacing.get('4')};
      display: flex;
      justify-content: center;
      cursor: ${!isRangePicker && 'pointer'};
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
    `;
