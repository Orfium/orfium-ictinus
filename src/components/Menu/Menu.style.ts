import { css } from '@emotion/react';

import type { Theme } from '../../theme';
import type { RequiredProperties } from '../../utils/common';
import type { ButtonProps } from '../Button/Button';

export const wrapperStyle = () => () =>
  css`
    position: relative;
    display: inline-block;
  `;

const getButtonMargin =
  ({ iconLeftName, iconRightName }: Pick<ButtonProps, 'iconLeftName' | 'iconRightName'>) =>
  (theme: Theme) => {
    if (iconLeftName || iconRightName) {
      return theme.globals.spacing.get('6');
    }

    return 0;
  };

export const buttonSpanStyle =
  ({
    iconLeftName,
    iconRightName,
    hasChildren,
  }: RequiredProperties<ButtonProps & { hasChildren: boolean }>) =>
  (theme: Theme) => ({
    display: iconLeftName || iconRightName ? 'flex' : 'block',
    flexDirection: iconLeftName || iconRightName ? 'row' : 'column',
    alignItems: iconLeftName || iconRightName ? ('center' as const) : ('flex-start' as const),
    '> :first-of-type': {
      marginLeft: getButtonMargin({ iconLeftName, iconRightName })(theme),
      marginRight: hasChildren ? theme.globals.spacing.get('4') : 0,
    },
  });
