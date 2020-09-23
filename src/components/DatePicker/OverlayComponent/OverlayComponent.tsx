/** @jsx jsx */
import { jsx } from '@emotion/core';
import omit from 'lodash/omit';
import * as React from 'react';
import { DayPickerInputProps } from 'react-day-picker';
import useTheme from '../../../hooks/useTheme';
import Button from '../../Button';
import { ExtraOption } from '../DatePicker';
import { optionStyle } from '../DatePicker.style';

type Props = {
  selectedOption: string;
  setSelectedOption: (x: string) => void;
  isRangePicker: boolean;
  extraOptions: ExtraOption[];
  hideDatePicker: (() => void) | undefined;
};
const OverlayComponent: React.FC<Props & DayPickerInputProps> = ({
  classNames,
  selectedOption,
  setSelectedOption,
  isRangePicker,
  extraOptions = [],
  children,
  hideDatePicker = () => {},
  ...props
}) => {
  const theme = useTheme();

  return (
    <div
      className={classNames?.overlayWrapper}
      css={{ marginTop: 3 }}
      // These were omitted due to type miss-match. Also these events on the overlayWrapper don't
      // do anything and with future keyboard support will still do nothing
      {...omit(props, ['onKeyUp', 'onClick'])}
    >
      <div className={classNames?.overlay}>
        <div css={{ display: 'flex' }}>
          {isRangePicker && (
            <div css={{ borderRight: '1px solid #dfdfdf' }}>
              {extraOptions.map(option => (
                <div
                  key={option.value}
                  css={optionStyle({ selected: selectedOption === option.value })}
                  onClick={() => setSelectedOption(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            {children}
            <div
              css={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: theme.spacing.md,
                marginRight: theme.spacing.lg,
                alignItems: 'space-between',
                '> button': {
                  margin: theme.spacing.sm,
                },
              }}
            >
              <Button filled={false} size={'sm'} onClick={hideDatePicker}>
                Cancel
              </Button>
              <Button size={'sm'} onClick={hideDatePicker}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayComponent;
