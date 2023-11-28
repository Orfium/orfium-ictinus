import { within, userEvent as TLUserEvent } from '@storybook/testing-library';

export const openDatePicker = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const calendarButton = canvas.getByTestId('calendar_button');
  await TLUserEvent.click(calendarButton);
};
