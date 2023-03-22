import useTheme from 'hooks/useTheme';
import React from 'react';

import getButtonTokens from '../Button/Button.tokens';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import { PrimitiveButtonTypes } from 'components/Button/Button.types';
import ButtonBase, { ButtonBaseProps } from 'components/ButtonBase/ButtonBase';

export type IconButtonShape = 'circle' | 'square';

export type IconButtonProps = Omit<
  ButtonBaseProps,
  'type' | 'isBlock' | 'isLoading' | 'isIconButton'
> & {
  /** This property defines the type of the IconButton */
  type?: PrimitiveButtonTypes;
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** This property defines the shape of the IconButton */
  shape?: IconButtonShape;
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { name, type = 'primary', shape = 'circle', dataTestPrefixId } = props;
  const theme = useTheme();
  const buttonTokens = getButtonTokens(theme);

  const iconColor = buttonTokens.color[type].textColor;

  return (
    <ButtonBase
      {...props}
      ref={ref}
      isIconButton
      shape={shape}
      dataTestPrefixId={dataTestPrefixId ? `${dataTestPrefixId}-icon-` : 'icon-'}
    >
      <Icon name={name} color={iconColor} />
    </ButtonBase>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
