import { within, fireEvent } from '@storybook/testing-library';

export const hoverOnTooltips = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const buttons = canvas.getAllByTestId('button');

  buttons.forEach((button) => {
    fireEvent.focus(button);
  });
};
