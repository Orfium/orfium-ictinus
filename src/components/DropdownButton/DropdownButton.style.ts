import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import getStateTokens from 'theme/states/states.tokens';

import getTokens from '../Button/Button.tokens';
import { PrimitiveButtonTypes } from '../Button/Button.types';

const rotateSVG = (deg: number) => {
  return {
    svg: {
      transform: `rotate(${deg}deg)`,
      transition: '0.2s',
    },
  };
};

export const wrapperStyle =
  ({ type, isIconButton }: { type: PrimitiveButtonTypes; isIconButton: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const buttonTokens = getTokens(theme);

    /** For the case of a Text Dropdown Button with type = 'tertiary' */
    const borderStyles =
      type === 'tertiary' && !isIconButton
        ? {
            outline: `${buttonTokens.borderWidth[1]} solid ${buttonTokens.color[type].borderColorSegmented}`,
            borderRadius: theme.globals.borderRadius.get('2'),
          }
        : {};

    return css({
      position: 'relative',
      display: 'inline-block',
      ...borderStyles,
    });
  };

export const buttonSpanStyle =
  ({ type }: { type: PrimitiveButtonTypes }) =>
  (theme: Theme): SerializedStyles => {
    const buttonTokens = getTokens(theme);

    /** Style for the divider in Text Dropdown Buttons with type = 'primary' | 'secondary' */
    const borderStyles =
      type !== 'tertiary'
        ? {
            borderRight: `${buttonTokens.borderWidth[1]} solid transparent`,
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
  const stateTokens = getStateTokens(theme);

  return {
    backgroundColor: `${stateTokens.active.backgroundColor[type]}`,
    ':hover:not(:disabled)': {
      backgroundColor: `${stateTokens.active.backgroundColor[type]}`,
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
