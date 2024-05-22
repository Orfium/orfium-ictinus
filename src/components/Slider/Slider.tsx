import React, { useRef } from 'react';
import { Range } from 'react-range';
import type { IMarkProps, IThumbProps, ITrackProps } from 'react-range/lib/types';
import type { TestProps } from 'utils/types';

import SliderMark from './components/SliderMark';
import SliderThumb from './components/SliderThumb';
import SliderTrack from './components/SliderTrack';
import { Container, InputContainer, InputsContainer } from './Slider.style';
import useTheme from '../../hooks/useTheme';
import TextField from '../TextField';

export type SliderProps = {
  /** Determines if the Slider is disabled or not */
  isDisabled?: boolean;
  /** Determines if the Slider will show increments along its track */
  hasIncrements?: boolean;
  /** Called when a thumb is moved, provides new values */
  onChange: (values: number[]) => void;
  /** Called when a change is finished (mouse/touch up, or keyup), provides current values.
   * Use this event when you have to make for example ajax request with new values. */
  onBlur?: (values: number[]) => void;
  /** Determines the position of the rendered thumbs and the type of the Slider. 1 value means it's a Selector,
   * while 2 values mean it's a Range. Defaults to [0, 100] */
  values: [number] | [number, number];
};

const STEP = 1;
export const STEP_WITH_INCREMENTS = 20;
export const MIN = 0;
export const MAX = 100;

const Slider: React.FC<SliderProps & TestProps> = ({
  values,
  onChange,
  onBlur,
  hasIncrements = false,
  isDisabled = false,
  dataTestPrefixId,
}) => {
  const theme = useTheme();

  const initialValueRef = useRef<[number] | [number, number]>(values);

  const isSelector = initialValueRef.current.length === 1;

  if (isSelector && values.length !== 1) {
    throw new Error(
      'The Selector type Slider can only accept one initial value in the array, since it only has one thumb. Try changing the `values` prop.'
    );
  }

  if (!isSelector && values.length !== 2) {
    throw new Error(
      'The Range type Slider only accepts two initial values in the array, since it has two thumbs. Try changing the `values` prop.'
    );
  }

  const sanitizeValues = (value: number) => {
    if (value < MIN) {
      return 0;
    }

    if (value > MAX) {
      return 100;
    }

    return value;
  };

  const handleRenderMark = ({ props, index }: { props: IMarkProps; index: number }) => {
    /** We don't show marks for the first and last increments of the Slider (0%, 100%) */
    const isNotFirstOrLastMark = isSelector
      ? index > MIN
      : index > MIN && index < MAX / STEP_WITH_INCREMENTS;

    return (
      hasIncrements &&
      isNotFirstOrLastMark && (
        <SliderMark
          key={`mark_${index}`}
          dataTestPrefixId={dataTestPrefixId}
          restProps={props}
          values={values}
          index={index}
          isSelector={isSelector}
          isDisabled={isDisabled}
        />
      )
    );
  };

  const handleRenderTrack = ({
    props,
    children,
  }: {
    props: ITrackProps;
    children: React.ReactNode;
  }) => {
    return (
      <SliderTrack
        dataTestPrefixId={dataTestPrefixId}
        isSelector={isSelector}
        restProps={props}
        values={values}
        isDisabled={isDisabled}
      >
        {children}
      </SliderTrack>
    );
  };

  const handleRenderThumb = ({
    props,
    value,
    index,
  }: {
    props: IThumbProps;
    value: number;
    index: number;
  }) => {
    return (
      <SliderThumb
        key={`thumb_${index}`}
        dataTestId={`${dataTestPrefixId ?? ''}thumb_${index}`}
        restProps={props}
        isDisabled={isDisabled}
        value={value}
        initialValue={initialValueRef.current?.[index]}
      />
    );
  };

  return (
    <Container data-testid={`${dataTestPrefixId ?? ''}slider_component`}>
      <div css={{ opacity: isDisabled ? theme.tokens.disabledState.get('default') : 'inherit' }}>
        <Range
          step={hasIncrements ? STEP_WITH_INCREMENTS : STEP}
          min={MIN}
          max={MAX}
          disabled={isDisabled}
          values={values}
          onChange={onChange}
          onFinalChange={onBlur}
          renderMark={handleRenderMark}
          renderTrack={handleRenderTrack}
          renderThumb={handleRenderThumb}
        />
      </div>
      {!isSelector && !hasIncrements && values.length === 2 && (
        <InputsContainer>
          <InputContainer>
            <TextField
              label="Start"
              size="compact"
              isDisabled={isDisabled}
              value={values[0]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const sanitizedValue = sanitizeValues(parseInt(e?.target.value || '0'));
                onChange([sanitizedValue, values[1]]);
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                if (onBlur) {
                  const sanitizedValue = sanitizeValues(parseInt(e?.target.value || '0'));
                  onBlur([sanitizedValue, values[1]]);
                }
              }}
              suffix={<>%</>}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              label="End"
              size="compact"
              isDisabled={isDisabled}
              value={values[1]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const sanitizedValue = sanitizeValues(parseInt(e?.target.value || '100'));
                onChange([values[0], sanitizedValue]);
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                if (onBlur) {
                  const sanitizedValue = sanitizeValues(parseInt(e?.target.value || '100'));
                  onBlur([values[0], sanitizedValue]);
                }
              }}
              suffix={<>%</>}
            />
          </InputContainer>
        </InputsContainer>
      )}
    </Container>
  );
};

Slider.displayName = 'Slider';

export default Slider;
