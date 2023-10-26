import * as React from 'react';
import { FCC, useMemo } from 'react';
import { getTrackBackground } from 'react-range';
import { ITrackProps } from 'react-range/lib/types';

import { Track } from './SliderTrack.style';
import useTheme from '../../../../hooks/useTheme';
import { TestProps } from '../../../../utils/types';
import { MAX, MIN } from '../../Slider';

export type SliderTrackProps = {
  values: number[];
  isDisabled: boolean;
  isSelector: boolean;
  restProps: ITrackProps;
};

const SliderTrack: FCC<SliderTrackProps & TestProps> = ({
  values,
  isDisabled,
  isSelector,
  dataTestPrefixId = '',
  restProps,
  children,
}) => {
  const theme = useTheme();

  const backgroundStyle = useMemo(
    () =>
      getTrackBackground({
        values,
        colors: isSelector
          ? [
              theme.utils.getColor('blue', isDisabled ? 250 : 500),
              theme.utils.getColor('blue', isDisabled ? 250 : 150),
            ]
          : [
              theme.utils.getColor('blue', isDisabled ? 250 : 150),
              theme.utils.getColor('blue', isDisabled ? 250 : 500),
              theme.utils.getColor('blue', isDisabled ? 250 : 150),
            ],
        min: MIN,
        max: MAX,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        rtl: false,
      }),
    [isDisabled, isSelector, theme.utils, values]
  );

  return (
    <Track
      data-testid={`${dataTestPrefixId}track_component`}
      {...restProps}
      isDisabled={isDisabled}
      restStyleProps={restProps.style}
      background={backgroundStyle}
    >
      {children}
    </Track>
  );
};

export default SliderTrack;
