import React, { FC, useState } from 'react';

import TextField from '../../TextField';

export const values = ['Value 1', 'Value 2'];

const TextFieldShowcase: FC = () => {
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

  return (
    <div style={{ width: '500px' }}>
      <TextField
        isMulti
        label="Controlled MultiTextField"
        tags={tags}
        value={value}
        onChange={handleChange}
        onMultiValueDelete={removeTag}
        onMultiValueClearAll={handleClearAll}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TextFieldShowcase;
