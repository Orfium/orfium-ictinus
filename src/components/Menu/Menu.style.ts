import { css } from '@emotion/react';

import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { Props } from '../Button/Button';

export const wrapperStyle = () => () =>
  css`
    position: relative;
    display: inline-block;
  `;

const getButtonMargin =
  ({ iconLeft, iconRight, size }: Pick<Props, 'iconLeft' | 'iconRight' | 'size'>) =>
  (theme: Theme) => {
    if (iconLeft || iconRight) {
      if (size === 'sm') {
        return theme.spacing.get('4');
      } else {
        return theme.spacing.get('6');
      }
    } else {
      return 0;
    }
  };

export const buttonSpanStyle =
  ({
    size,
    iconLeft,
    iconRight,
    hasChildren,
  }: RequiredProperties<Props & { hasChildren: boolean }>) =>
  (theme: Theme) => ({
    display: iconLeft || iconRight ? 'flex' : 'block',
    flexDirection: iconLeft || iconRight ? 'row' : 'column',
    alignItems: iconLeft || iconRight ? ('center' as const) : ('flex-start' as const),
    '> :first-of-type': {
      marginLeft: getButtonMargin({ iconLeft, iconRight, size })(theme),
      marginRight: hasChildren ? theme.spacing.get('4') : 0,
    },
  });
