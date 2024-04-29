import useTheme from 'hooks/useTheme';
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

  const theme = useTheme();

  return (
    <div css={stepperContainerStyle()}>
      <Button
        isDisabled={isDisabled}
        slot="increment"
        css={buttonWrapperStyle()}
        data-testid={`${dataTestId}_increment`}
      >
        <Icon
          name="triangleUp"
          color={theme.tokens.colors.get('textColor.default.secondary')}
          size={theme.dimension.sizing.get('icon.md')}
        />
      </Button>
      <Button
        isDisabled={isDisabled}
        slot="decrement"
        css={buttonWrapperStyle()}
        data-testid={`${dataTestId}_decrement`}
      >
        <Icon
          name="triangleDown"
          color={theme.tokens.colors.get('textColor.default.secondary')}
          size={theme.dimension.sizing.get('icon.md')}
        />
      </Button>
    </div>
  );
};

export default Stepper;
