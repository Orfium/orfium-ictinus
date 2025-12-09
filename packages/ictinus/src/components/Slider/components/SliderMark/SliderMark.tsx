import type { FCC } from 'react';
import { useMemo } from 'react';
import type { IMarkProps } from 'react-range/lib/types';
import type { TestProps } from 'utils/types';

import { vars } from '@orfium/tokens';
import { STEP_WITH_INCREMENTS } from '../../Slider';
import { Mark, MarkHoverCircle } from './SliderMark.style';

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
  const backgroundStyle = useMemo(() => {
    if (!isSelector) {
      return index * 20 < values[0] || index * 20 > values[1]
        ? vars.color.palette['primary-alt'].base
        : vars.color.palette.primary.base;
    }

    return index * 20 > values[0]
      ? vars.color.palette['primary-alt'].base
      : vars.color.palette.primary.base;
  }, [isSelector, index, values]);

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
