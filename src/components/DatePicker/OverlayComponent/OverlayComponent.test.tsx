import React from 'react';
import { fireEvent, render } from 'test';
import OverlayComponent from './OverlayComponent';
import { currentDay } from '../utils';

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
    const onApply = jest.fn();
    const onCancel = jest.fn();
    const date = mockDate.add(1, 'day');

    const { findByText } = render(
      <OverlayComponent
        selectedDays={{
          from: date,
          to: date,
        }}
        onDaySelect={() => {}}
        onApply={onApply}
        onCancel={onCancel}
      />
    );

    const applyBtn = await findByText('Apply');
    const cancelBtn = await findByText('Cancel');
    fireEvent.click(applyBtn);
    fireEvent.click(cancelBtn);

    expect(onApply).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should run onDaySelect correctly', async () => {
    const onDaySelect = jest.fn();
    const date = mockDate.add(1, 'day');

    const { findByText } = render(
      <OverlayComponent
        selectedDays={{
          from: date,
          to: date,
        }}
        onDaySelect={onDaySelect}
      />
    );

    const dayCell = await findByText('4');
    fireEvent.click(dayCell);

    expect(onDaySelect).toHaveBeenCalledTimes(1);
  });
  it('should display and handle extra options', async () => {
    const onDaySelect = jest.fn();
    const onSelectedOption = jest.fn();
    const date = mockDate.add(1, 'day');
    const extraOptions = [
      {
        value: 'last-7-days',
        label: 'Last 7 days',
        dates: [mockDate.subtract(7, 'day'), currentDay],
      },
      {
        value: 'last-30-days',
        label: 'Last 30 days',
        dates: [mockDate.subtract(30, 'day'), currentDay],
      },
      {
        value: 'custom',
        label: 'Custom',
        dates: [mockDate],
      },
    ];

    const { findByText } = render(
      <OverlayComponent
        isRangePicker
        selectedDays={{
          from: date,
          to: date,
        }}
        extraOptions={extraOptions}
        setSelectedOption={onSelectedOption}
        onDaySelect={onDaySelect}
      />
    );

    const firstExtraOption = await findByText(extraOptions[0].label);
    fireEvent.click(firstExtraOption);

    expect(firstExtraOption).toBeTruthy();
    expect(onSelectedOption).toHaveBeenCalledTimes(1);
    expect(onSelectedOption.mock.calls[0][0]).toBe(extraOptions[0].value);
  });
});
