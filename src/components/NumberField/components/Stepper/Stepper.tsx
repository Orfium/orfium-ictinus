import React from 'react';
import { Button } from 'react-aria-components';

import { buttonWrapperStyle, stepperContainerStyle } from './Stepper.style';
import Icon from 'components/Icon';

type Props = {
  isDisabled?: boolean;
  dataTestIdPrefix?: string;
};

const Stepper: React.FCC<Props> = ({ isDisabled, dataTestIdPrefix }) => {
  const dataTestId = dataTestIdPrefix ? `${dataTestIdPrefix}_number` : 'number';

  return (
    <div css={stepperContainerStyle()}>
      <Button
        isDisabled={isDisabled}
        slot="increment"
        css={buttonWrapperStyle()}
        data-testid={`${dataTestId}_increment`}
      >
        {/** @TODO add tokens instead of hex color */}
        <Icon name="triangleUp" color="#54587F" size={12} />
      </Button>
      <Button
        isDisabled={isDisabled}
        slot="decrement"
        css={buttonWrapperStyle()}
        data-testid={`${dataTestId}_decrement`}
      >
        {/** @TODO add tokens instead of hex color */}
        <Icon name="triangleDown" color="#54587F" size={12} />
      </Button>
    </div>
  );
};

export default Stepper;
