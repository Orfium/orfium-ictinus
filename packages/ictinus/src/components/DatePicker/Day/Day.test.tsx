import { fireEvent, render } from 'test';
import { vi } from 'vitest';
import { currentDay } from '../utils';
import Day from './Day';

describe('Day', () => {
  const mockDate = currentDay;
  const day = mockDate.date();
  const year = mockDate.year();
  const month = mockDate.month();

  it('should render correctly', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <Day day={day} month={month} year={year} />
          </tr>
        </tbody>
      </table>
    );
    expect(container).toMatchSnapshot();
  });
  it('should render isFirst, isLast correctly', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <Day day={day} month={month} year={year} isFirst />
          </tr>
        </tbody>
      </table>
    );
    expect(container).toMatchSnapshot();

    const { container: isLastContainer } = render(
      <table>
        <tbody>
          <tr>
            <Day day={day} month={month} year={year} isLast />
          </tr>
        </tbody>
      </table>
    );
    expect(isLastContainer).toMatchSnapshot();
  });
  it('should render disabled correctly', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <Day day={day} month={month} year={year} isDisabled />
          </tr>
        </tbody>
      </table>
    );
    expect(container).toMatchSnapshot();
  });

  it('should run onDaySelect correctly', async () => {
    const onDaySelect = vi.fn();

    const { findByText } = render(
      <table>
        <tbody>
          <tr>
            <Day day={day} month={month} year={year} onSelect={onDaySelect} />
          </tr>
        </tbody>
      </table>
    );

    const dayCell = await findByText(day.toString());
    fireEvent.click(dayCell);

    expect(onDaySelect).toHaveBeenCalledTimes(1);
  });

  it('should not run onDaySelect when day is disabled', async () => {
    const onDaySelect = vi.fn();

    const { findByText } = render(
      <table>
        <tbody>
          <tr>
            <Day day={day} month={month} year={year} onSelect={onDaySelect} isDisabled />
          </tr>
        </tbody>
      </table>
    );

    const dayCell = await findByText(day.toString());
    fireEvent.click(dayCell);

    expect(onDaySelect).toHaveBeenCalledTimes(0);
  });
});
