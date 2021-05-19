import Icon from 'components/Icon';
import useTheme from 'hooks/useTheme';
import * as React from 'react';
import { ChangeEvent, useEffect } from 'react';

import { generateTestDataId, generateUniqueID } from '../../utils/helpers';
import { TestId } from '../../utils/types';
import {
  checkboxStyle,
  checkboxWrapperStyle,
  labelStyle,
  wrapperStyle,
  markerStyle,
  getSymbolColor,
} from './CheckBox.style';

export type Props = {
  /** The label of the checkbox. */
  label?: string;
  /** Boolean defining if the checkbox is checked. Defaults to false */
  checked?: boolean;
  /** Callback function for onClick. Returns the new value and the change event. */
  onClick?(val: boolean, e: ChangeEvent): void;
  /** Boolean defining if the checkbox is disabled. Defaults to false */
  disabled?: boolean;
  /** Boolean defining if the checkbox is in intermediate state when checked ( - instead of ✓ ). Defaults to false */
  intermediate?: boolean;
  /** Whether the radio input is filled or outlined
   *
   * @default true
   * */
  filled?: boolean;
  /** The data test id if needed */
  dataTestIdSuffix?: TestId;
  /** Disables auto generated id for snapshots*/
  id?: string;
};

const CheckBox: React.FC<Props> = ({
  label,
  checked = false,
  onClick,
  disabled = false,
  intermediate = false,
  dataTestIdSuffix,
  filled = true,
  id = generateUniqueID(),
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const theme = useTheme();

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleInputChange = (event: ChangeEvent) => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);

    if (!disabled && onClick) {
      onClick(newChecked, event);
    }
  };

  return (
    <span css={wrapperStyle({ disabled })}>
      <span css={checkboxWrapperStyle()}>
        <input
          data-testid={generateTestDataId('checkbox', dataTestIdSuffix)}
          css={checkboxStyle({ intermediate, checked: isChecked, filled })}
          id={`styled-checkbox-${id}`}
          type="checkbox"
          onChange={handleInputChange}
          disabled={disabled}
          checked={isChecked}
        />
        <label htmlFor={`styled-checkbox-${id}`} css={markerStyle({ checked: isChecked })}>
          <Icon
            name={intermediate ? 'minus' : 'checkmark'}
            size={24}
            color={getSymbolColor({ intermediate, checked: isChecked, filled, theme })}
          />
        </label>
      </span>
      {label && <span css={labelStyle()}>{label}</span>}
    </span>
  );
};

export default CheckBox;
