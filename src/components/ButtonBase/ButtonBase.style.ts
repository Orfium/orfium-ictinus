import { css, SerializedStyles } from '@emotion/react';

import { ButtonBaseProps } from './ButtonBase';
import { Theme } from '../../theme';
import {
  ButtonTokens,
  getButtonTokens,
  getIconButtonTokens,
  getTextButtonTokens,
} from '../Button/Button.tokens';
import { label02 } from '../Typography/Typography.config.styles';

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
    shape,
    sx,
  }: Omit<ButtonBaseProps, 'htmlType' | 'ref'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getButtonTokens(theme);
    const iconButtonTokens = getIconButtonTokens(theme);
    const textButtonTokens = getTextButtonTokens(theme);

    const baseButtonStyles = {
      color: tokens(`color.${type}.textColor` as ButtonTokens),
      width: isBlock ? '100%' : undefined,
      backgroundColor: tokens(
        `color.${type}.backgroundColor.${isLoading ? 'active' : 'inactive'}` as ButtonTokens
      ),
      padding: isIconButton
        ? iconButtonTokens('padding')
        : `${textButtonTokens('paddingVertical')} ${textButtonTokens('paddingHorizontal')}`,

      borderRadius:
        isIconButton && shape === 'circle'
          ? tokens('iconBorderRadius')
          : tokens('textBorderRadius'),
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color,border 150ms linear',

      ':focus-visible:not(:disabled)': {
        outline: `${tokens('color.focusedBorderColor')} auto ${tokens('borderWidth.2')}`,
      },
      ':disabled': {
        opacity: theme.tokens.disabledState.get('default'),
        backgroundColor: tokens(`color.${type}.backgroundColor.inactive` as ButtonTokens),
        cursor: 'not-allowed',
      },
      ':hover:not(:disabled)': {
        backgroundColor: tokens(`color.${type}.backgroundColor.hover` as ButtonTokens),
      },
      ':active:not(:disabled)': {
        backgroundColor: tokens(`color.${type}.backgroundColor.active` as ButtonTokens),
      },
    };

    const loadingStyles =
      isLoading && !isDisabled
        ? {
            pointerEvents: 'none' as const,
          }
        : {};

    return css`
      ${label02(theme)};
      ${baseButtonStyles};
      ${loadingStyles};
      ${sx?.container};
    `;
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
