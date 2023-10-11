import { fireEvent, screen } from '@testing-library/react';

export const hoverOnTooltips = async () => {
  const buttons = screen.getAllByTestId('button');

  buttons.forEach((button) => {
    fireEvent.focus(button);
  });
};
