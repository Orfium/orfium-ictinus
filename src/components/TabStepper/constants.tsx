import type { TabOrientation } from 'index';
import { TextArea, TextField } from 'index';

import { Radio, RadioGroup } from '../Controls';

export const getContent = (key: string, orientation: TabOrientation) => {
  if (key === 'step_1') {
    return (
      <div
        css={{
          display: 'flex',
          padding: '16px',
          flexDirection: orientation === 'horizontal' ? 'row' : 'column',
          gap: '16px',
        }}
      >
        <TextField label="First Name" isRequired />
        <TextField label="Middle Name" />
        <TextField label="Last Name" isRequired />
      </div>
    );
  }

  if (key === 'step_2') {
    return (
      <RadioGroup
        sx={{
          display: 'flex',
          flexDirection: orientation === 'horizontal' ? 'row' : 'column',
          gap: '32px',
          padding: '16px',
        }}
      >
        <Radio value="option 1">Option 1</Radio>
        <Radio value="option 2">Option 2</Radio>
        <Radio value="option 3">Option 3</Radio>
      </RadioGroup>
    );
  }

  return (
    <div css={{ padding: '16px' }}>
      <TextArea label="Comments" />
    </div>
  );
};
