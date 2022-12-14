import { css } from '@emotion/react';

import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { ButtonProps } from '../Button/Button';

export const wrapperStyle = () => () =>
  css`
    position: relative;
    display: inline-block;
  `;

const getButtonMargin =
  ({ iconLeft, iconRight, size }: Pick<ButtonProps, 'iconLeft' | 'iconRight' | 'size'>) =>
  (theme: Theme) => {
    if (iconLeft || iconRight) {
      if (size === 'sm') {
        return theme.spacing.get('4');
      }

      return theme.spacing.get('6');
    }

    return 0;
  };

export const buttonSpanStyle =
  ({
    size,
    iconLeft,
    iconRight,
    hasChildren,
  }: RequiredProperties<ButtonProps & { hasChildren: boolean }>) =>
  (theme: Theme) => ({
    display: iconLeft || iconRight ? 'flex' : 'block',
    flexDirection: iconLeft || iconRight ? 'row' : 'column',
    alignItems: iconLeft || iconRight ? ('center' as const) : ('flex-start' as const),
    '> :first-of-type': {
      marginLeft: getButtonMargin({ iconLeft, iconRight, size })(theme),
      marginRight: hasChildren ? theme.spacing.get('4') : 0,
    },
  });
