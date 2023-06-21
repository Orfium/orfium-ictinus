import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '../../test';
import TextField from './TextField';

const values = ['Value 1', 'Value 2'];

describe('Multi TextField', () => {
  let input: HTMLInputElement;
  let chips: HTMLElement[];
  let newChip: HTMLElement;

  beforeEach(() => {
    render(
      <div>
        <TextField isMulti label={'Country'} multiValues={values} />
      </div>
    );
  });

  beforeEach(() => {
    input = screen.getByPlaceholderText('Country') as HTMLInputElement;
  });

  it('renders the initial values', async () => {
    chips = await screen.findAllByTestId(/chip-chip_/);
    expect(chips.length).toEqual(values.length);
  });

  it('creates a new Chip when there is input and Enter is pressed', async () => {
    userEvent.type(input, 'New item{enter}');

    newChip = screen.getByTestId('chip-chip_2');
    expect(newChip).toBeVisible();
    expect(newChip.innerHTML).toContain('New item');
  });

  it('deletes the Chip when the delete button is clicked', async () => {
    userEvent.click(screen.getByTestId('chip-delete-chip_1'));
    expect(screen.queryByTestId('chip-chip_1')).not.toBeInTheDocument();
  });

  it('deletes all the Chips when the Delete All button is clicked', async () => {
    userEvent.click(screen.getByTestId('select-right-icon'));
    expect(screen.queryByTestId('chip-chip_0')).not.toBeInTheDocument();
  });

  it('deletes a chip when Backspace is pressed', async () => {
    userEvent.type(input, '{backspace}');
    expect(screen.queryByTestId('chip-chip_1')).not.toBeInTheDocument();
  });
});
