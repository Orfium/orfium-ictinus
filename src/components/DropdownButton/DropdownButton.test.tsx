import React from 'react';
import { render, screen, selectDropdownOption, waitFor } from '../../test';
import DropdownButton from './DropdownButton';
import userEvent from '@testing-library/user-event';

const mockOnButtonClick = jest.fn();
const mockonOptionSelect = jest.fn();

const renderComponent = () => {
  const props = {
    items: ['Item 1'],
    onButtonClick: mockOnButtonClick,
    onOptionSelect: mockonOptionSelect,
  };

  return render(<DropdownButton {...props} />);
};

describe('DropdownButton:', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display a dropdown menu when the triangleDown icon is clicked', () => {
    renderComponent();

    const iconButton = screen.getByTestId('dropdown-toggle-icon-button');

    userEvent.click(iconButton);

    expect(screen.getByTestId('dropdown-button-options_list')).toBeInTheDocument();
  });

  it('should trigger the Button CTA when the button is clicked', () => {
    renderComponent();

    const button = screen.getByTestId('dropdownbutton');

    userEvent.click(button);

    expect(mockOnButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should trigger the Option CTA when one of the options is clicked', () => {
    renderComponent();

    const iconButton = screen.getByTestId('dropdown-toggle-icon-button');

    userEvent.click(iconButton);

    const option = screen.getByTestId('dropdown-button-options');

    userEvent.click(option);

    expect(mockonOptionSelect).toHaveBeenCalledTimes(1);
  });
});
