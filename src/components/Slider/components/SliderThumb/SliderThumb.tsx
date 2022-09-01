import * as React from 'react';
import { FC, useMemo } from 'react';
import { IThumbProps } from 'react-range/lib/types';

import { TestProps } from '../../../../utils/types';
import { Thumb } from './SliderThumb.style';

interface ThumbProps {
  isDisabled: boolean;
  value: number;
  initialValue: number | undefined;
  restProps: IThumbProps;
}

const SliderThumb: FC<ThumbProps & TestProps> = ({
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
