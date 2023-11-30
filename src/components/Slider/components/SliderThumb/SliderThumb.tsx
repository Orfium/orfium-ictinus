import type { FCC} from 'react';
import * as React from 'react';
import { useMemo } from 'react';
import type { IThumbProps } from 'react-range/lib/types';

import { Thumb } from './SliderThumb.style';
import type { TestProps } from '../../../../utils/types';

export interface SliderThumbProps {
  isDisabled: boolean;
  value: number;
  initialValue: number | undefined;
  restProps: IThumbProps;
}

const SliderThumb: FCC<SliderThumbProps & TestProps> = ({
  isDisabled,
  value,
  initialValue,
  dataTestId,
  restProps,
}) => {
  const isChanged = useMemo(() => initialValue !== value, [initialValue, value]);

  return (
    <Thumb
      data-testid={dataTestId}
      {...restProps}
      isChanged={isChanged}
      isDisabled={isDisabled}
      restStyleProps={restProps.style}
    />
  );
};

export default SliderThumb;
