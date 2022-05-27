import { Props } from '../Button/Button';
import { heightBasedOnSize } from '../ButtonBase/ButtonBase.style';

export const sxProp = ({ size }: Pick<Props, 'size'>) => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '100%',
      padding: 0,
      width: heightBasedOnSize(size || 'default'),
    },
  };
};
