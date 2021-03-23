import React from 'react';
import { fireEvent, render } from 'test';
import MonthWrapper from './MonthWrapper';
import { currentDay } from '../../../utils';

describe('MonthWrapper', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MonthWrapper
        date={currentDay}
        setDate={() => {}}
        selectedDays={{
          from: currentDay.add(1, 'day'),
          to: currentDay.add(44, 'day'),
        }}
        onDaySelect={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should run callbacks correctly onDaySelect, setDate', async () => {
    const date = currentDay;
    const setDate = jest.fn();
    const onDaySelect = jest.fn();
    const nextYearDate = date.year(date.year() + 1);
    const monthText = `${nextYearDate.format('MMMM')} ${nextYearDate.format('YYYY')}`;
    const { findByText, findByTestId } = render(
      <MonthWrapper
        date={date}
        setDate={setDate}
        selectedDays={{
          from: currentDay.add(1, 'day'),
          to: currentDay.add(44, 'day'),
        }}
        onDaySelect={onDaySelect}
      />
    );
    const dayCell = await findByText('4');
    fireEvent.click(dayCell);

    const monthBtn = await findByTestId('button');
    fireEvent.click(monthBtn);

    const newMonthOption = await findByText(monthText);
    fireEvent.click(newMonthOption);

    expect(onDaySelect).toHaveBeenCalledTimes(1);
    expect(setDate).toHaveBeenCalledTimes(1);
    expect(setDate.mock.calls[0][0].toDate()).toEqual(nextYearDate.toDate());
  });
});
