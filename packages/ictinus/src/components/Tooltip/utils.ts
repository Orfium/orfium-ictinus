import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const hoverOnTooltips = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const buttons = canvas.getAllByTestId('tooltip-button');

  buttons.forEach((button) => {
    userEvent.hover(button, { delay: 300 });
  });
};
