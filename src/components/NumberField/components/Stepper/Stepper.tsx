import Icon from 'components/Icon';
import useTheme from 'hooks/useTheme';
import { rem } from 'polished';
import React from 'react';
import { Button } from 'react-aria-components';
import { buttonWrapperStyle, stepperContainerStyle } from './Stepper.style';

type Props = {
  size?: 'normal' | 'compact';
  isDisabled?: boolean;
  dataTestIdPrefix?: string;
};

const Stepper: React.FCC<Props> = ({ size, isDisabled, dataTestIdPrefix }) => {
  const theme = useTheme();
  const dataTestId = dataTestIdPrefix ? `${dataTestIdPrefix}_number` : 'number';
  const compactSizeBtnStyles = size === 'compact' ? { height: rem(15) } : {};

  return (
    <div css={stepperContainerStyle(size)}>
      <Button
        isDisabled={isDisabled}
        slot="increment"
        css={buttonWrapperStyle()}
        data-testid={`${dataTestId}_increment`}
        style={compactSizeBtnStyles}
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
        style={compactSizeBtnStyles}
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
