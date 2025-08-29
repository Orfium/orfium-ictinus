import { userEvent, within } from '@storybook/test';

export const hoverOnTooltips = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const buttons = canvas.getAllByTestId('tooltip-button');

  buttons.forEach((button) => {
    userEvent.hover(button, { delay: 300 });
  });
};
