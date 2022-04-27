import { rgba } from 'polished';
import React from 'react';
import ReactSwitch from 'react-switch';

import { useTheme } from '../../index';
import { TestProps } from '../../utils/types';
import { Label, SwitchWrapper, Container } from './Switch.style';

interface Props {
  label?: string;
  labelPlacement?: 'left' | 'right';
  checked: boolean;
  onChange: (
    checked?: boolean,
    event?: React.SyntheticEvent<MouseEvent | KeyboardEvent> | MouseEvent
  ) => void;
  disabled?: boolean;
}

const Switch: React.FC<Props & TestProps> = ({
  disabled = false,
  label,
  checked,
  onChange,
  labelPlacement = 'left',
  dataTestId = 'switch',
}) => {
  const theme = useTheme();

  const addLabel = (component: JSX.Element) => {
    if (!label) {
      return component;
    }

    return (
      <label>
        <Container>
          {labelPlacement === 'left' ? (
            <>
              <Label data-testid={`${dataTestId}_label`}>{label}</Label>
              {component}
            </>
          ) : (
            <>
              {component}
              <Label>{label}</Label>
            </>
          )}
        </Container>
      </label>
    );
  };

  return addLabel(
    <SwitchWrapper checked={checked} disabled={disabled}>
      <ReactSwitch
        data-testid={dataTestId}
        checked={checked}
        onChange={onChange}
        offHandleColor={theme.utils.getColor('lightGrey', 50)}
        offColor={theme.utils.getColor('lightGrey', 150)}
        onHandleColor={theme.utils.getColor('blue', 500)}
        onColor={theme.utils.getColor('blue', 150)}
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        height={8}
        width={30}
        activeBoxShadow={`${rgba(14, 14, 23, 0.1)} 0 0 2px 3px`}
        disabled={disabled}
      />
    </SwitchWrapper>
  );
};

Switch.displayName = 'Switch';

export default Switch;
