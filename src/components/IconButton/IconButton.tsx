import * as React from 'react';
import { EventProps } from '../../utils/common';
import { generateTestDataId } from '../../utils/helpers';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import { TestId } from '../../utils/types';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import { iconButtonStyle } from './IconButton.style';
import { useTypeColorToColorMatch } from '../../hooks/useTypeColorToColorMatch';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { defineBackgroundColor } from '../Button/utils';
import { useTheme } from '../../index';

export type Props = {
  /** Type indicating the type of the button */
  type?: AcceptedColorComponentTypes;
  /** the color of the button based on our colors eg. red-400 */
  color?: string;
  /** Property indicating the size of the icon. Defaults to 16 */
  iconSize?: number;
  /** This property define the size of the button. Defaults to 'md' */
  size?: 'lg' | 'md' | 'sm';
  /** Property indicating if the component is filled with a color based on the type */
  filled?: boolean;
  /** Property indicating if the component is transparent with a color based on the type */
  transparent?: boolean;
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** Define if the button is in disabled state */
  disabled?: boolean;
};

export type TestProps = {
  dataTestId?: TestId;
};

const IconButton: React.FC<Props & TestProps & EventProps> = ({
  size = 'md',
  iconSize,
  color = '',
  type = 'primary',
  filled = true,
  name,
  dataTestId = '',
  onClick,
  onBlur,
  disabled = false,
  transparent = false,
}) => {
  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType(color, type);
  const iconColor = filled
    ? pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade)
    : defineBackgroundColor(theme, calculatedColor, type, true, true);

  return (
    <button
      data-testid={generateTestDataId('icon-button', dataTestId)}
      css={iconButtonStyle({
        type,
        filled,
        size,
        color,
        transparent,
        calculatedColor,
        iconExists: true,
        disabled,
        iconLeft: null,
        iconRight: null,
        childrenCount: 1,
      })}
      onClick={onClick}
      onBlur={onBlur}
      color={color}
      disabled={disabled}
    >
      <Icon name={name} color={iconColor} size={iconSize} />
    </button>
  );
};

export default IconButton;
