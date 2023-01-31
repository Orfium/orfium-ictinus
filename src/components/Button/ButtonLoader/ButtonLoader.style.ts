import { css, SerializedStyles, keyframes } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import getStatesTokens from '../../../theme/states/states.tokens';
import getButtonTokens from '../../Button/Button.tokens';
import { ButtonTypes } from '../Button.types';
import { ButtonBaseProps } from 'components/ButtonBase';

const getBarHeight = ({ type }: Pick<ButtonBaseProps, 'type'>) =>
  type === 'invertedAlt' || type === 'tertiary' ? rem(2) : rem(4);

const getBoxShadowBackgroundColor = (type: ButtonTypes) => (theme: Theme) => {
  const stateTokens = getStatesTokens(theme);

  return `0 -2px 0px 0px inset ${stateTokens.active.backgroundColor[type]}`;
};

export const loaderWrapperStyle =
  ({ type = 'primary' }: Pick<ButtonBaseProps, 'type'>) =>
  (theme: Theme): SerializedStyles => {
    const buttonTokens = getButtonTokens(theme);

    return css({
      width: '100%',
      height: getBarHeight({ type }),
      position: 'absolute',
      borderTopLeftRadius: buttonTokens.borderRadius.text,
      borderTopRightRadius: buttonTokens.borderRadius.text,
      boxShadow: getBoxShadowBackgroundColor(type)(theme),
    });
  };

export const barWrapperStyle =
  ({ type = 'primary' }: Pick<ButtonBaseProps, 'type'>) =>
  (theme: Theme): SerializedStyles => {
    const buttonTokens = getButtonTokens(theme);

    return css({
      width: '100%',
      height: getBarHeight({ type }),
      overflow: 'hidden',
      backgroundColor: theme.utils.getColor('magenta', 150),
      borderTopLeftRadius: buttonTokens.borderRadius.text,
      borderTopRightRadius: buttonTokens.borderRadius.text,
      boxShadow: getBoxShadowBackgroundColor(type)(theme),
      position: 'relative',
    });
  };

export const barStyle =
  ({ type = 'primary' }: Pick<ButtonBaseProps, 'type'>) =>
  (theme: Theme): SerializedStyles => {
    const barAnimation = keyframes({
      from: {
        left: '-50%',
      },
      to: {
        left: '100%',
      },
    });

    return css({
      width: '50%',
      background: 'linear-gradient(270deg, #F814E1 0.02%, #4945EE 100%)',
      height: getBarHeight({ type }),
      boxShadow: getBoxShadowBackgroundColor(type)(theme),
      position: 'absolute',
      bottom: '0',
      top: '0',
      animation: `${barAnimation} 1.5s infinite`,
    });
  };
