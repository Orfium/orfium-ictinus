import React, { FC, useState } from 'react';

import Box from '../../Box';
import TextField from '../../TextField';
import Typography from '../../Typography';

const TextFieldShowcase: FC = () => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<string[]>(['hello', 'its me']);

  const addTag = (tag: string) => {
    setTags([...tags, tag]);
  };
  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

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
    <>
      <Box px={'4'}>
        <Typography variant={'headline02'}>Controlled MultiTextField</Typography>
      </Box>
      <div style={{ width: '500px' }}>
        <TextField
          isMulti
          tags={tags}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onMultiValueDelete={removeTag}
          onMultiValueClearAll={handleClearAll}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default TextFieldShowcase;
