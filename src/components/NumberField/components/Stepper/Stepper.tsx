import useTheme from 'hooks/useTheme';
import React from 'react';
import { Button } from 'react-aria-components';

import { buttonWrapperStyle, stepperContainerStyle } from './Stepper.style';
import Icon from 'components/Icon';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

type Props = {
  isDisabled?: boolean;
  dataTestIdPrefix?: string;
};

const Stepper: React.FCC<Props> = ({ isDisabled, dataTestIdPrefix }) => {
  const dataTestId = dataTestIdPrefix ? `${dataTestIdPrefix}_number` : 'number';

  const theme = useTheme();
  const tokens = getTextInputBaseTokens(theme);

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
          color={tokens('addOn.iconColor')}
          size={theme.tokens.icon.get('size.3')}
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
          color={tokens('addOn.iconColor')}
          size={theme.tokens.icon.get('size.3')}
        />
      </Button>
    </div>
  );
};

export default Stepper;
