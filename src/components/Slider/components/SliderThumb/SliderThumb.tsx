import isUndefined from 'lodash/isUndefined';
import * as React from 'react';
import { FC, useMemo } from 'react';
import { IThumbProps } from 'react-range/lib/types';

import { TestProps } from '../../../../utils/types';
import { Thumb } from './SliderThumb.style';

interface ThumbProps {
  disabled: boolean;
  value: number;
  values: number[];
  restProps: IThumbProps;
}

const SliderThumb: FC<ThumbProps & TestProps> = ({
  disabled,
  value,
  values,
  dataTestId,
  restProps,
}) => {
  const isChanged = useMemo(
    () => isUndefined(values.find(initialValue => initialValue === value)),
    [values, value]
  );

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
