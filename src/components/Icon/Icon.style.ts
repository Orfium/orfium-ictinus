import { rem } from 'polished';
import { Theme } from '../../theme';
import { AcceptedColorComponentTypes, fillPickerBasedOnType } from '../../utils/themeFunctions';
import { colorShades } from '../../theme/palette';

type iconStyleProps = {
  /** Property indicating the color of the icon. Defaults to primary */
  color: AcceptedColorComponentTypes | string;
  /** Property indicating the size of the icon. Defaults to 16 */
  size: number;
  /** Property indicating the color's variant of the icon. */
  variant?: typeof colorShades[number];
};

export const iconStyle = ({ color, size, variant }: iconStyleProps) => (theme: Theme) => ({
  fill: fillPickerBasedOnType(color, variant)(theme),
  width: rem(size),
  height: rem(size),
  path: {
    fill: fillPickerBasedOnType(color, variant)(theme),
  },
});

export const iconContainerStyle = () => ({
  padding: rem(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
