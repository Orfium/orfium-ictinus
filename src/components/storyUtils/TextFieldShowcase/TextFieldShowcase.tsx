import React, { FC, useState } from 'react';

import Box from '../../Box';
import TextField from '../../TextField';
import Typography from '../../Typography';

const TextFieldShowcase: FC = () => {
  const [tags, setTags] = useState<string[]>(['existing-tag-1', 'existing-tag-2']);

  const addTags = (tagStr: string | undefined) => {
    setTags((tags) => (tagStr === undefined ? tags : [...tags, tagStr]));
  };

  const removeTag = (value: string | undefined) => {
    const newTags = tags.filter((id) => id !== value);
    setTags([...newTags]);
  };

  return (
    <>
      <Box px={'4'}>
        <Typography variant={'headline02'}>Controlled multi TextField</Typography>
      </Box>
      <div style={{ width: '500px' }}>
        <TextField
          multi
          multiValues={tags}
          multiValuesHandler={(tags) => tags?.replace(/ /g, '').split(',')}
          name="tags"
          label="Tags"
          hintMsg="Copy / paste comma seperated tags to add them, ex. tag1, tag2, tag3"
          status="hint"
          onMultiValueCreate={addTags}
          onMultiValueDelete={removeTag}
          onClearAllValues={() => setTags([])}
          sx={{
            textField: { width: '100%' },
          }}
        />
      </div>
    </>
  );
};

export default TextFieldShowcase;
