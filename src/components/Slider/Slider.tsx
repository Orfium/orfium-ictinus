import React, { useEffect } from 'react';
import { Range } from 'react-range';

import useTheme from '../../hooks/useTheme';
import { TestProps } from '../../utils/types';
import TextField from '../TextField';
import SliderMark from './components/SliderMark';
import SliderThumb from './components/SliderThumb';
import SliderTrack from './components/SliderTrack';
import { Container, InputContainer, InputsContainer } from './Slider.style';

interface Props {
  /** Determines the position of the rendered thumbs. Defaults to [0, 100] */
  values: number[];
  /** Determines if the Slider is disabled or not */
  disabled?: boolean;
  /** Determines whether the Slider is a Range or a Selector */
  isSelector?: boolean;
  /** Determines if the Slider will show increments along its track */
  hasIncrements?: boolean;

  /** Called when a thumb is moved, provides new values */
  onChange: (values: number[]) => void;
  /** Called when a change is finished (mouse/touch up, or keyup), provides current values.
   * Use this event when you have to make for example ajax request with new values. */
  onFinalChange?: (values: number[]) => void;
}

const STEP = 1;
export const STEP_WITH_INCREMENTS = 20;
export const MIN = 0;
export const MAX = 100;

const Slider: React.FC<Props & TestProps> = ({
  values,
  onChange,
  onFinalChange,
  isSelector = false,
  hasIncrements = false,
  disabled = false,
  dataTestPrefixId,
}) => {
  const theme = useTheme();

  useEffect(() => {
    if (isSelector && values.length > 1) {
      throw new Error(
        'The Selector type Slider can only accept one initial value in the array, since it only has one thumb. Try changing the `initialValues` prop.'
      );
    }
  }, [values, isSelector]);

  const sanitizeValues = (value: number) => {
    if (value < 0) {
      return 0;
    }

    if (value > 100) {
      return 100;
    }

    return value;
  };

  return (
    <Container data-testid={`${dataTestPrefixId ?? ''}slider_component`}>
      <Range
        step={hasIncrements ? STEP_WITH_INCREMENTS : STEP}
        min={MIN}
        max={MAX}
        disabled={disabled}
        values={values}
        onChange={onChange}
        onFinalChange={onFinalChange}
        renderMark={({ props, index }) =>
          hasIncrements &&
          (isSelector ? index > MIN : index > MIN && index < MAX / STEP_WITH_INCREMENTS) && (
            <SliderMark
              key={`mark_${index}`}
              dataTestPrefixId={dataTestPrefixId}
              restProps={props}
              values={values}
              index={index}
              isSelector={isSelector}
              disabled={disabled}
            />
          )
        }
        renderTrack={({ props, children }) => (
          <SliderTrack
            dataTestPrefixId={dataTestPrefixId}
            isSelector={isSelector}
            restProps={props}
            values={values}
            disabled={disabled}
          >
            {children}
          </SliderTrack>
        )}
        renderThumb={({ props, value, index }) => (
          <SliderThumb
            key={`thumb_${index}`}
            dataTestId={`${dataTestPrefixId ?? ''}thumb_${index}`}
            restProps={props}
            disabled={disabled}
            value={value}
            values={values}
          />
        )}
      />
      {!isSelector && !hasIncrements && (
        <InputsContainer>
          <InputContainer>
            <TextField
              hasMinWidthCompat={false}
              size={'sm'}
              value={values[0]}
              onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const sanitizedValue = sanitizeValues(parseInt(e?.target.value || '0'));
                onChange([sanitizedValue, values[1]]);
              }}
              rightIcon={<>%</>}
              sx={{
                textField: {
                  color: theme.utils.getColor('lightGrey', 650),
                },
              }}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              hasMinWidthCompat={false}
              size={'sm'}
              value={values[1]}
              onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const sanitizedValue = sanitizeValues(parseInt(e?.target.value || '100'));
                onChange([values[0], sanitizedValue]);
              }}
              rightIcon={<>%</>}
              sx={{
                textField: {
                  color: theme.utils.getColor('lightGrey', 650),
                },
              }}
            />
          </InputContainer>
        </InputsContainer>
      )}
    </Container>
  );
};

Slider.displayName = 'Slider';

export default Slider;
