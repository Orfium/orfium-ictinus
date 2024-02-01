import * as React from 'react';
import type { SwitchAria } from 'react-aria';
import { Switch as ReactAriaSwitch } from 'react-aria-components';
import type { TestProps } from 'utils/types';

import { switchStyles } from './Switch.style';
import ControlLabel from 'components/Controls/ControlLabel';
import type { LabelConfig } from 'components/Controls/Controls.types';

export type SwitchProps = Partial<SwitchAria> & {
  /** Id property of the switch element */
  id?: string;
  /** The value of the switch element */
  value?: string;
  /** Callback for when the element's selection state changes. */
  onChange?: (isSelected: boolean) => void;
  /** Label configuration; includes placement, size, helpText and sx */
  labelConfig?: LabelConfig;
  children?: React.ReactNode;
} & TestProps;

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    id,
    value,
    isSelected,
    isDisabled,
    onChange,
    labelConfig = {},
    dataTestPrefixId,
    children,
  } = props;
  const { placement = 'right', size = 'normal', helpText, sx } = labelConfig;

  return (
    <ReactAriaSwitch
      id={id}
      value={value}
      isSelected={isSelected}
      isDisabled={isDisabled}
      onChange={onChange}
      css={switchStyles({ placement, sx })}
      data-testid={`${dataTestPrefixId}_${value}_switch`}
      ref={ref}
    >
      <div className="bar" />
      <div className="indicator" />
      {children && (
        <ControlLabel
          size={size}
          helpText={helpText}
          dataTestPrefixId={`${dataTestPrefixId}_radio_${value?.split(' ').join('_')}`}
        >
          {children}
        </ControlLabel>
      )}
    </ReactAriaSwitch>
  );
});

Switch.displayName = 'Switch';

export default Switch;
