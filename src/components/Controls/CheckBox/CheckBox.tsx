import useTheme from 'hooks/useTheme';
import React from 'react';
import type { CheckboxAria } from 'react-aria';
import { Checkbox as ReactAriaCheckbox } from 'react-aria-components';
import type { TestProps } from 'utils/types';

import { checkboxStyles, checkboxWrapperStyles } from './CheckBox.style';
import ControlLabel from 'components/Controls/ControlLabel';
import { getControlsTokens } from 'components/Controls/Controls.tokens';
import type { LabelConfig } from 'components/Controls/Controls.types';
import Icon from 'components/Icon';

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

const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
  const {
    id,
    value,
    isSelected,
    onChange,
    isIndeterminate,
    isDisabled,
    labelConfig = {},
    dataTestPrefixId,
    children,
  } = props;
  const { placement = 'right', size = 'normal', helpText, sx } = labelConfig;

  const theme = useTheme();
  const tokens = getControlsTokens(theme);

  return (
    <div css={checkboxWrapperStyles({ placement, sx, isDisabled })}>
      <ReactAriaCheckbox
        id={id}
        css={checkboxStyles()}
        isSelected={isSelected}
        onChange={onChange}
        isIndeterminate={isIndeterminate}
        isDisabled={isDisabled}
        value={value}
        ref={ref}
        data-testid={`${dataTestPrefixId}_${value}_checkbox`}
      >
        {/** @TODO replace this icon one Icon components are revisited for v5 */}
        <Icon
          name={isIndeterminate ? 'minus' : 'checkmark'}
          size={16}
          color={tokens('checkbox.iconColor.pressed')}
          dataTestPrefixId={`${dataTestPrefixId}_${value}_${
            isIndeterminate ? 'minus' : 'checkmark'
          }`}
        />
      </ReactAriaCheckbox>
      {children && (
        <ControlLabel
          size={size}
          helpText={helpText}
          dataTestPrefixId={`${dataTestPrefixId}_radio_${value?.split(' ').join('_')}`}
        >
          {children}
        </ControlLabel>
      )}
    </div>
  );
});

CheckBox.displayName = 'CheckBox';

export default CheckBox;
