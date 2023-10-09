import { css, SerializedStyles } from '@emotion/react';

import { ButtonBaseProps } from './ButtonBase';
import { Theme } from '../../theme';
import { getButtonTokens, getIconButtonTokens, getTextButtonTokens } from '../Button/Button.tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';

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
      color: tokens(`${type}.textColor` as const),
      width: isBlock ? '100%' : undefined,
      backgroundColor: tokens(
        `${type}.backgroundColor.${isLoading ? 'active' : 'default'}` as const
      ),
      padding: isIconButton
        ? iconButtonTokens('padding')
        : `${textButtonTokens('normal.paddingVertical')} ${textButtonTokens(
            'normal.paddingHorizontal'
          )}`,

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
      ':active:not(:disabled)': {
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
      ${generateStylesFromTokens(tokens('text.normal'))};
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
