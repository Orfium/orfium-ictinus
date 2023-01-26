import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { getDisabled, getFocus, getHover, getPressed } from '../../theme/states';
import { ButtonBaseProps } from './ButtonBase';

export const buttonBaseStyle =
  ({ isBlock, sx }: Omit<ButtonBaseProps, 'buttonType' | 'ref'>) =>
  (theme: Theme): SerializedStyles => {
    /** @TODO replace all temporary css values with the new ones */

    const backGroundColor = '#123456';
    const borderWidth = 0;

    const baseButtonStyles = {
      fontSize: rem(14),
      fontWeight: theme.globals.typography.weights.get('medium'),
      color: 'white',
      width: isBlock ? '100%' : undefined,
      backgroundColor: backGroundColor,
      padding: `0 ${theme.globals.spacing.get('6')}`,
      height: rem(36),
      borderRadius: theme.globals.spacing.get('3'),
      border: `solid ${rem(borderWidth)} ${backGroundColor}`,
      cursor: 'pointer',
      transition: 'background-color,border 150ms linear',
      ':focus-visible:not(:disabled)': {
        outline: getFocus({ theme, borderWidth: borderWidth }).styleOutline,
      },
      ':hover:not(:disabled)': {
        backgroundColor: getHover({
          theme,
          color: 'blue',
          shade: 500,
        }).backgroundColor,
      },
      ':active:not(:disabled)': {
        backgroundColor: getPressed({
          theme,
          color: 'blue',
          shade: 500,
        }).backgroundColor,
      },
      ':disabled': getDisabled(),
    };

    return css({ ...baseButtonStyles, ...sx?.container });
  };

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
};

export const iconStyle = () => () => ({
  display: 'inline-flex',
});
