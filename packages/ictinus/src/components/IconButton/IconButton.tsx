import React from 'react';

import { vars } from '@orfium/tokens';
import type { PrimitiveButtonTypes } from 'components/Button/Button.types';
import type { ButtonBaseProps } from 'components/ButtonBase/ButtonBase';
import ButtonBase from 'components/ButtonBase/ButtonBase';
import { BUTTON_COLOR } from 'components/ButtonBase/constants';
import Icon from '../Icon';
import { type AcceptedIconNames } from '../Icon/Icon.types';

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
  iconName: AcceptedIconNames;
  /** Custom icon color */
  iconColor?: string;
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
        size={vars.sizing[size === 'compact' ? '4' : '5']}
        name={iconName}
        color={iconColor ?? BUTTON_COLOR[type].text}
      />
    </ButtonBase>
  )
);

IconButton.displayName = 'IconButton';

export default IconButton;
