import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';
import getStatesTokens from '../../theme/states/states.tokens';
import getButtonTokens from '../Button/Button.tokens';
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
    isIconButton,
    radius,
    sx,
  }: Omit<ButtonBaseProps, 'htmlType' | 'ref'>) =>
  (theme: Theme): SerializedStyles => {
    const buttonTokens = getButtonTokens(theme);
    const stateTokens = getStatesTokens(theme);

    const baseButtonStyles = {
      color: buttonTokens.color[type].textColor,
      width: isBlock ? '100%' : undefined,
      backgroundColor: stateTokens[isLoading ? 'active' : 'inactive'].backgroundColor[type],
      padding: isIconButton
        ? buttonTokens.spacing.iconButton.padding
        : `${buttonTokens.spacing.textButton.paddingVertical} ${buttonTokens.spacing.textButton.paddingHorizontal}`,
      borderRadius:
        isIconButton && radius === 'rounded'
          ? buttonTokens.borderRadius.icon
          : buttonTokens.borderRadius.text,
      border: !isIconButton
        ? `solid ${buttonTokens.borderWidth[1]} ${buttonTokens.color[type].borderColor}`
        : 'none',
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
