import { within, userEvent as TLUserEvent } from 'storybook/test';

export const openDatePicker = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const calendarButton = canvas.getByTestId('calendar_button');
  await TLUserEvent.click(calendarButton);
};
