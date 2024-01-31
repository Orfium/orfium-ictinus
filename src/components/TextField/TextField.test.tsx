import userEvent from '@testing-library/user-event';
import React from 'react';

import { fireEvent, render, screen } from '../../test';
import { MultiTextFieldShowcase, TextFieldShowCase } from '../storyUtils/TextFieldShowcases/';

export const values = ['Value 1', 'Value 2'];

describe('Multi TextField', () => {
  let input: HTMLInputElement;
  let tags: HTMLElement[];
  let newTag: HTMLElement;

  beforeEach(() => {
    render(<MultiTextFieldShowcase values={values} />);
  });

  beforeEach(() => {
    input = screen.getByTestId('input_showcase') as HTMLInputElement;
  });

  it('renders the initial values', async () => {
    tags = await screen.findAllByTestId(/tag_container/);
    expect(tags.length).toEqual(values.length);
  });

  it('creates a new Tag when there is input and Enter is pressed', async () => {
    await userEvent.type(input, 'New item{enter}');

    newTag = screen.getByTestId('tag_2_tag_container');
    expect(newTag).toBeVisible();
    expect(newTag.innerHTML).toContain('New item');
  });

  it('deletes the Tag when the delete button is clicked', async () => {
    await userEvent.click(screen.getByTestId('tag_1_tag_suffix'));
    expect(screen.queryByTestId('tag_1_tag_container')).not.toBeInTheDocument();
  });

  it('deletes all the Tags when the Delete All button is clicked', async () => {
    await userEvent.click(screen.getByTestId('select-right-icon'));
    expect(screen.queryByTestId('tag_0_tag_container')).not.toBeInTheDocument();
  });

  it('deletes a tag when Backspace is pressed', async () => {
    await userEvent.type(input, '{backspace}');
    expect(screen.queryByTestId('tag_1_tag_container')).not.toBeInTheDocument();
  });
});

describe('Masked TextField', () => {
  let input: HTMLInputElement;

  beforeEach(() => {
    render(<TextFieldShowCase mask={'+(999)'} />);
  });

  beforeEach(() => {
    input = screen.getByTestId('input') as HTMLInputElement;
  });

  it('shows the mask as a placeholder when focused', async () => {
    input.focus();

    expect(input.value).toEqual('+(   )');
  });

  it('formats the input correctly according to the mask', async () => {
    fireEvent.change(input, { target: { value: '123' } });

    expect(input.value).toEqual('+(123)');
  });
});
