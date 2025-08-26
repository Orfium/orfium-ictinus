import type { CSSObject } from '@emotion/react';
import * as React from 'react';
import { useRadioGroup } from 'react-aria';
import { useRadioGroupState } from 'react-stately';
import type { TestProps } from 'utils/types';

import { RadioContext } from './RadioGroupContext';

export type Props = {
  /** The current selected value */
  value?: string;
  /** Callback that is called when the value changes. */
  onChange?: (value: string) => void;
  /** Whether the whole RadioGroup is disabled */
  isDisabled?: boolean;
  /** Styles that will apply on the RadioGroup container */
  sx?: CSSObject;
  children?: React.ReactNode;
} & TestProps;

const RadioGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { dataTestPrefixId, sx, children } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);

  return (
    <div
      aria-label="RadioGroup"
      ref={ref}
      {...radioGroupProps}
      css={sx}
      data-testid={`${dataTestPrefixId}_radio_group_container`}
    >
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
