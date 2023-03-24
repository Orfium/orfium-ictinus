import * as React from 'react';
import { FC, useMemo } from 'react';
import { IThumbProps } from 'react-range/lib/types';

import { Thumb } from './SliderThumb.style';
import { TestProps } from '../../../../utils/types';

export interface SliderThumbProps {
  isDisabled: boolean;
  value: number;
  initialValue: number | undefined;
  restProps: IThumbProps;
}

const SliderThumb: FC<SliderThumbProps & TestProps> = ({
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
