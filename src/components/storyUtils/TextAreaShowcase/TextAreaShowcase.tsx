import React, { FC, useState } from 'react';

import TextArea from 'components/TextArea/TextArea';

const TextAreaShowcase: FC = () => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      label={'Label'}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      cols={10}
      rows={5}
      isResizeEnabled={false}
      maxCharacters={10}
    />
  );
};

export default TextAreaShowcase;
