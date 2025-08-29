import { waitFor } from '@testing-library/react';
import dayjs from 'dayjs';
import React from 'react';

import { fireEvent, render } from '../../test';
import DatePicker from './DatePicker';
import { currentDay, navigateOnElement } from './utils';

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
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
    const onChange = vi.fn();
    const { getByText, getByTestId } = render(
      <DatePicker
        dataTestId="input"
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
    const onChange = vi.fn();
    const { getByTestId, getAllByText } = render(
      <DatePicker
        dataTestId="input"
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

  it('should handle selecting a range in reverse order', () => {
    const onChange = vi.fn();
    const { getByTestId, getAllByText } = render(
      <DatePicker
        dataTestId="input"
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

    // Select later date first
    const laterDay = getAllByText(currentDay.add(5, 'day').format('D'))[0];
    const earlierDay = getAllByText(currentDay.add(3, 'day').format('D'))[0];
    const applyButton = getByTestId('button-apply');

    // select days in reverse order
    fireEvent.click(laterDay);
    fireEvent.click(earlierDay);
    // apply
    fireEvent.click(applyButton);

    // check if the selected days are correctly ordered in the onChange callback
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

  it('should change months when arrow buttons are clicked', () => {
    const { getByTestId } = render(
      <DatePicker
        dataTestId="input"
        isClearable
        value={{
          from: currentDay.toDate(),
          to: currentDay.add(1, 'day').toDate(),
        }}
      />
    );

    const calendarButton = getByTestId('calendar_button');
    fireEvent.click(calendarButton);

    const backButton = getByTestId('icon-button-month_back');
    const forwardButton = getByTestId('icon-button-month_forward');
    const monthButton = getByTestId('button-month');

    fireEvent.click(backButton);

    expect(monthButton).toContainHTML(currentDay.month(currentDay.month() - 1).format('MMMM YYYY'));

    fireEvent.click(forwardButton);

    expect(monthButton).toContainHTML(currentDay.format('MMMM YYYY'));
  });

  it('should render the calendars correctly when initial values are given', () => {
    const { getByTestId } = render(
      <DatePicker
        dataTestId="input"
        isClearable
        isRangePicker
        value={{
          from: currentDay.month(currentDay.month() - 1).toDate(),
          to: currentDay.add(1, 'day').toDate(),
        }}
      />
    );

    const calendarButton = getByTestId('calendar_button');
    fireEvent.click(calendarButton);

    const selectedFrom = getByTestId(
      currentDay.month(currentDay.month() - 1).format('D_M_YYYY') + '_selected'
    );
    const selectedTo = getByTestId(currentDay.add(1, 'day').format('D_M_YYYY') + '_selected');

    expect(selectedFrom).toBeInTheDocument();
    expect(selectedTo).toBeInTheDocument();
  });

  it('should handle escape', async () => {
    const onChange = vi.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <DatePicker
        dataTestId="input"
        isClearable
        value={{
          from: currentDay.toDate(),
          to: currentDay.add(1, 'day').toDate(),
        }}
        onChange={onChange}
      />
    );
    const calendarButton = getByTestId('calendar_button');
    const input = getByPlaceholderText('Select Date') as HTMLInputElement;
    // trigger overlay
    fireEvent.click(calendarButton);

    const applyButton = getByTestId('button-apply');
    expect(applyButton).toBeInTheDocument();

    fireEvent.keyDown(input, { key: 'Escape', keyCode: 27 });

    await waitFor(() => expect(applyButton).not.toBeInTheDocument());
  });

  it('should navigate through the month days when arrows are clicked', async () => {
    const { getByTestId, findByTestId } = render(
      <DatePicker
        value={{
          from: currentDay.toDate(),
          to: currentDay.toDate(),
        }}
      />
    );

    const calendarButton = getByTestId('calendar_button');
    fireEvent.click(calendarButton);

    const calendarTable = getByTestId('calendar_table');

    const selectedDay = getByTestId('3_11_2020_selected');
    expect(selectedDay).toHaveFocus();

    navigateOnElement(calendarTable, [
      'ArrowUp',
      'ArrowLeft',
      'ArrowLeft',
      'ArrowLeft',
      'ArrowLeft',
      'ArrowDown',
      'ArrowDown',
      'ArrowDown',
      'ArrowDown',
      'ArrowDown',
      'ArrowRight',
      'ArrowRight',
      'ArrowRight',
      'ArrowUp',
    ]);

    const selectedDayElements = calendarTable.querySelectorAll(`div[tabindex = "0"]`);
    /** Make sure that only one day is focused */
    expect(selectedDayElements.length).toBe(1);

    fireEvent.keyDown(selectedDayElements[0], { key: 'Enter', code: 'Enter', charCode: 13 });

    /** Clicked keys path should lead to the following day being selected*/
    const newSelectedDay = await findByTestId('23_11_2020_selected');
    expect(newSelectedDay).toBeInTheDocument();
  });

  it('should handle clearing the selected date', async () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <DatePicker
        dataTestId="input"
        isClearable
        value={{
          from: currentDay.toDate(),
          to: currentDay.add(1, 'day').toDate(),
        }}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('Select Date') as HTMLInputElement;
    fireEvent.keyDown(input, { key: 'Backspace', keyCode: 8 });

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith({
      from: undefined,
      to: undefined,
    });
  });

  it('should handle clearing the selected date in range pickger', async () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <DatePicker
        dataTestId="input"
        isClearable
        isRangePicker
        value={{
          from: currentDay.toDate(),
          to: currentDay.add(1, 'day').toDate(),
        }}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('Enter Date Range') as HTMLInputElement;
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
