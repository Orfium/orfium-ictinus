import * as React from 'react';
import { FC, useMemo } from 'react';
import { IMarkProps } from 'react-range/lib/types';

import useTheme from '../../../../hooks/useTheme';
import { TestProps } from '../../../../utils/types';
import { STEP_WITH_INCREMENTS } from '../../Slider';
import { Mark, MarkHoverCircle } from './SliderMark.style';

type Props = {
  values: number[];
  disabled: boolean;
  index: number;
  isSelector: boolean;
  restProps: IMarkProps;
};

const SliderMark: FC<Props & TestProps> = ({
  values,
  index,
  disabled,
  isSelector,
  dataTestPrefixId = '',
  restProps,
}) => {
  const theme = useTheme();

  const backgroundStyle = useMemo(() => {
    if (!isSelector) {
      return index * 20 < values[0] || index * 20 > values[1]
        ? theme.utils.getColor('blue', disabled ? 250 : 150)
        : theme.utils.getColor('blue', disabled ? 250 : 500);
    }

    return index * 20 > values[0]
      ? theme.utils.getColor('blue', disabled ? 250 : 150)
      : theme.utils.getColor('blue', disabled ? 250 : 500);
  }, [disabled, index, isSelector, theme.utils, values]);

  const labelValue = useMemo(() => (STEP_WITH_INCREMENTS * index).toString(), [index]);

  return (
    <Mark
      data-testid={`${dataTestPrefixId}mark_${index}`}
      {...restProps}
      disabled={disabled}
      labelValue={labelValue ? `${labelValue}%` : ' '}
      restStyleProps={restProps.style}
      background={backgroundStyle}
    >
      <MarkHoverCircle disabled={disabled} />
    </Mark>
  );
};

export default SliderMark;
