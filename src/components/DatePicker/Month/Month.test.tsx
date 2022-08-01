import React from 'react';
import { render } from 'test';

import { currentDay } from '../utils';
import Month from './Month';
import {
  calculatedDayIsBetween,
  calculateDisabledDays,
  calculateSelectedDay,
  calculateSelectedDayPosition,
} from './Month.utils';

describe('Month', () => {
  const mockDate = currentDay;
  const day = mockDate.date();
  const year = mockDate.year();
  const month = mockDate.month();

  it('should render correctly', () => {
    const { container } = render(
      <Month
        year={year}
        month={month}
        selectedDays={{
          from: mockDate.add(1, 'day'),
          to: mockDate.add(44, 'day'),
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should check calculateDisabledDays', () => {
    const isDisabledAfter = calculateDisabledDays(day, month, year, {
      after: mockDate.subtract(3, 'day').toDate(),
    });
    const isDisabledBefore = calculateDisabledDays(day, month, year, {
      before: mockDate.add(3, 'day').toDate(),
    });
    const isDisabledBeforeAndAfter = calculateDisabledDays(day, month, year, {
      before: mockDate.subtract(1, 'day').toDate(),
      after: mockDate.add(1, 'day').toDate(),
    });
    const isDisabledArray = calculateDisabledDays(day, month, year, {
      days: [mockDate.subtract(1, 'day').toDate()],
    });

    expect(isDisabledAfter).toBeTruthy();
    expect(isDisabledBefore).toBeTruthy();
    expect(isDisabledBeforeAndAfter).toBeFalsy();
    expect(isDisabledArray).toBeFalsy();
  });

  it('should check calculatedDayIsBetween', () => {
    const wrongDate = mockDate.subtract(3, 'day');
    const correctDate = mockDate;
    const isFaultyDay = calculatedDayIsBetween(
      day,
      month,
      year,
      wrongDate.startOf('day'),
      wrongDate.endOf('day')
    );
    const isTruthyDay = calculatedDayIsBetween(
      day,
      month,
      year,
      correctDate.startOf('day'),
      correctDate.endOf('day')
    );

    expect(isFaultyDay).toBeFalsy();
    expect(isTruthyDay).toBeTruthy();
  });

  it('should check calculateSelectedDayPosition', () => {
    const dateFrom = mockDate;
    const dateTo = mockDate.add(3, 'day');
    const isFirst = calculateSelectedDayPosition(day, 'first', month, year, dateFrom, dateTo);
    const isLast = calculateSelectedDayPosition(day, 'first', month, year, dateTo, dateFrom);

    expect(isFirst).toBeTruthy();
    expect(isLast).toBeTruthy();
  });

  it('should check calculateSelectedDay', () => {
    const dateFrom = mockDate;
    const wrongDateFrom = mockDate.add(1, 'day');
    const dateTo = mockDate.add(3, 'day');
    const isSelected = calculateSelectedDay(day, month, year, dateFrom, dateTo);
    const isSelectedWrongly = calculateSelectedDay(day, month, year, wrongDateFrom, dateTo);

    expect(isSelected).toBeTruthy();
    expect(isSelectedWrongly).toBeFalsy();
  });
});
