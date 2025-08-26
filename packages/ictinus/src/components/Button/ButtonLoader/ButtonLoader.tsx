import React from 'react';
import type { TestProps } from 'utils/types';

import { barStyle, barWrapperStyle, loaderWrapperStyle } from './ButtonLoader.style';

export type ButtonLoaderProps = TestProps;

const ButtonLoader: React.FCC<ButtonLoaderProps> = ({ dataTestId }) => {
  return (
    <div css={loaderWrapperStyle()} data-testid={dataTestId}>
      <div css={barWrapperStyle()}>
        <div css={barStyle()} />
      </div>
    </div>
  );
};

ButtonLoader.displayName = 'ButtonLoader';

export default ButtonLoader;
