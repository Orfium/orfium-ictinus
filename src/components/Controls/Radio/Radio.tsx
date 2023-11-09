import useCombinedRefs from 'hooks/useCombinedRefs';
import * as React from 'react';
import { useRadio, VisuallyHidden } from 'react-aria';
import isEqual from 'react-fast-compare';
import { RadioGroupState } from 'react-stately';
import { TestProps } from 'utils/types';

import { useRadioGroupContent } from './components/RadioGroup';
import { radioContainerStyles } from './Radio.style';
import ControlLabel from '../ControlLabel';
import { LabelConfig } from '../Controls.types';

export type Props = {
  /** Id property of the radio input */
  id?: string;
  /** The value of the radio input */
  value: string;
  /** Label configuration; includes placement, size, helpText and sx */
  labelConfig?: LabelConfig;
  /** Whether the radio input is disabled */
  isDisabled?: boolean;
  children?: React.ReactNode;
} & TestProps;

const Radio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { id, value, isDisabled, labelConfig = {}, dataTestPrefixId, children } = props;
  const { placement = 'right', size = 'normal', helpText, sx } = labelConfig;

  const inputRef = React.useRef(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const state = useRadioGroupContent() as RadioGroupState;

  const inputProps = useRadio(props, state, inputRef);

  const isSelected = inputProps.isSelected;
  const isRadioDisabled = isDisabled || inputProps.isDisabled;

  return (
    <div
      data-testid={`${dataTestPrefixId}_radio_${value.split(' ').join('_')}_container`}
      css={radioContainerStyles({ placement, sx })}
    >
      <label data-selected={isSelected} data-disabled={isRadioDisabled}>
        <VisuallyHidden>
          <input id={id} {...inputProps.inputProps} ref={combinedRefs} />
        </VisuallyHidden>
        {children && (
          <ControlLabel
            size={size}
            helpText={helpText}
            dataTestPrefixId={`${dataTestPrefixId}_radio_${value.split(' ').join('_')}`}
          >
            {children}
          </ControlLabel>
        )}
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';

export default React.memo(Radio, isEqual);
