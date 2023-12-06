import useCombinedRefs from 'hooks/useCombinedRefs';
import * as React from 'react';
import type { RadioAria } from 'react-aria';
import { mergeProps, useFocusRing, useRadio, VisuallyHidden } from 'react-aria';
import type { RadioGroupState } from 'react-stately';
import type { TestProps } from 'utils/types';

import { useRadioGroupContent } from './components/RadioGroup';
import { radioContainerStyles } from './Radio.style';
import ControlLabel from '../ControlLabel';
import type { LabelConfig } from '../Controls.types';

export type RadioProps = Partial<RadioAria> & {
  /** Id property of the radio input */
  id?: string;
  /** The value of the radio input */
  value: string;
  /** Label configuration; includes placement, size, helpText and sx */
  labelConfig?: LabelConfig;
  children?: React.ReactNode;
} & TestProps;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { id, value, labelConfig = {}, dataTestPrefixId, children } = props;
  const { placement = 'right', size = 'normal', helpText, sx } = labelConfig;

  const inputRef = React.useRef(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const state = useRadioGroupContent();

  const radioProps = useRadio(props, state ?? ({} as RadioGroupState), inputRef);

  const { inputProps, isSelected, isDisabled } = state ? radioProps : props;

  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <div
      data-testid={`${dataTestPrefixId}_radio_${value.split(' ').join('_')}_container`}
      css={radioContainerStyles({ placement, sx, isFocusVisible })}
    >
      <label data-selected={isSelected} data-disabled={isDisabled}>
        <VisuallyHidden>
          <input id={id} {...mergeProps(inputProps, focusProps)} ref={combinedRefs} tabIndex={0} />
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

export default Radio;
