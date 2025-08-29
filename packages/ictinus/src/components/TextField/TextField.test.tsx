import userEvent from '@testing-library/user-event';

import type { ComponentProps} from 'react';
import { useState } from 'react';
import { fireEvent, render, screen } from '~/test';
import TextField from './TextField';

const StatefulTextField = ({
  values,
  mask,
  status,
  suffix,
  size,
  label,
  isDisabled,
  isRequired,
}: Omit<ComponentProps<typeof TextField>, 'value'> & {
  values?: string[];
}) => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<string[]>(values);

  const addTag = (tag: string) => {
    setTags([...tags, tag]);
  };
  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue((event.target as HTMLInputElement).value);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter': {
        if (!value) return;
        addTag(value);
        setValue('');

        return;
      }
      case 'Backspace': {
        if (value || !tags.length) return;
        removeTag(tags[tags.length - 1]);

        return;
      }
    }
  };

  const handleClearAll = () => {
    setTags([]);
    setValue('');
  };

  const isMaskedTextField = !!mask;

  return (
    <TextField
      value={value}
      mask={isMaskedTextField ? mask : undefined}
      isMulti={values?.length > 0}
      data-testid="input_showcase"
      onKeyDown={handleKeyDown}
      onMultiValueDelete={removeTag}
      onMultiValueClearAll={handleClearAll}
      onChange={handleChange}
      tags={tags}
      onInput={handleChange}
      status={status}
      suffix={suffix}
      size={size}
      label={label}
      isDisabled={isDisabled}
      isRequired={isRequired}
    />
  );
};

export const values = ['Value 1', 'Value 2'];

describe('Multi TextField', () => {
  let input: HTMLInputElement;
  let tags: HTMLElement[];
  let newTag: HTMLElement;

  beforeEach(() => {
    render(<StatefulTextField values={values} label="Multi TextField" />);
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
    render(<StatefulTextField mask="+(999)" label="Masked TextField" />);
  });

  beforeEach(() => {
    input = screen.getByTestId('input_showcase') as HTMLInputElement;
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
