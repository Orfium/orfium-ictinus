import * as React from 'react';
import type { SwitchAria } from 'react-aria';
import { Switch as ReactAriaSwitch } from 'react-aria-components';
import type { TestProps } from 'utils/types';

import { ControlHelpText, ControlLabelText } from 'components/Controls/ControlLabel';
import type { LabelConfig } from 'components/Controls/Controls.types';
import { rem } from 'polished';
import Box from '~/components/Box';
import { switchStyles } from './Switch.style';

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

const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const {
    id,
    value,
    isSelected,
    isDisabled,
    onChange,
    labelConfig = {},
    dataTestPrefixId = 'ictinus',
    children,
  } = props;
  const { placement = 'right', size = 'normal', helpText, sx } = labelConfig;

  return (
    <div>
      <ReactAriaSwitch
        id={id}
        value={value}
        isSelected={isSelected}
        isDisabled={isDisabled}
        onChange={onChange}
        css={switchStyles({ placement, sx })}
        data-testid={`${dataTestPrefixId}${value ? `_${value}` : ''}_switch`}
        ref={ref}
      >
        <Box
          display="flex"
          gap="5"
          flexDirection={placement === 'left' ? 'row-reverse' : 'row'}
          justifyContent={placement === 'left' ? 'space-between' : 'unset'}
        >
          <Box>
            <div className="bar" />
            <div className="indicator" />
          </Box>
          {children && (
            <ControlLabelText
              size={size}
              dataTestPrefixId={`${dataTestPrefixId}_switch_${value?.split(' ').join('_')}`}
            >
              {children}
            </ControlLabelText>
          )}
        </Box>
      </ReactAriaSwitch>
      <Box
        /** switchWidth (36px) + gap (12px) = 48px, which we don't have in our preset spacing values */
        css={{ ...(placement === 'left' ? { paddingRight: rem(48) } : { paddingLeft: rem(48) }) }}
      >
        {helpText && <ControlHelpText helpText={helpText}>{helpText}</ControlHelpText>}
      </Box>
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
