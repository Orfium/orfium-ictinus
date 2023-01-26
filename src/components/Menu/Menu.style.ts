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
  ({ iconLeft, iconRight }: Pick<ButtonProps, 'iconLeft' | 'iconRight'>) =>
  (theme: Theme) => {
    if (iconLeft || iconRight) {
      return theme.globals.spacing.get('6');
    }

    return 0;
  };

export const buttonSpanStyle =
  ({
    iconLeft,
    iconRight,
    hasChildren,
  }: RequiredProperties<ButtonProps & { hasChildren: boolean }>) =>
  (theme: Theme) => ({
    display: iconLeft || iconRight ? 'flex' : 'block',
    flexDirection: iconLeft || iconRight ? 'row' : 'column',
    alignItems: iconLeft || iconRight ? ('center' as const) : ('flex-start' as const),
    '> :first-of-type': {
      marginLeft: getButtonMargin({ iconLeft, iconRight })(theme),
      marginRight: hasChildren ? theme.globals.spacing.get('4') : 0,
    },
  });
