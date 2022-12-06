import React from 'react';

import { useTypeColorToColorMatch } from '../../../hooks/useTypeColorToColorMatch';
import { useTheme } from '../../../index';
import { ButtonBaseProps } from '../../ButtonBase/ButtonBase';
import { centralizedLoader } from './ButtonLoader.style';
import Loader from 'components/Loader';

export type ButtonLoaderProps = {
  innerButtonWidth?: number;
} & Pick<ButtonBaseProps, 'type' | 'color'>;

const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  innerButtonWidth,
  type = 'primary',
  color = '',
}) => {
  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType(color, type);
  const spinnerColor = theme.utils.getAAColorFromSwatches(
    calculatedColor.color,
    calculatedColor.shade
  );

  return (
    <div css={centralizedLoader(innerButtonWidth)}>
      <Loader type={'spinner'} color={spinnerColor} />
    </div>
  );
};

ButtonLoader.displayName = 'Button';

export default ButtonLoader;
