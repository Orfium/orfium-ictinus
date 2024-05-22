import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { ButtonBaseProps } from './ButtonBase';
import { buttonColorToSemColor, typographySizes } from './constants';
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

      if (isIconButton) return tokens(`${size}.size`);

      return undefined;
    };

    const baseButtonStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.tokens.colors.get(buttonColorToSemColor[type].text),
      width: getButtonWidth(),
      height: tokens(`${size}.size`),
      backgroundColor: theme.tokens.colors.get(
        buttonColorToSemColor[type][isLoading ? 'activeFill' : 'defaultFill']
      ),
      padding: tokens(`${size}.padding`),
      borderRadius:
        isIconButton && shape === 'circle'
          ? theme.dimension.borderRadius.get('circle')
          : theme.dimension.borderRadius.get('md'),
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color,border 150ms linear',

      ':focus-visible:not(:disabled)': {
        backgroundColor: theme.tokens.colors.get(buttonColorToSemColor[type].hoverFill),
      },
      ':disabled': {
        opacity: theme.tokens.disabledState.get('default'),
        cursor: 'not-allowed',
      },
      ':hover:not(:disabled)': {
        backgroundColor: theme.tokens.colors.get(buttonColorToSemColor[type].hoverFill),
      },
      ':active:not(:disabled), &[aria-expanded="true"]': {
        backgroundColor: theme.tokens.colors.get(buttonColorToSemColor[type].activeFill),
      },
    };

    const loadingStyles =
      isLoading && !isDisabled
        ? {
            pointerEvents: 'none' as const,
          }
        : {};

    return css`
      ${generateStylesFromTokens(theme.tokens.typography.get(typographySizes[size]))};
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
