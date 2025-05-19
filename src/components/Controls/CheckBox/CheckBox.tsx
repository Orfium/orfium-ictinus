import useTheme from 'hooks/useTheme';
import React from 'react';
import type { CheckboxAria } from 'react-aria';
import { Checkbox as ReactAriaCheckbox } from 'react-aria-components';
import type { TestProps } from 'utils/types';

import type { LabelConfig } from 'components/Controls/Controls.types';
import Icon from 'components/Icon';
import Box from '~/components/Box';
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

  const theme = useTheme();

  return (
    <div css={checkboxWrapperStyles({ sx, isDisabled })}>
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
            <Icon
              name={isIndeterminate ? 'minus' : 'check'}
              size={theme.dimension.sizing.get('icon.md')}
              color={theme.tokens.colors.get('textColor.inverted.primary')}
              dataTestId={`${dataTestPrefixId}${value ? `_${value}` : ''}_${
                isIndeterminate ? 'minus' : isSelected ? 'checkmark' : 'unselected'
              }`}
            />
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
      <Box {...(placement === 'left' ? { pr: '9' } : { pl: '9' })}>
        {helpText && (
          <ControlHelpText
            helpText={helpText}
            dataTestPrefixId={`${dataTestPrefixId}_checkbox_${value?.split(' ').join('_')}`}
          >
            {helpText}
          </ControlHelpText>
        )}
      </Box>
    </div>
  );
});

CheckBox.displayName = 'CheckBox';

export default CheckBox;
