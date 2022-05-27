import React from 'react';

import { useTypeColorToColorMatch } from '../../hooks/useTypeColorToColorMatch';
import { useTheme } from '../../index';
import { EventProps } from '../../utils/common';
import { TestProps } from '../../utils/types';
import { defineBackgroundColor } from '../Button/utils';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import { sxProp } from './IconButton.style';
import ButtonBase, { Props as ButtonBaseProps } from 'components/ButtonBase/ButtonBase';

export type Props = Omit<ButtonBaseProps, 'isIconButton' | 'iconLeft' | 'iconRight'> & {
  /** Property indicating the size of the icon. Defaults to 16 */
  iconSize?: number;
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
};

const IconButton = React.forwardRef<HTMLButtonElement, Props & TestProps & EventProps>(
  (props, ref) => {
    const { iconSize, color = '', type = 'primary', filled = true, name, transparent } = props;
    const theme = useTheme();
    const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
    const calculatedColor = calculateColorBetweenColorAndType(color, type);
    const iconColor =
      filled && !transparent
        ? theme.utils.getAAColorFromSwatches(calculatedColor.color, calculatedColor.shade)
        : defineBackgroundColor(theme, calculatedColor, type, true, true);

    const sx = sxProp({ size: props.size });

    return (
      <ButtonBase {...props} ref={ref} sx={sx} dataTestPrefixId={'icon-'}>
        <Icon name={name} color={iconColor} size={iconSize} />
      </ButtonBase>
    );
  }
);
IconButton.displayName = 'IconButton';

export default IconButton;
