import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import * as React from 'react';
import { ChangeEvent, useEffect } from 'react';

import { useTheme } from '../../index';
import { generateTestDataId, generateUniqueID } from '../../utils/helpers';
import { TestId } from '../../utils/types';
import {
  checkboxStyle,
  checkboxWrapperStyle,
  labelStyle,
  wrapperStyle,
  markerStyle,
} from './CheckBox.style';
import Icon from 'components/Icon';

export type Props = {
  /** The label of the checkbox. */
  label?: string;
  /** Boolean defining if the checkbox is checked. */
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

const Checkbox = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const {
    label,
    checked,
    onClick,
    disabled = false,
    intermediate = false,
    dataTestIdSuffix,
    filled = true,
    id = generateUniqueID(),
  } = props;
  const [isChecked, setIsChecked] = React.useState(Boolean(checked));
  const inputRef = React.useRef<HTMLInputElement>(null);

  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const { color, shade } = calculateColorBetweenColorAndType('', 'primary');

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleInputChange = (event: ChangeEvent) => {
    const newChecked = !isChecked;
    if (checked === undefined) {
      setIsChecked(newChecked);
    }

    if (!disabled && onClick) {
      onClick(newChecked, event);
    }
  };

  return (
    <span ref={ref} css={wrapperStyle({ disabled })}>
      <span
        css={checkboxWrapperStyle({ disabled })}
        onClick={(e) => {
          e.stopPropagation();
          if (e.currentTarget === e.target) {
            inputRef?.current?.click();
          }
        }}
      >
        <input
          data-testid={generateTestDataId('checkbox', dataTestIdSuffix)}
          css={checkboxStyle({ intermediate, checked: isChecked, filled })}
          id={`styled-checkbox-${id}`}
          type="checkbox"
          onClick={(e) => e.stopPropagation()}
          onChange={handleInputChange}
          disabled={disabled}
          checked={isChecked}
          ref={inputRef}
        />
        <label htmlFor={`styled-checkbox-${id}`} css={markerStyle({ checked: isChecked })}>
          <Icon
            name={intermediate ? 'minus' : 'checkmark'}
            size={24}
            color={theme.utils.getAAColorFromSwatches(color, shade)}
          />
        </label>
      </span>
      {label && <span css={labelStyle()}>{label}</span>}
    </span>
  );
});
Checkbox.displayName = 'Checkbox';

export default Checkbox;
