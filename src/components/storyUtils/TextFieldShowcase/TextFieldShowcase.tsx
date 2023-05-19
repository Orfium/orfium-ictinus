import React, { FC, useState } from 'react';

import TextField from '../../TextField';

const TextFieldShowcase: FC = () => {
  const [tags, setTags] = useState<string[]>(['existing-tag-1', 'existing-tag-2']);

  const addTags = (tagStr: string) => {
    const tagsArr = tagStr.replace(/ /g, '').split(',');
    setTags((tags) => [...tags, ...tagsArr]);
  };

  const removeTag = (value: string) => {
    const newTags = tags.filter((id) => id !== value);
    setTags([...newTags]);
  };

  return (
    <>
      <h2>Controlled multi TextField</h2>
      <div style={{ width: '500px' }}>
        <TextField
          multi
          multiValues={tags}
          name="tags"
          label="Tags"
          hintMsg="Copy / paste comma seperated tags to add them, ex. tag1, tag2, tag3"
          status="hint"
          onMultiValueCreate={addTags}
          onMultiValueDelete={removeTag}
          onClearAllValues={() => setTags([])}
        />
      </div>
    </>
  );
};

export default TextFieldShowcase;
