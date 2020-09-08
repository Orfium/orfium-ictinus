/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../hooks/useTheme';
import { optionStyle } from '../DatePicker.style';
import { ExtraOption } from '../DatePicker';
import { DayPickerInputProps } from 'react-day-picker';
import Button from 'components/Button';
import omit from 'lodash/omit';

type Props = {
  selectedOption: string;
  setSelectedOption: Function;
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
                  css={optionStyle({ selected: selectedOption === option.value })(theme)}
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
