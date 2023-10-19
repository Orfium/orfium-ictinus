import * as React from 'react';
import { FCC, useMemo } from 'react';
import { IMarkProps } from 'react-range/lib/types';

import { Mark, MarkHoverCircle } from './SliderMark.style';
import useTheme from '../../../../hooks/useTheme';
import { TestProps } from '../../../../utils/types';
import { STEP_WITH_INCREMENTS } from '../../Slider';

export type SliderMarkProps = {
  values: number[];
  isDisabled: boolean;
  index: number;
  isSelector: boolean;
  restProps: IMarkProps;
};

const SliderMark: FCC<SliderMarkProps & TestProps> = ({
  values,
  index,
  isDisabled,
  isSelector,
  dataTestPrefixId = '',
  restProps,
}) => {
  const theme = useTheme();

  const backgroundStyle = useMemo(() => {
    if (!isSelector) {
      return index * 20 < values[0] || index * 20 > values[1]
        ? theme.utils.getColor('blue', isDisabled ? 250 : 150)
        : theme.utils.getColor('blue', isDisabled ? 250 : 500);
    }

    return index * 20 > values[0]
      ? theme.utils.getColor('blue', isDisabled ? 250 : 150)
      : theme.utils.getColor('blue', isDisabled ? 250 : 500);
  }, [isDisabled, index, isSelector, theme.utils, values]);

  const labelValue = useMemo(() => (STEP_WITH_INCREMENTS * index).toString(), [index]);

  return (
    <Mark
      data-testid={`${dataTestPrefixId}mark_${index}`}
      {...restProps}
      isDisabled={isDisabled}
      labelValue={labelValue ? `${labelValue}%` : ' '}
      restStyleProps={restProps.style}
      background={backgroundStyle}
    >
      <MarkHoverCircle isDisabled={isDisabled} />
    </Mark>
  );
};

export default SliderMark;
