import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import CheckBox from './CheckBox';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/Controls/CheckBox',
  component: CheckBox,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'CheckBox',
        url: `${FIGMA_URL}?node-id=228%3A143`,
      },
    ],
  },
};

export const CheckBoxStory = {
  render: () => (
    <Stack>
      <CheckBox isChecked={false} />
      <CheckBox isChecked={true} />
      <CheckBox isChecked={true} isDisabled />
      <CheckBox isChecked={true} isIntermediate />
      <CheckBox isChecked={true} isIntermediate isDisabled />
      <CheckBox isChecked={false} isIntermediate />
      <CheckBox isChecked={false} isIntermediate isDisabled />
    </Stack>
  ),

  name: 'CheckBox',
};

export const CheckBoxWithLabel = {
  render: () => (
    <div>
      <Stack>
        <CheckBox isChecked={false} label={'Not checked single'} />
        <CheckBox isChecked label={'Checked Single'} />
        <CheckBox isChecked={true} label={'Disabled single'} isDisabled />
        <CheckBox isChecked={true} isIntermediate label={'Checked intermediate'} />
        <CheckBox
          isChecked={true}
          isIntermediate
          label={'Disabled checked intermediate'}
          isDisabled
        />
        <CheckBox isChecked={false} isIntermediate label={'Not checked intermediate'} />
        <CheckBox
          isChecked={false}
          isIntermediate
          label={'Disabled not checked intermediate'}
          isDisabled
        />
      </Stack>
      <Stack>
        <CheckBox isChecked={false} isFilled={false} label={'Not checked single'} />
        <CheckBox isChecked isFilled={false} label={'Checked Single'} />
        <CheckBox isChecked={true} isFilled={false} label={'Disabled single'} isDisabled />
        <CheckBox isChecked={true} isFilled={false} isIntermediate label={'Checked intermediate'} />
        <CheckBox
          isChecked={true}
          isFilled={false}
          isIntermediate
          label={'Disabled checked intermediate'}
          isDisabled
        />
        <CheckBox
          isChecked={false}
          isFilled={false}
          isIntermediate
          label={'Not checked intermediate'}
        />
        <CheckBox
          isChecked={false}
          isFilled={false}
          isIntermediate
          label={'Disabled not checked intermediate'}
          isDisabled
        />
      </Stack>
    </div>
  ),

  name: 'CheckBox with Label',
};

export const CheckBoxWithProps = {
  render: () => (
    <Stack>
      <CheckBox
        isChecked={boolean('isChecked', false)}
        isIntermediate={boolean('isIntermediate', false)}
        isFilled={boolean('isFilled', true)}
        label={text('custom label', '')}
        isDisabled={boolean('isDisabled', false)}
      />
    </Stack>
  ),

  name: 'CheckBox with Props',

  parameters: {
    decorators: [withKnobs],
  },
};
