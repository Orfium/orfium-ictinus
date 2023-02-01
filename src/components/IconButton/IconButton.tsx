import useTheme from 'hooks/useTheme';
import React from 'react';

import getButtonTokens from '../Button/Button.tokens';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import { ButtonTypes } from 'components/Button/Button.types';
import ButtonBase, { ButtonBaseProps } from 'components/ButtonBase/ButtonBase';

export type IconButtonRadius = 'rounded' | 'squared';

export type IconButtonProps = Omit<
  ButtonBaseProps,
  'type' | 'isBlock' | 'isLoading' | 'isIconButton'
> & {
  /** This property defines the type of the IconButton */
  type?: Exclude<ButtonTypes, 'danger' | 'inverted' | 'invertedAlt'>;
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** This property defines the radius of the IconButton */
  radius?: IconButtonRadius;
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { name, type = 'primary', radius = 'rounded' } = props;
  const theme = useTheme();
  const buttonTokens = getButtonTokens(theme);

  const iconColor = buttonTokens.color[type].textColor;

  return (
    <ButtonBase {...props} ref={ref} isIconButton radius={radius} dataTestPrefixId={'icon-'}>
      <Icon name={name} color={iconColor} />
    </ButtonBase>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
