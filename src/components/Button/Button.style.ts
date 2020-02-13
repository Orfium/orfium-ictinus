import theme from 'theme';
import { colorPickerBasedOnType, backgroundPickerBasedOnType } from 'utils/themeFunctions';
import { Props } from 'src/components/Button/Button';

const heightBasedOnSize = (size: 'lg' | 'md' | 'sm') => {
  switch (size) {
    case 'lg':
      return 56;
    case 'sm':
      return 40;
    default:
      return 46;
  }
};

export const buttonStyle = ({ type, filled, size }: Props) => ({
  fontSize: theme.typography.fontSizes['16'],
  color: colorPickerBasedOnType(type),
  backgroundColor: filled ? backgroundPickerBasedOnType(type) : 'transparent',
  paddingLeft: theme.spacing.md,
  paddingRight: theme.spacing.md,
  height: heightBasedOnSize(size),
  borderRadius: theme.spacing.xsm,
  border: filled ? 'none' : 'solid 1px #979797',
});
