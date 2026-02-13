import React from 'react';

import type { PrimitiveButtonTypes } from 'components/Button/Button.types';
import type { ButtonBaseProps } from 'components/ButtonBase/ButtonBase';
import ButtonBase from 'components/ButtonBase/ButtonBase';
import { BUTTON_ICON_COLOR } from 'components/ButtonBase/constants';
import { Icon, type IconProps } from '../../icon';
import { type BoxProps } from '../../vanilla/Box';

export type IconButtonShape = 'circle' | 'square';

export type IconButtonProps = Omit<
  ButtonBaseProps,
  'type' | 'isBlock' | 'isLoading' | 'isIconButton'
> & {
  /** This property defines the type of the IconButton */
  type?: PrimitiveButtonTypes;
  /** This property defines the shape of the IconButton */
  shape?: IconButtonShape;
  /** This property defines witch icon to use */
  iconName: IconProps['name'];
  /** Custom icon color */
  iconColor?: BoxProps['color'];
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      size = 'normal',
      type = 'primary',
      shape = 'circle',
      iconName,
      iconColor,
      dataTestPrefixId,
      ...props
    },
    ref
  ) => (
    <ButtonBase
      {...props}
      ref={ref}
      isIconButton
      shape={shape}
      size={size}
      type={type}
      dataTestPrefixId={dataTestPrefixId ? `${dataTestPrefixId}-icon-` : 'icon-'}
    >
      <Icon
        size={size === 'compact' ? 'sm' : 'md'}
        name={iconName}
        color={iconColor ?? BUTTON_ICON_COLOR[type]}
      />
    </ButtonBase>
  )
);

IconButton.displayName = 'IconButton';

export default IconButton;
