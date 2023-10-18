import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getDateTokens } from 'components/DatePicker/DatePicker.tokens';

export const monthWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDateTokens(theme);

    return css`
      display: flex;
      flex-direction: column;
      gap: ${tokens('rowPadding')};
      padding: ${tokens('verticalPadding')} ${tokens('horizontalPadding')};
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
      color: ${theme.utils.getColor('darkGrey', 850)};
    `;
