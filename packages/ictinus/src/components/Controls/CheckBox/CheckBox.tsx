import React from 'react';
import type { CheckboxAria } from 'react-aria';
import { Checkbox as ReactAriaCheckbox } from 'react-aria-components';
import type { TestProps } from 'utils/types';

import type { LabelConfig } from 'components/Controls/Controls.types';
import Box from '~/components/Box';
import { Icon } from '../../../icon';
import { ControlHelpText, ControlLabelText } from '../ControlLabel';
import { checkboxStyles, checkboxWrapperStyles } from './CheckBox.style';

export type CheckBoxProps = Partial<CheckboxAria> & {
  /** Id property of the checkbox input */
  id?: string;
  /** The value of the checkbox input */
  value?: string;
  /** Callback for when the element's selection state changes. */
  onChange?: (isSelected: boolean) => void;
  /** Whether the checkbox is indeterminately selected. */
  isIndeterminate?: boolean;
  /** Label configuration; includes placement, size, helpText and sx */
  labelConfig?: LabelConfig;
  children?: React.ReactNode;
} & TestProps;

const CheckBox = React.forwardRef<HTMLLabelElement, CheckBoxProps>((props, ref) => {
  const {
    id,
    value,
    isSelected,
    onChange,
    isIndeterminate,
    isDisabled,
    labelConfig = {},
    dataTestPrefixId = 'ictinus',
    children,
  } = props;
  const { placement = 'right', size = 'normal', helpText, sx } = labelConfig;

  return (
    <div css={checkboxWrapperStyles({ sx })}>
      <ReactAriaCheckbox
        id={id}
        css={checkboxStyles()}
        isSelected={isSelected}
        onChange={onChange}
        isIndeterminate={isIndeterminate}
        isDisabled={isDisabled}
        value={value}
        ref={ref}
        data-testid={`${dataTestPrefixId}${value ? `_${value}` : ''}_checkbox`}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="5"
          flexDirection={placement === 'left' ? 'row-reverse' : 'row'}
          justifyContent={placement === 'left' ? 'space-between' : 'unset'}
        >
          <Box data-role="checkbox-icon">
            <div>
              <Icon
                name={isIndeterminate ? 'minus' : 'check'}
                size="md"
                color="inverted.primary"
                data-testid={`${dataTestPrefixId}${value ? `_${value}` : ''}_${
                  isIndeterminate ? 'minus' : isSelected ? 'checkmark' : 'unselected'
                }`}
              />
            </div>
          </Box>
          {children && (
            <ControlLabelText
              size={size}
              dataTestPrefixId={`${dataTestPrefixId}_checkbox_${value?.split(' ').join('_')}`}
            >
              {children}
            </ControlLabelText>
          )}
        </Box>
      </ReactAriaCheckbox>
      {helpText && (
        <Box {...(placement === 'left' ? { pr: '9' } : { pl: '9' })} data-disabled={isDisabled}>
          <ControlHelpText
            helpText={helpText}
            dataTestPrefixId={`${dataTestPrefixId}_checkbox_${value?.split(' ').join('_')}`}
          >
            {helpText}
          </ControlHelpText>
        </Box>
      )}
    </div>
  );
});

CheckBox.displayName = 'CheckBox';

export default CheckBox;
