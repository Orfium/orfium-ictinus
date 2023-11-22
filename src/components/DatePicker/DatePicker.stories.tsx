import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import DatePicker from './DatePicker';
import Stack from '../storyUtils/Stack';
import { CALENDAR_DEFAULT_OPTIONS } from './constants';
import { currentDay, openDatePicker } from './utils';
import {
  rangePickerOptions,
  filterTypeOptions,
  disableDates,
  options,
  dateFormatOptions,
} from './constants';
import { FIGMA_URL, Function } from '../../utils/common';
import { useState } from 'react';
import { hoverOnTooltips } from '../Tooltip/utils';

export default {
  title: 'Updated Components/Fields/DatePicker',
  component: DatePicker,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Dates',
        url: `${FIGMA_URL}?node-id=1637%3A37861`,
      },
      {
        type: 'figma',
        name: 'DatePicker',
        url: `${FIGMA_URL}?node-id=10283%3A104356`,
      },
    ],
  },
};

export const DatePickerStory = {
  render: () => (
    <Stack isVertical height={600}>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: currentDay.toDate(), to: currentDay.toDate() });
          return (
            <DatePicker
              value={date}
              onChange={setDate}
              isClearable={true}
              disableDates={select('disableDates', options, options[0])}
              dateFormatOverride={select('dateFormat', dateFormatOptions, dateFormatOptions[1])}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
    docs: {
      story: { autoplay: true, play: openDatePicker },
    },
  },
  name: 'Datepicker',
};

export const DateRangePicker = {
  render: () => (
    <Stack isVertical height={600}>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: currentDay.toDate(), to: currentDay.toDate() });
          return (
            <DatePicker
              isRangePicker
              value={date}
              onChange={setDate}
              isClearable={true}
              disableDates={select('disableDates', options, options[0])}
              dateFormatOverride={select('dateFormat', dateFormatOptions, dateFormatOptions[1])}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
    docs: {
      story: { autoplay: true, play: openDatePicker },
    },
  },
  name: 'DateRangePicker',
};

export const DateRangePickerWithPresetOptions = {
  render: () => (
    <Stack isVertical height={600}>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: currentDay.toDate(), to: currentDay.toDate() });
          return (
            <DatePicker
              isRangePicker
              value={date}
              onChange={setDate}
              options={CALENDAR_DEFAULT_OPTIONS}
              isClearable={true}
              disableDates={select('disableDates', options, options[0])}
              dateFormatOverride={select('dateFormat', dateFormatOptions, dateFormatOptions[1])}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'DateRangePicker with preset options',
};

export const DatePickerWithFilter = {
  render: () => (
    <Stack isVertical height={600}>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: undefined, to: undefined });
          return (
            <DatePicker
              isRangePicker={select('isRangePicker', rangePickerOptions, rangePickerOptions[0])}
              filterConfig={{
                filterType: select('filterType', filterTypeOptions, filterTypeOptions[0]),
              }}
              value={date}
              onChange={setDate}
            />
          );
        }}
      </Function>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: currentDay.toDate(), to: currentDay.toDate() });
          return (
            <DatePicker
              value={date}
              onChange={setDate}
              isRangePicker={select('isRangePicker', rangePickerOptions, rangePickerOptions[0])}
              filterConfig={{
                filterType: select('filterType', filterTypeOptions, filterTypeOptions[0]),
              }}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'DatePicker with Filter',
};

export const DatePickerWithDisabledDates = {
  render: () => (
    <Stack height={600}>
      <Function>
        {() => {
          const [date, setDate] = useState({
            from: currentDay.toDate(),
            to: currentDay.toDate(),
          });
          return <DatePicker disableDates={disableDates} value={date} onChange={setDate} />;
        }}
      </Function>
    </Stack>
  ),
  name: 'DatePicker with disabled dates',
};

export const DatePickerAndDateRangePickerStatuses = {
  render: () => (
    <Stack isVertical height={600}>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: currentDay.toDate(), to: currentDay.toDate() });
          return (
            <DatePicker
              value={date}
              isRangePicker={boolean('isRangePicker', false)}
              onChange={setDate}
              isClearable={true}
              disableDates={select('disableDates', options, options[0])}
              dateFormatOverride={select('dateFormat', dateFormatOptions, dateFormatOptions[1])}
              inputProps={{
                label: 'Normal',
                status: {
                  type: 'normal',
                  hintMessage: text('Custom Hint Message', 'Hint Message'),
                },
              }}
            />
          );
        }}
      </Function>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: currentDay.toDate(), to: currentDay.toDate() });
          return (
            <DatePicker
              value={date}
              isRangePicker={boolean('isRangePicker', false)}
              onChange={setDate}
              isClearable={true}
              disableDates={select('disableDates', options, options[0])}
              dateFormatOverride={select('dateFormat', dateFormatOptions, dateFormatOptions[1])}
              inputProps={{
                label: 'Error',
                status: {
                  type: 'error',
                  hintMessage: text('Custom Error Message', 'Error Message'),
                },
              }}
            />
          );
        }}
      </Function>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: currentDay.toDate(), to: currentDay.toDate() });
          return (
            <DatePicker
              value={date}
              isRangePicker={boolean('isRangePicker', false)}
              onChange={setDate}
              isClearable={true}
              disableDates={select('disableDates', options, options[0])}
              dateFormatOverride={select('dateFormat', dateFormatOptions, dateFormatOptions[1])}
              inputProps={{
                label: 'Read-only',
                status: {
                  type: 'read-only',
                  hintMessage: text('Custom Hint Message', 'Hint Message'),
                },
              }}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'DatePicker and DateRangePicker statuses',
};

export const DisabledDatePickerDateRangePicker = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          const [date, setDate] = useState({ from: currentDay.toDate(), to: currentDay.toDate() });
          return (
            <DatePicker
              value={date}
              isRangePicker={boolean('isRangePicker', false)}
              onChange={setDate}
              isClearable={true}
              inputProps={{
                label: 'Normal',
                status: {
                  type: 'normal',
                  hintMessage: 'This field is disabled',
                },
                isDisabled: true,
              }}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  name: 'Disabled DatePicker & DateRangePicker',
};

export const Playground = {
  render: () => (
    <Function>
      {() => {
        const [date, setDate] = useState({
          from: currentDay.toDate(),
          to: currentDay.toDate(),
        });
        return (
          <DatePicker
            disableDates={select('disableDates', options, options[0])}
            inputProps={{
              label: text('label', 'Custom Date'),
              status: {
                type: select('status', ['normal', 'error', 'read-only'], 'normal'),
                hintMessage: text('hintMessage', ''),
              },
            }}
            isRangePicker={boolean('isRangePicker', false)}
            value={date}
            onChange={setDate}
          />
        );
      }}
    </Function>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'Playground',
};
