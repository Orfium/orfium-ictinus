import { css, SerializedStyles } from '@emotion/react';
import { flexCenterVertical } from 'theme/functions';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { getDisabled, getFocus, getHover, getPressed } from '../../theme/states';
import { ChipProps } from './Chip.types';

export const chipStyle =
  ({
    styleType,
    fill = 'greyScale',
    isSelected,
    onClear,
    onClick,
  }: Pick<ChipProps, 'styleType' | 'fill' | 'isSelected' | 'onClear' | 'onClick'>) =>
  (theme: Theme): SerializedStyles => {
    const isInteractive = styleType === 'interactive';
    const customFilled = styleType === 'read-only' || onClear || isSelected;

    return css`
      ${flexCenterVertical};
      height: ${theme.spacing.get('8')};
      border-radius: ${theme.spacing.get('8')};
      font-size: ${theme.typography.fontSizes.get('2')};
      font-weight: ${theme.typography.weights.get('medium')};
      line-height: normal;
      box-sizing: border-box;
      padding: ${theme.spacing.get('3')} ${theme.spacing.get('4')};
      background-color: ${customFilled ? theme.utils.getColor(fill, 50) : theme.palette.white};
      color: ${theme.utils.getAAColorFromSwatches(fill, 50)};
      border: ${rem(1)} solid
        ${customFilled ? theme.utils.getColor(fill, 550) : theme.utils.getColor('lightGrey', 200)};
      cursor: ${onClick ? 'pointer' : 'auto'};
      width: fit-content;
      transition: background-color 150ms linear;

      &:hover:not(:disabled) {
        background: ${customFilled
          ? getHover({ theme, color: fill, shade: 50 }).backgroundColor
          : getHover({ theme }).backgroundColor};
      }

      &:focus-visible:not(:disabled) {
        outline: ${!isInteractive ? 'none' : getFocus({ theme, borderWidth: 1 }).styleOutline};
      }

      ${isInteractive &&
      `
    &:active:not(:disabled) {
      background: ${
        getPressed({
          theme,
          color: fill,
          shade: 50,
        }).backgroundColor
      };
    }


      :disabled {
        opacity: ${getDisabled().opacity};
        cursor: ${getDisabled().cursor};
      }
    `}

      > :not(:last-child) {
        margin-right: ${theme.spacing.get('3')};
      }
    `;
  };

export const closeIconWrapperStyle = (isDisabled?: boolean) => (): SerializedStyles =>
  css`
    cursor: ${isDisabled ? getDisabled().cursor : 'pointer'};
  `;
