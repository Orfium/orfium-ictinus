import type { FC} from 'react';
import React, { useState } from 'react';

import TextField from '../../TextField';

type Props = {
  values?: string[];
};

const MultiTextFieldShowcase: FC<Props> = ({ values = [] }) => {
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
        label="MultiTextField"
        placeholder="Type and then press Enter"
        tags={tags}
        value={value}
        onChange={handleChange}
        onMultiValueDelete={removeTag}
        onMultiValueClearAll={handleClearAll}
        onKeyDown={handleKeyDown}
        dataTestId="showcase"
      />
    </div>
  );
};

export default MultiTextFieldShowcase;
