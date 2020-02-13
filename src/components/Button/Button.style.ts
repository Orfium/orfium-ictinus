import theme from 'theme';
import { colorPickerBasedOnType } from 'utils/themeFunctions';
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
  minWidth: 130,
  height: heightBasedOnSize(size),
  borderRadius: 4,
  backgroundColor: filled ? '#dfdfdf' : 'transparent',
  border: filled ? 'none' : 'solid 1px #979797',
});
