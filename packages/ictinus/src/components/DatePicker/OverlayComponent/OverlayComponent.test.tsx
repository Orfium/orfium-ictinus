import React from 'react';
import { fireEvent, render } from 'test';

import { currentDay } from '../utils';
import OverlayComponent from './OverlayComponent';
import { APPLY, CALENDAR_DEFAULT_OPTIONS } from '../constants';

describe('OverlayComponent', () => {
  const mockDate = currentDay;

  it('should render correctly', () => {
    const { container } = render(
      <OverlayComponent
        selectedDays={{
          from: mockDate.add(1, 'day'),
          to: mockDate.add(44, 'day'),
        }}
        onDaySelect={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it('should render datepicker correctly', () => {
    const { container } = render(
      <OverlayComponent
        isRangePicker
        extraOptions={CALENDAR_DEFAULT_OPTIONS}
        selectedDays={{
          from: mockDate.add(1, 'day'),
          to: mockDate.add(44, 'day'),
        }}
        onDaySelect={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should run callbacks correctly on buttons Cancel, Apply', async () => {
    const onApply = vi.fn();
    const onClearAll = vi.fn();
    const date = mockDate.add(1, 'day');

    const { findByText } = render(
      <OverlayComponent
        selectedDays={{
          from: date,
          to: date,
        }}
        onDaySelect={() => {}}
        onApply={onApply}
        onClearAll={onClearAll}
        extraOptions={CALENDAR_DEFAULT_OPTIONS}
      />
    );

    const applyBtn = await findByText(APPLY);
    const cancelBtn = await findByText('Clear All');
    fireEvent.click(applyBtn);
    fireEvent.click(cancelBtn);

    expect(onApply).toHaveBeenCalledTimes(1);
    expect(onClearAll).toHaveBeenCalledTimes(1);
  });

  it('should run onDaySelect correctly', async () => {
    const onDaySelect = vi.fn();
    const date = mockDate.add(1, 'day');

    const { findByText } = render(
      <OverlayComponent
        selectedDays={{
          from: date,
          to: date,
        }}
        onDaySelect={onDaySelect}
        extraOptions={CALENDAR_DEFAULT_OPTIONS}
      />
    );

    const dayCell = await findByText('4');
    fireEvent.click(dayCell);

    expect(onDaySelect).toHaveBeenCalledTimes(1);
  });
  it('should display and handle extra options', async () => {
    const onDaySelect = vi.fn();
    const onSelectedOption = vi.fn();
    const date = mockDate.add(1, 'day');

    const { findByText } = render(
      <OverlayComponent
        isRangePicker
        selectedDays={{
          from: date,
          to: date,
        }}
        extraOptions={CALENDAR_DEFAULT_OPTIONS}
        setSelectedOption={onSelectedOption}
        onDaySelect={onDaySelect}
      />
    );

    const firstExtraOption = await findByText(CALENDAR_DEFAULT_OPTIONS[0].label);
    fireEvent.click(firstExtraOption);

    expect(firstExtraOption).toBeTruthy();
    expect(onSelectedOption).toHaveBeenCalledTimes(1);
    expect(onSelectedOption.mock.calls[0][0]).toBe(CALENDAR_DEFAULT_OPTIONS[0].value);
  });
});
