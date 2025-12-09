import type { FCC } from 'react';
import { useMemo } from 'react';
import { getTrackBackground } from 'react-range';
import type { ITrackProps } from 'react-range/lib/types';
import type { TestProps } from 'utils/types';

import { vars } from '@orfium/tokens';
import { MAX, MIN } from '../../Slider';
import { Track } from './SliderTrack.style';

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
  const backgroundStyle = useMemo(
    () =>
      getTrackBackground({
        values,
        colors: isSelector
          ? [vars.color.palette.primary.base, vars.color.palette['primary-alt'].base]
          : [
              vars.color.palette['primary-alt'].base,
              vars.color.palette.primary.base,
              vars.color.palette['primary-alt'].base,
            ],
        min: MIN,
        max: MAX,

        rtl: false,
      }),
    [isSelector, values]
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
