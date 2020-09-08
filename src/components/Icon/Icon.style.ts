import { Theme } from 'theme';
import { rem } from 'polished';
import { AcceptedColorComponentTypes, fillPickerBasedOnType } from 'utils/themeFunctions';

type iconStyleProps = {
  /** Property indicating the color of the icon. Defaults to primary */
  color: AcceptedColorComponentTypes;
  /** Property indicating the size of the icon. Defaults to 16 */
  size: number;
};

export const iconStyle = ({ color, size }: iconStyleProps) => (theme: Theme) => ({
  fill: fillPickerBasedOnType(color)(theme),
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
