import React from 'react';

import { vars } from '@orfium/tokens';
import type { PrimitiveButtonTypes } from 'components/Button/Button.types';
import type { ButtonBaseProps } from 'components/ButtonBase/ButtonBase';
import ButtonBase from 'components/ButtonBase/ButtonBase';
import { BUTTON_COLOR } from 'components/ButtonBase/constants';
import type { AcceptedIconNames } from '../Icon';
import Icon from '../Icon';

export type IconButtonShape = 'circle' | 'square';

export type IconButtonProps = Omit<
  ButtonBaseProps,
  'type' | 'isBlock' | 'isLoading' | 'isIconButton'
> & {
  /** This property defines the type of the IconButton */
  type?: PrimitiveButtonTypes;
  /** This property defines witch icon to use */
  iconName: AcceptedIconNames;
  /** This property defines the shape of the IconButton */
  shape?: IconButtonShape;
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { iconName, size = 'normal', type = 'primary', shape = 'circle', dataTestPrefixId } = props;

  const iconColor = BUTTON_COLOR[type].text;

  return (
    <ButtonBase
      {...props}
      ref={ref}
      isIconButton
      shape={shape}
      dataTestPrefixId={dataTestPrefixId ? `${dataTestPrefixId}-icon-` : 'icon-'}
    >
      <Icon size={vars.sizing[size === 'compact' ? '4' : '5']} name={iconName} color={iconColor} />
    </ButtonBase>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
