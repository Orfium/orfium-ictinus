import React from 'react';

import { centralizedLoader } from './ButtonLoader.style';
import Loader from 'components/Loader';

export type ButtonLoaderProps = {
  innerButtonWidth?: number;
};

const ButtonLoader: React.FC<ButtonLoaderProps> = ({ innerButtonWidth }) => {
  return (
    <div css={centralizedLoader(innerButtonWidth)}>
      <Loader type={'spinner'} color={'#123456'} />
    </div>
  );
};

ButtonLoader.displayName = 'Button';

export default ButtonLoader;
