import React from 'react';
import { TestProps } from 'utils/types';

import { barStyle, barWrapperStyle, loaderWrapperStyle } from './ButtonLoader.style';
import { ButtonBaseProps } from 'components/ButtonBase';

export type ButtonLoaderProps = Pick<ButtonBaseProps, 'type'> & TestProps;

const ButtonLoader: React.FC<ButtonLoaderProps> = ({ type, dataTestId }) => {
  return (
    <div css={loaderWrapperStyle({ type })} data-testid={dataTestId}>
      <div css={barWrapperStyle({ type })}>
        <div css={barStyle({ type })} />
      </div>
    </div>
  );
};

ButtonLoader.displayName = 'ButtonLoader';

export default ButtonLoader;
