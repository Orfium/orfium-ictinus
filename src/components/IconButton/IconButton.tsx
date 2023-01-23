import React from 'react';

import { useTheme } from '../../index';
import { EventProps } from '../../utils/common';
import { TestProps } from '../../utils/types';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import ButtonBase, { ButtonBaseProps } from 'components/ButtonBase/ButtonBase';

export type IconButtonProps = Omit<ButtonBaseProps, 'iconLeftName' | 'iconRightName'> & {
  /** Property indicating the size of the icon. Defaults to 16 */
  iconSize?: number;
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
} & TestProps &
  EventProps;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { iconSize, name } = props;
  const theme = useTheme();
  const iconColor = theme.utils.getAAColorFromSwatches('blue', 500);

  return (
    <ButtonBase {...props} ref={ref} dataTestPrefixId={'icon-'}>
      <Icon name={name} color={iconColor} size={iconSize} />
    </ButtonBase>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
