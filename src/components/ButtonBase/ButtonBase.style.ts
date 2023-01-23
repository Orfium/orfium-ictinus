import { css, SerializedStyles } from '@emotion/react';

import stateTokens from '../../theme/states/states.tokens';
import buttonTokens from '../Button/Button.tokens';
import { ButtonBaseProps } from './ButtonBase';

export const buttonWrapperStyle = ({
  isBlock,
}: Pick<ButtonBaseProps, 'isBlock'>): SerializedStyles =>
  css({ position: 'relative', width: isBlock ? '100%' : 'fit-content' });

export const buttonBaseStyle =
  ({
    type = 'primary',
    isBlock,
    isLoading,
    isDisabled,
    sx,
  }: Omit<ButtonBaseProps, 'buttonType' | 'ref'>) =>
  (): SerializedStyles => {
    const baseButtonStyles = {
      color: buttonTokens.color[type].textColor,
      width: isBlock ? '100%' : undefined,
      backgroundColor: stateTokens[isLoading ? 'active' : 'inactive'].backgroundColor[type],
      padding: `${buttonTokens.spacing.textButton.paddingVertical} ${buttonTokens.spacing.textButton.paddingHorizontal}`,
      borderRadius: buttonTokens.borderRadius.text,
      border: `solid ${buttonTokens.borderWidth[1]} ${buttonTokens.color[type].borderColor}`,
      cursor: 'pointer',
      transition: 'background-color,border 150ms linear',

      ':focus-visible:not(:disabled)': stateTokens.focus,
      ':disabled': stateTokens.disabled,
      ':hover:not(:disabled)': {
        backgroundColor: stateTokens.hover.backgroundColor[type],
      },
      ':active:not(:disabled)': {
        backgroundColor: stateTokens.active.backgroundColor[type],
      },
    };

    const loadingStyles =
      isLoading && !isDisabled
        ? {
            pointerEvents: 'none' as const,
          }
        : {};

    return css({ ...baseButtonStyles, ...loadingStyles, ...sx?.container });
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
