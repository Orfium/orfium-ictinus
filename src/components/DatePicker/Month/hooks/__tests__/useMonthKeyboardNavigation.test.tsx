import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import useMonthKeyboardNavigation from '../useMonthKeyboardNavigation';
import { fireEvent, render } from '@testing-library/react';

// jest.mock('hooks/useKeyboardEvents', () => ({
//   useKeyboardEvents: jest.fn(() => ({ keyboardProps: {} })),
// }));

describe('useMonthKeyboardNavigation', () => {
  it('should handle keyboard navigation correctly', () => {
    const selectedDays = { from: undefined, to: undefined };
    const isFirstCalendar = true;
    const month = 8; // September (zero-based index)
    const year = 2023;

    const { result } = renderHook(
      () => useMonthKeyboardNavigation({ selectedDays, isFirstCalendar, month, year }) // Pass calendarRef
    );

    const { focusedDay } = result.current;

    const { container } = render(
      <div>
        <table ref={result.current.calendarRef} {...result.current.keyboardProps} />
        <div tabIndex={0} />
        <div tabIndex={0} />
        <div tabIndex={0} />
      </div>
    );

    // Simulate keyboard events
    act(() => {
      fireEvent.keyDown(container, { key: 'ArrowDown', code: 'ArrowDown' });
    });
    expect(result.current.focusedDay).toBe(focusedDay + 7);
  });
});
