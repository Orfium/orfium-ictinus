import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { ButtonTokens, getButtonTokens } from '../Button/Button.tokens';
import { PrimitiveButtonTypes } from '../Button/Button.types';

const rotateSVG = (deg: number) => {
  return {
    svg: {
      transform: `rotate(${deg}deg)`,
      transition: '0.2s',
    },
  };
};

export const wrapperStyle = (): SerializedStyles => {
  return css({
    position: 'relative',
    display: 'inline-block',
  });
};

export const buttonSpanStyle =
  ({ type }: { type: PrimitiveButtonTypes }) =>
  (theme: Theme): SerializedStyles => {
    /** Style for the divider in Text Dropdown Buttons with type = 'primary' | 'secondary' */
    const borderStyles =
      type !== 'tertiary'
        ? {
            borderRight: `${theme.globals.borderWidth.get('1')} solid transparent`,
          }
        : {};

    return css({
      'button:first-of-type': {
        borderTopRightRadius: 'unset',
        borderBottomRightRadius: 'unset',
      },
      ...borderStyles,
    });
  };

const getIconButtonActiveState = (theme: Theme, type: PrimitiveButtonTypes) => {
  const tokens = getButtonTokens(theme);

  return {
    backgroundColor: tokens(`${type}.backgroundColor.active` as ButtonTokens),
    ':hover:not(:disabled)': {
      backgroundColor: tokens(`${type}.backgroundColor.active` as ButtonTokens),
    },
  };
};

export const iconButtonWrapper =
  ({ isOpen, type }: { isOpen: boolean; type: PrimitiveButtonTypes }) =>
  (theme: Theme): SerializedStyles => {
    const openDropdownStyles = isOpen
      ? {
          button: getIconButtonActiveState(theme, type),
        }
      : {};

    return css(openDropdownStyles);
  };

export const iconButtonSpanStyle =
  ({ isOpen, type }: { isOpen: boolean; type: PrimitiveButtonTypes }) =>
  (theme: Theme): SerializedStyles => {
    const openDropdownStyles = isOpen
      ? {
          button: getIconButtonActiveState(theme, type),
          ...rotateSVG(180),
        }
      : {
          ...rotateSVG(0),
        };

    return css({
      'button:last-child': {
        borderTopLeftRadius: 'unset',
        borderBottomLeftRadius: 'unset',
      },
      ...openDropdownStyles,
    });
  };
