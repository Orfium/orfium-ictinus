import DatePicker from './DatePicker';
import Stack from '../storyUtils/Stack';
import { currentDay } from './utils';
import { openDatePicker } from './play-utils';
import { options, CALENDAR_DEFAULT_OPTIONS } from './constants';
import { FIGMA_URL, Function } from '../../utils/common';
import { useState } from 'react';

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

  args: {
    filterType: 'preset',
    hintMessage: 'Hint Message',
    label: 'Custom Date',
    status: 'normal',
  },

  argTypes: {
    disableDates: { type: 'select', options: Object.keys(options), mapping: options },
    filterType: { type: 'select', options: ['preset', 'added'] },
    status: { type: 'select', options: ['normal', 'error', 'read-only'] },
    isDisabled: { type: 'boolean' },
  },
};

export const DatePickerStory = {
  render: (args) => {
    const { dateFormatOverride, disableDates } = args;
    return (
      <Stack height={600}>
        <Function>
          {() => {
            const [date, setDate] = useState({
              from: currentDay.toDate(),
              to: currentDay.toDate(),
            });
            return (
              <DatePicker
                value={date}
                onChange={setDate}
                isClearable={true}
                disableDates={disableDates}
                dateFormatOverride={dateFormatOverride}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },
  autoPlay: true,
  play: openDatePicker,
  name: 'Datepicker',

  parameters: {
    controls: { include: ['dateFormatOverride', 'disableDates'] },
  },
};

export const DateRangePicker = {
  render: (args) => {
    const { dateFormatOverride, disableDates } = args;
    return (
      <Stack height={600}>
        <Function>
          {() => {
            const [date, setDate] = useState({
              from: currentDay.toDate(),
              to: currentDay.toDate(),
            });
            return (
              <DatePicker
                isRangePicker
                value={date}
                onChange={setDate}
                isClearable={true}
                disableDates={disableDates}
                dateFormatOverride={dateFormatOverride}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },
  parameters: {
    controls: { include: ['dateFormatOverride', 'disableDates'] },
  },
  autoPlay: true,
  play: openDatePicker,
  name: 'DateRangePicker',
};

export const DateRangePickerWithPresetOptions = {
  render: (args) => {
    const { disableDates, dateFormatOverride } = args;
    return (
      <Stack height={600}>
        <Function>
          {() => {
            const [date, setDate] = useState({
              from: currentDay.toDate(),
              to: currentDay.toDate(),
            });
            return (
              <DatePicker
                isRangePicker
                value={date}
                onChange={setDate}
                options={CALENDAR_DEFAULT_OPTIONS}
                isClearable={true}
                disableDates={disableDates}
                dateFormatOverride={dateFormatOverride}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },
  parameters: {
    controls: { include: ['dateFormatOverride', 'disableDates'] },
  },
  name: 'DateRangePicker with preset options',
};

export const DatePickerWithFilter = {
  render: () => {
    return (
      <Stack height={600}>
        <Function>
          {() => {
            const [date, setDate] = useState({ from: currentDay.toDate(), to: undefined });
            return (
              <DatePicker
                filterConfig={{
                  filterType: 'preset',
                }}
                value={date}
                onChange={setDate}
              />
            );
          }}
        </Function>
        <Function>
          {() => {
            const [date, setDate] = useState({
              from: currentDay.toDate(),
              to: currentDay.toDate(),
            });
            return (
              <DatePicker
                value={date}
                onChange={setDate}
                isRangePicker
                filterConfig={{
                  filterType: 'preset',
                }}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },
  parameters: {
    controls: { disable: true },
  },
  name: 'DatePicker with Filter',
};

export const DatePickerWithDisabledDates = {
  render: (args) => {
    const { disableDates } = args;
    return (
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
    );
  },
  name: 'DatePicker with disabled dates',
  parameters: {
    controls: { include: ['disableDates'] },
  },
};

export const DatePickerAndDateRangePickerStatuses = {
  render: (args) => {
    const { isRangePicker, disableDates, dateFormatOverride, hintMessage } = args;
    return (
      <Stack height={600}>
        <Function>
          {() => {
            const [date, setDate] = useState({
              from: currentDay.toDate(),
              to: currentDay.toDate(),
            });
            return (
              <DatePicker
                value={date}
                isRangePicker={isRangePicker}
                onChange={setDate}
                isClearable={true}
                disableDates={disableDates}
                dateFormatOverride={dateFormatOverride}
                inputProps={{
                  label: 'Normal',
                  status: {
                    type: 'normal',
                    hintMessage,
                  },
                }}
              />
            );
          }}
        </Function>
        <Function>
          {() => {
            const [date, setDate] = useState({
              from: currentDay.toDate(),
              to: currentDay.toDate(),
            });
            return (
              <DatePicker
                value={date}
                isRangePicker={isRangePicker}
                onChange={setDate}
                isClearable={true}
                disableDates={disableDates}
                dateFormatOverride={dateFormatOverride}
                inputProps={{
                  label: 'Error',
                  status: {
                    type: 'error',
                    hintMessage,
                  },
                }}
              />
            );
          }}
        </Function>
        <Function>
          {() => {
            const [date, setDate] = useState({
              from: currentDay.toDate(),
              to: currentDay.toDate(),
            });
            return (
              <DatePicker
                value={date}
                isRangePicker={isRangePicker}
                onChange={setDate}
                isClearable={true}
                disableDates={disableDates}
                dateFormatOverride={dateFormatOverride}
                inputProps={{
                  label: 'Read-only',
                  status: {
                    type: 'read-only',
                    hintMessage,
                  },
                }}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },
  parameters: {
    controls: { include: ['dateFormatOverride', 'disableDates', 'isRangePicker', 'hintMessage'] },
  },
  name: 'DatePicker and DateRangePicker statuses',
};

export const DisabledDatePickerDateRangePicker = {
  render: (args) => {
    const { isRangePicker } = args;
    return (
      <Stack>
        <Function>
          {() => {
            const [date, setDate] = useState({
              from: currentDay.toDate(),
              to: currentDay.toDate(),
            });
            return (
              <DatePicker
                value={date}
                isRangePicker={isRangePicker}
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
    );
  },
  parameters: {
    controls: { include: ['isRangePicker'] },
  },
  name: 'Disabled DatePicker & DateRangePicker',
};

export const Playground = {
  render: (args) => {
    const { disableDates, label, hintMessage, isRangePicker, status, isDisabled } = args;
    return (
      <Function>
        {() => {
          const [date, setDate] = useState({
            from: currentDay.toDate(),
            to: currentDay.toDate(),
          });
          return (
            <DatePicker
              disableDates={disableDates}
              inputProps={{
                label,
                status: {
                  type: status,
                  hintMessage,
                },
                isDisabled,
              }}
              isRangePicker={isRangePicker}
              value={date}
              onChange={setDate}
            />
          );
        }}
      </Function>
    );
  },
  parameters: {
    controls: {
      include: [
        'dateFormatOverride',
        'disableDates',
        'isRangePicker',
        'hintMessage',
        'label',
        'status',
        'isDisabled',
      ],
    },
  },
  name: 'Playground',
};
