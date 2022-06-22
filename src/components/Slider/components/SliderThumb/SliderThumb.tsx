import * as React from 'react';
import { FC, useMemo } from 'react';
import { IThumbProps } from 'react-range/lib/types';

import { TestProps } from '../../../../utils/types';
import { Thumb } from './SliderThumb.style';

interface ThumbProps {
  disabled: boolean;
  value: number;
  initialValues: number[];
  restProps: IThumbProps;
}

const SliderThumb: FC<ThumbProps & TestProps> = ({
  disabled,
  value,
  initialValues,
  dataTestId,
  restProps,
}) => {
  const isChanged = useMemo(() => !initialValues.includes(value), [initialValues, value]);

  return (
    <Thumb
      data-testid={dataTestId}
      {...restProps}
      isChanged={isChanged}
      disabled={disabled}
      restStyleProps={restProps.style}
    />
  );
};

export default SliderThumb;
