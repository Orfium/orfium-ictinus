import React from 'react';
import { render } from 'test';
import Month from './Month';
import dayjs from 'dayjs';
import {
  calculatedDayIsBetween,
  calculateDisabledDays,
  calculateSelectedDay,
  calculateSelectedDayPosition,
} from './Month.utils';

describe('Month', () => {
  const day = dayjs().date();
  const year = dayjs().year();
  const month = dayjs().month();

  it('should render correctly', () => {
    const { container } = render(
      <Month
        year={year}
        month={month}
        selectedDays={{
          from: dayjs().add(1, 'day'),
          to: dayjs().add(44, 'day'),
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should check calculateDisabledDays', () => {
    const disabledAfter = calculateDisabledDays(day, month, year, {
      after: dayjs()
        .subtract(3, 'day')
        .toDate(),
    });
    const disabledBefore = calculateDisabledDays(day, month, year, {
      before: dayjs()
        .add(3, 'day')
        .toDate(),
    });
    const disabledBeforeAndAfter = calculateDisabledDays(day, month, year, {
      before: dayjs()
        .subtract(1, 'day')
        .toDate(),
      after: dayjs()
        .add(1, 'day')
        .toDate(),
    });

    expect(disabledAfter).toBeTruthy();
    expect(disabledBefore).toBeTruthy();
    expect(disabledBeforeAndAfter).toBeFalsy();
  });

  it('should check calculatedDayIsBetween', () => {
    const wrongDate = dayjs().subtract(3, 'day');
    const correctDate = dayjs();
    const faultyDay = calculatedDayIsBetween(
      day,
      month,
      year,
      wrongDate.startOf('day'),
      wrongDate.endOf('day')
    );
    const truthyDay = calculatedDayIsBetween(
      day,
      month,
      year,
      correctDate.startOf('day'),
      correctDate.endOf('day')
    );

    expect(faultyDay).toBeFalsy();
    expect(truthyDay).toBeTruthy();
  });

  it('should check calculateSelectedDayPosition', () => {
    const dateFrom = dayjs();
    const dateTo = dayjs().add(3, 'day');
    const isFirst = calculateSelectedDayPosition(day, 'first', month, year, dateFrom, dateTo);
    const isLast = calculateSelectedDayPosition(day, 'first', month, year, dateTo, dateFrom);

    expect(isFirst).toBeTruthy();
    expect(isLast).toBeTruthy();
  });

  it('should check calculateSelectedDay', () => {
    const dateFrom = dayjs();
    const wrongDateFrom = dayjs().add(1, 'day');
    const dateTo = dayjs().add(3, 'day');
    const isSelected = calculateSelectedDay(day, month, year, dateFrom, dateTo);
    const isSelectedWrongly = calculateSelectedDay(day, month, year, wrongDateFrom, dateTo);

    expect(isSelected).toBeTruthy();
    expect(isSelectedWrongly).toBeFalsy();
  });
});
