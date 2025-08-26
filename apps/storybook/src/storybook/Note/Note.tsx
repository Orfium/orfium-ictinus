import { Unstyled } from '@storybook/addon-docs/blocks';
import type { FCC } from 'react';

import { noteStyles } from './Note.style';

const Note: FCC = ({ children }) => {
  return (
    <Unstyled>
      <div css={noteStyles()}>
        <span style={{ margin: 0 }}>{children}</span>
      </div>
    </Unstyled>
  );
};

export default Note;
