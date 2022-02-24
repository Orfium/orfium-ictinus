import { RequiredProperties } from '../../utils/common';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { Props } from '../Button/Button';
import { heightBasedOnSize } from '../ButtonBase/ButtonBase.style';

export const iconButtonStyle = ({
  size,
}: RequiredProperties<
  Props & {
    calculatedColor: ColorShapeFromComponent;
    iconExists: boolean;
    childrenCount: number;
  }
>) => () => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    padding: 0,
    width: heightBasedOnSize(size),
  };
};
