import { fireEvent, within } from '@storybook/testing-library';

export const hoverOnTooltips = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const buttons = canvas.getAllByTestId('button');

  buttons.forEach((button) => {
    fireEvent.mouseOver(button);
  });
};
