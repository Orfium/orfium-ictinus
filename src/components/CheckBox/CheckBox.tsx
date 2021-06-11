/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import Icon from 'components/Icon';
import { ChangeEvent, useEffect } from 'react';
import { generateTestDataId, generateUniqueID } from '../../utils/helpers';
import {
  checkboxStyle,
  checkboxWrapperStyle,
  labelStyle,
  wrapperStyle,
  markerStyle,
} from './CheckBox.style';
import { TestId } from '../../utils/types';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import { pickTextColorFromSwatches } from 'theme/palette';

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
  checked,
  onClick,
  disabled = false,
  intermediate = false,
  dataTestIdSuffix,
  filled = true,
  id = generateUniqueID(),
}) => {
  const [isChecked, setIsChecked] = React.useState(Boolean(checked));
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const { color, shade } = calculateColorBetweenColorAndType('', 'branded1');

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
    <span css={wrapperStyle({ disabled })}>
      <span
        css={checkboxWrapperStyle()}
        onClick={e => {
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
          onClick={e => e.stopPropagation()}
          onChange={handleInputChange}
          disabled={disabled}
          checked={isChecked}
          ref={inputRef}
        />
        <label htmlFor={`styled-checkbox-${id}`} css={markerStyle({ checked: isChecked })}>
          <Icon
            name={intermediate ? 'minus' : 'checkmark'}
            size={24}
            color={filled ? `${pickTextColorFromSwatches(color, shade)}` : 'branded1'}
          />
        </label>
      </span>
      {label && <span css={labelStyle()}>{label}</span>}
    </span>
  );
};

export default CheckBox;
