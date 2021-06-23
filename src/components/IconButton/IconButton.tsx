import * as React from 'react';

import ButtonBase, { Props as ButtonBaseProps } from 'components/ButtonBase/ButtonBase';

import { useTypeColorToColorMatch } from '../../hooks/useTypeColorToColorMatch';
import { useTheme } from '../../index';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { EventProps } from '../../utils/common';
import { TestProps } from '../../utils/types';
import { defineBackgroundColor } from '../Button/utils';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';

export type Props = Omit<ButtonBaseProps, 'isIconButton' | 'iconLeft' | 'iconRight'> & {
  /** Property indicating the size of the icon. Defaults to 16 */
  iconSize?: number;
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
};

const IconButton: React.FC<Props & TestProps & EventProps> = props => {
  const { iconSize, color = '', type = 'primary', filled = true, name } = props;
  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType(color, type);
  const iconColor = filled
    ? pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade)
    : defineBackgroundColor(theme, calculatedColor, type, true, true);

  return (
    <ButtonBase {...props} isIconButton>
      <Icon name={name} color={iconColor} size={iconSize} />
    </ButtonBase>
  );
};

export default IconButton;
