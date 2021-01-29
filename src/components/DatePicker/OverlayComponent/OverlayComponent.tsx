/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import omit from 'lodash/omit';
import * as React from 'react';
import { DayPickerInputProps } from 'react-day-picker';
import useTheme from '../../../hooks/useTheme';
import Button from '../../Button';
import { ExtraOption } from '../DatePicker';
import { optionStyle } from '../DatePicker.style';
import Month from '../Month/Month';
import dayjs, { Dayjs } from 'dayjs';
import Icon from '../../Icon';

type Props = {
  selectedOption: string;
  setSelectedOption: (x: string) => void;
  isRangePicker: boolean;
  extraOptions: ExtraOption[];
  selectedDays: Dayjs[];
  onDaySelect: (date: Dayjs) => void;
};
const OverlayComponent: React.FC<Props & DayPickerInputProps> = ({
  classNames,
  selectedOption,
  setSelectedOption,
  isRangePicker,
  extraOptions = [],
  onDaySelect,
  selectedDays,
}) => {
  const theme = useTheme();
  const [date, setDate] = React.useState(dayjs());

  return (
    <div
      className={classNames?.overlayWrapper}
      css={{ marginTop: 3 }}
      // These were omitted due to type miss-match. Also these events on the overlayWrapper don't
      // do anything and with future keyboard support will still do nothing
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
            <div
              css={css`
                position: absolute;
                display: flex;
                right: 10px;
                top: 20px;
              `}
            >
              <div
                onClick={() => {
                  setDate(curDate => curDate.month(curDate.month() + 1));
                }}
                css={css`
                  cursor: pointer;
                  margin: 0 5px;
                `}
              >
                <Icon
                  name={'fatArrowLeft'}
                  color={theme.utils.getColor('lightGray', 700)}
                  size={25}
                />
              </div>
              <div
                onClick={() => {
                  setDate(curDate => curDate.month(curDate.month() - 1));
                }}
                css={css`
                  cursor: pointer;
                  margin: 0 5px;
                `}
              >
                <Icon
                  name={'fatArrowRight'}
                  color={theme.utils.getColor('lightGray', 700)}
                  size={25}
                />
              </div>
            </div>
            <div css={{ display: 'flex', flexDirection: 'row' }}>
              <div css={{ margin: 10, display: 'flex', flexDirection: 'column' }}>
                <div
                  css={css`
                    margin: 15px 0 20px;
                    align-content: center;
                    font-size: 18px;
                    font-weight: bold;
                  `}
                >
                  {date.format('MMMM')} {date.format('YYYY')}
                </div>
                <Month
                  year={date.year()}
                  month={date.month()}
                  onDaySelect={onDaySelect}
                  selectedDays={selectedDays}
                />
              </div>
              {isRangePicker && (
                <div css={{ margin: 10, display: 'flex', flexDirection: 'column' }}>
                  <div
                    css={css`
                      margin: 15px 0 20px;
                      align-content: center;
                      font-size: 18px;
                      font-weight: bold;
                    `}
                  >
                    {date.month(date.month() + 1).format('MMMM')}{' '}
                    {date.month(date.month() + 1).format('YYYY')}
                  </div>
                  <Month
                    year={Number(date.month(date.month() + 1).format('YYYY'))}
                    month={date.month() + 1}
                    onDaySelect={onDaySelect}
                    selectedDays={selectedDays}
                  />
                </div>
              )}
            </div>

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
              <Button filled={false} size={'sm'} onClick={() => {}} type={'branded1'}>
                Cancel
              </Button>
              <Button size={'sm'} onClick={() => {}} type={'branded1'}>
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
