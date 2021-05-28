import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { Props } from '../Button/Button';
import { buttonStyle, heightBasedOnSize } from '../Button/Button.style';

export const iconButtonStyle = ({
  type,
  filled,
  transparent,
  calculatedColor,
  size,
  iconExists,
  disabled,
  color,
  iconLeft,
  iconRight,
}: RequiredProperties<
  Props & {
    calculatedColor: ColorShapeFromComponent;
    iconExists: boolean;
    childrenCount: number;
  }
>) => (theme: Theme) => {
  const baseButtonStyles = buttonStyle({
    type,
    filled,
    size,
    color,
    calculatedColor,
    iconExists,
    transparent,
    disabled,
    iconLeft,
    iconRight,
    childrenCount: 1,
  })(theme);

  return {
    ...baseButtonStyles,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    padding: 0,
    width: heightBasedOnSize(size),
  };
};
