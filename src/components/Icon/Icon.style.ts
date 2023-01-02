import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { colorShades } from '../../theme/palette';
import { AcceptedColorComponentTypes, fillPickerBasedOnType } from '../../utils/themeFunctions';

type iconStyleProps = {
  /** Property indicating the color of the icon. Defaults to primary */
  color: AcceptedColorComponentTypes | string;
  /** Property indicating the size of the icon. Defaults to 16 */
  size: string | number;
  /** Property indicating the color's variant of the icon. */
  variant?: typeof colorShades[number];
};

export const iconStyle =
  ({ color, size, variant }: iconStyleProps) =>
  (theme: Theme) => ({
    fill: fillPickerBasedOnType(color, variant)(theme),
    width: size,
    height: size,
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
