import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { ComponentSizes } from '@orfium/tokens';
import { vars } from '@orfium/tokens';
import { generateStylesFromTokens } from 'components/Typography/utils';
import type { Theme } from '../../theme';
import type { ButtonBaseProps } from './ButtonBase';
import { BUTTON_COLOR, typographySizes } from './constants';

const BUTTON_SIZE: Record<ComponentSizes, Record<string, string>> = {
  compact: {
    size: vars.sizing['7'],
    padding: `${vars.spacing['0']} ${vars.spacing['4']} ${vars.spacing['0']} ${vars.spacing['4']}`,
  },
  normal: {
    size: vars.sizing['9'],
    padding: `${vars.spacing['0']} ${vars.spacing['6']} ${vars.spacing['0']} ${vars.spacing['6']}`,
  },
};

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
    const getButtonWidth = () => {
      if (isBlock) return '100%';

      if (isIconButton) return BUTTON_SIZE[size].size;

      return undefined;
    };

    const baseButtonStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: vars.spacing['4'],
      color: BUTTON_COLOR[type].text,
      width: getButtonWidth(),
      height: BUTTON_SIZE[size].size,
      backgroundColor: BUTTON_COLOR[type][isLoading ? 'activeFill' : 'defaultFill'],
      padding: isIconButton ? 0 : BUTTON_SIZE[size].padding,
      borderRadius:
        isIconButton && shape === 'circle'
          ? vars['border-radius']['7']
          : vars['border-radius']['2'],
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color,border 150ms linear',

      ':focus-visible:not(:disabled)': {
        backgroundColor: BUTTON_COLOR[type].hoverFill,
      },
      ':disabled': {
        opacity: theme.tokens.disabledState.get('default'),
        cursor: 'not-allowed',
      },
      ':hover:not(:disabled)': {
        backgroundColor: BUTTON_COLOR[type].hoverFill,
      },
      ':active:not(:disabled), &[aria-expanded="true"]': {
        backgroundColor: BUTTON_COLOR[type].activeFill,
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
