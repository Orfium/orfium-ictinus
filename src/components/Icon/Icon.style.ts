import { rem } from 'polished';
import { Theme } from '../../theme';
import { AcceptedColorComponentTypes, fillPickerBasedOnType } from '../../utils/themeFunctions';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { ColorConfig } from '../TextField/TextField.style';

type iconStyleProps = {
  /** Property indicating the color of the icon. Defaults to primary */
  color: AcceptedColorComponentTypes | string;
  /** Property indicating the size of the icon. Defaults to 16 */
  size: number;
  colorConfig?: ColorConfig;
};

const getIconColor = (
  color: AcceptedColorComponentTypes | string,
  theme: Theme,
  colorConfig?: ColorConfig
) => {
  if (colorConfig) {
    return pickTextColorFromSwatches(colorConfig.fill, colorConfig.fillShade);
  }

  return fillPickerBasedOnType(color)(theme);
};

export const iconStyle = ({ color, size, colorConfig }: iconStyleProps) => (theme: Theme) => ({
  fill: getIconColor(color, theme, colorConfig),
  width: rem(size),
  height: rem(size),
  path: {
    fill: fillPickerBasedOnType(color)(theme),
  },
});

export const iconContainerStyle = () => ({
  padding: rem(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
