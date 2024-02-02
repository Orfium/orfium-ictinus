import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { ButtonBaseProps } from './ButtonBase';
import type { Theme } from '../../theme';
import { getButtonTokens } from '../Button/Button.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const buttonWrapperStyle = ({
  isBlock,
}: Pick<ButtonBaseProps, 'isBlock'>): SerializedStyles =>
  css({ position: 'relative', width: isBlock ? '100%' : 'fit-content' });

export const buttonBaseStyle =
  ({
    type = 'primary',
    size = 'normal',
    isBlock,
    isLoading,
    isDisabled,
    isIconButton,
    shape,
    sx,
  }: Omit<ButtonBaseProps, 'htmlType' | 'ref'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getButtonTokens(theme);

    const getButtonWidth = () => {
      if (isBlock) return '100%';

      if (isIconButton) return tokens(`${size}.size` as const);

      return undefined;
    };

    const getButtonHeight = () => {
      if (isIconButton) return tokens(`${size}.size` as const);

      if (size === 'compact') return tokens('compact.size');

      return 'auto';
    };

    const getButtonPadding = () => {
      if (isIconButton) return 0;

      const paddingVertical = size === 'normal' ? tokens('normal.paddingVertical') : 0;
      const paddingHorizontal = tokens(`${size}.paddingHorizontal` as const);

      return `${paddingVertical} ${paddingHorizontal}`;
    };

    const baseButtonStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: tokens(`${type}.textColor` as const),
      width: getButtonWidth(),
      height: getButtonHeight(),
      backgroundColor: tokens(
        `${type}.backgroundColor.${isLoading ? 'active' : 'default'}` as const
      ),
      padding: getButtonPadding(),
      borderRadius:
        isIconButton && shape === 'circle'
          ? tokens('borderRadius.rounded')
          : tokens('borderRadius.square'),
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color,border 150ms linear',

      ':focus-visible:not(:disabled)': {
        backgroundColor: tokens(`${type}.backgroundColor.hover` as const),
      },
      ':disabled': {
        opacity: theme.tokens.disabledState.get('default'),
        cursor: 'not-allowed',
      },
      ':hover:not(:disabled)': {
        backgroundColor: tokens(`${type}.backgroundColor.hover` as const),
      },
      ':active:not(:disabled), &[aria-expanded="true"]': {
        backgroundColor: tokens(`${type}.backgroundColor.active` as const),
      },
    };

    const loadingStyles =
      isLoading && !isDisabled
        ? {
            pointerEvents: 'none' as const,
          }
        : {};

    return css`
      ${generateStylesFromTokens(tokens(`text.${size}` as const))};
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
