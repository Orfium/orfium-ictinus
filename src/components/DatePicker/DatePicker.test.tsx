import { waitFor } from '@testing-library/react';
import dayjs from 'dayjs';
import React from 'react';

import { fireEvent, render } from '../../test';
import DatePicker from './DatePicker';
import { currentDay } from './utils';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const format = 'YYYY-MM-DD';

describe('DatePicker', () => {
  it('should render without errors', () => {
    render(
      <DatePicker
        value={{
          from: currentDay.toDate(),
          to: currentDay.toDate(),
        }}
      />
    );
    // Add assertions here to check if the component rendered correctly
  });

  it('should handle selecting a day in day picker mode', () => {
    const onChange = jest.fn();
    const { getByText, getByTestId } = render(
      <DatePicker
        dataTestId={'input'}
        value={{
          from: currentDay.toDate(),
          to: currentDay.toDate(),
        }}
        onChange={onChange}
      />
    );
    const calendarButton = getByTestId('calendar_button');
    // trigger overlay
    fireEvent.click(calendarButton);
    const dayButton = getByText(currentDay.add(5, 'day').format('D'));
    const applyButton = getByTestId('button-apply');
    // select day
    fireEvent.click(dayButton);
    // apply
    fireEvent.click(applyButton);

    // check if the selected day is passed to the onChange callback
    expect(onChange).toBeCalledTimes(1);
    const onChangeResult: { from: Date; to: Date } = onChange.mock.calls[0][0];
    expect({
      from: dayjs(onChangeResult.from).format(format),
      to: dayjs(onChangeResult.to).format(format),
    }).toEqual({
      from: currentDay.add(5, 'day').format(format),
      to: currentDay.add(5, 'day').format(format),
    });
  });

  it('should handle selecting a range in range picker mode', () => {
    const onChange = jest.fn();
    const { getByTestId, getAllByText } = render(
      <DatePicker
        dataTestId={'input'}
        isRangePicker
        value={{
          from: currentDay.toDate(),
          to: currentDay.add(1).toDate(),
        }}
        onChange={onChange}
      />
    );
    const calendarButton = getByTestId('calendar_button');
    // trigger overlay
    fireEvent.click(calendarButton);
    const day1Button = getAllByText(currentDay.add(3, 'day').format('D'))[0];
    const day2Button = getAllByText(currentDay.add(5, 'day').format('D'))[0];
    const applyButton = getByTestId('button-apply');
    // select days
    fireEvent.click(day1Button);
    fireEvent.click(day2Button);
    // apply
    fireEvent.click(applyButton);

    // check if the selected day is passed to the onChange callback
    expect(onChange).toBeCalledTimes(1);
    const onChangeResult: { from: Date; to: Date } = onChange.mock.calls[0][0];

    expect({
      from: dayjs(onChangeResult.from).format(format),
      to: dayjs(onChangeResult.to).format(format),
    }).toEqual({
      from: currentDay.add(3, 'day').format(format),
      to: currentDay.add(5, 'day').format(format),
    });
  });

  it('should handle escape', async () => {
    const onChange = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <DatePicker
        dataTestId={'input'}
        isClearable
        value={{
          from: currentDay.toDate(),
          to: currentDay.add(1, 'day').toDate(),
        }}
        onChange={onChange}
      />
    );
    const calendarButton = getByTestId('calendar_button');
    const input = getByPlaceholderText('Select date') as HTMLInputElement;
    // trigger overlay
    fireEvent.click(calendarButton);

    const applyButton = getByTestId('button-apply');
    expect(applyButton).toBeInTheDocument();

    fireEvent.keyDown(input, { key: 'Escape', keyCode: 27 });

    await waitFor(() => expect(applyButton).not.toBeInTheDocument());
  });

  /** @TODO modify or remove this test if not needed */
  it.skip('should handle clearing the selected date', async () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <DatePicker
        dataTestId={'input'}
        isClearable
        value={{
          from: currentDay.toDate(),
          to: currentDay.add(1, 'day').toDate(),
        }}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('Select date') as HTMLInputElement;
    fireEvent.keyDown(input, { key: 'Backspace', keyCode: 8 });

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith({
      from: undefined,
      to: undefined,
    });
  });

  /** @TODO modify or remove this test if not needed */
  it.skip('should handle clearing the selected date in range pickger', async () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <DatePicker
        dataTestId={'input'}
        isClearable
        isRangePicker
        value={{
          from: currentDay.toDate(),
          to: currentDay.add(1, 'day').toDate(),
        }}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('Date (start) - Date (end)') as HTMLInputElement;
    fireEvent.keyDown(input, { key: 'Backspace', keyCode: 8 });

    expect(onChange).toBeCalledTimes(1);
    const onChangeResult: { from: Date; to: Date } = onChange.mock.calls[0][0];

    expect({
      from: dayjs(onChangeResult.from).format(format),
      to: onChangeResult.to,
    }).toEqual({
      from: currentDay.format(format),
      to: undefined,
    });
  });
});
