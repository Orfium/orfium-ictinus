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
  isChecked?: boolean;
  /** Callback function for onClick. Returns the new value and the change event. */
  onClick?(val: boolean, e: ChangeEvent): void;
  /** Boolean defining if the checkbox is disabled. Defaults to false */
  isDisabled?: boolean;
  /** Boolean defining if the checkbox is in intermediate state when checked ( - instead of ✓ ). Defaults to false */
  isIntermediate?: boolean;
  /** Whether the radio input is filled or outlined
   *
   * @default true
   * */
  isFilled?: boolean;
  /** The data test id if needed */
  dataTestIdSuffix?: TestId;
  /** Disables auto generated id for snapshots*/
  id?: string;
  ref?: React.ForwardedRef<HTMLSpanElement>;
};

const CheckBox: React.FC<Props> = ({
  label,
  isChecked,
  onClick,
  isDisabled = false,
  isIntermediate = false,
  dataTestIdSuffix,
  isFilled = true,
  id = generateUniqueID(),
  ref,
}) => {
  const [isCheckedState, setIsCheckedState] = React.useState(Boolean(isChecked));
  const inputRef = React.useRef<HTMLInputElement>(null);

  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const { color, shade } = calculateColorBetweenColorAndType('', 'primary');

  useEffect(() => {
    if (isChecked !== undefined) {
      setIsCheckedState(isChecked);
    }
  }, [isChecked]);

  const handleInputChange = (event: ChangeEvent) => {
    const isCheckedToggledScoped = !isCheckedState;
    if (isChecked === undefined) {
      setIsCheckedState(isCheckedToggledScoped);
    }

    if (!isDisabled && onClick) {
      onClick(isCheckedToggledScoped, event);
    }
  };

  return (
    <span ref={ref} css={wrapperStyle({ isDisabled })}>
      <span
        css={checkboxWrapperStyle({ isDisabled })}
        onClick={(e) => {
          e.stopPropagation();
          if (e.currentTarget === e.target) {
            inputRef?.current?.click();
          }
        }}
      >
        <input
          data-testid={generateTestDataId('checkbox', dataTestIdSuffix)}
          css={checkboxStyle({ isIntermediate, isChecked: isCheckedState, isFilled })}
          id={`styled-checkbox-${id}`}
          type="checkbox"
          onClick={(e) => e.stopPropagation()}
          onChange={handleInputChange}
          disabled={isDisabled}
          checked={isCheckedState}
          ref={inputRef}
        />
        <label htmlFor={`styled-checkbox-${id}`} css={markerStyle({ isChecked: isCheckedState })}>
          <Icon
            name={isIntermediate ? 'minus' : 'checkmark'}
            size={24}
            color={theme.utils.getAAColorFromSwatches(color, shade)}
          />
        </label>
      </span>
      {label && <span css={labelStyle()}>{label}</span>}
    </span>
  );
};
CheckBox.displayName = 'Checkbox';

export default React.forwardRef<HTMLSpanElement, Props>((props, ref) => (
  <CheckBox {...props} ref={ref} />
));
