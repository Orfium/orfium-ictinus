import { fireEvent, screen } from '@testing-library/react';
import { KEYBOARD_EVENT_KEYS } from 'hooks/useKeyboardEvents';
import dayjs, { Dayjs } from 'utils/date';

import { Range } from './OverlayComponent/OverlayComponent';

const fakeDate = dayjs('11-03-2020 12:00:00');
const getDefaultDate = (date?: undefined | Dayjs) =>
  process.env.NODE_ENV !== 'test' ? date : fakeDate;

export const currentDay: Dayjs =
  process.env.STORYBOOK_ENV === 'true' ? fakeDate : (getDefaultDate(dayjs()) as Dayjs);

export const initDates = (value: { from?: Date; to?: Date }): Range => {
  return {
    from: value.from ? dayjs(value.from) : undefined,
    to: value.to ? dayjs(value.to) : undefined,
  };
};

export const openDatePicker = async () => {
  const calendarButton = screen.getByTestId('calendar_button');
  fireEvent.click(calendarButton);
};

export const clickOnElement = (element: HTMLElement, key: string, charCode: number) =>
  fireEvent.keyDown(element, {
    key: key,
    code: key,
    charCode: charCode,
  });

export const navigateOnElement = (
  element: HTMLElement,
  path: (keyof typeof KEYBOARD_EVENT_KEYS)[]
) => {
  path.forEach((key) => {
    switch (key) {
      case KEYBOARD_EVENT_KEYS.ArrowLeft:
        return clickOnElement(element, KEYBOARD_EVENT_KEYS.ArrowLeft, 37);
      case KEYBOARD_EVENT_KEYS.ArrowUp:
        return clickOnElement(element, KEYBOARD_EVENT_KEYS.ArrowUp, 38);
      case KEYBOARD_EVENT_KEYS.ArrowRight:
        return clickOnElement(element, KEYBOARD_EVENT_KEYS.ArrowRight, 39);
      case KEYBOARD_EVENT_KEYS.ArrowDown:
        return clickOnElement(element, KEYBOARD_EVENT_KEYS.ArrowDown, 40);
      default:
        return null;
    }
  });
};
