import Icon from './Icon';
import Stack from '../storyUtils/Stack';
import PresentComponent from '../storyUtils/PresentComponent';
import iconSelector from './assets/iconSelector';
import { FIGMA_URL } from '../../utils/common';
import { AcceptedIconNames } from './types';

export default {
  title: 'Design System/Icon',
  component: Icon,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Icons',
        url: `${FIGMA_URL}?node-id=99%3A3192`,
      },
    ],
  },
};

export const IconsGallery = {
  render: () => (
    <Stack>
      {Object.keys(iconSelector)
        .sort((a, b) => a.localeCompare(b))
        .map((iconName) => (
          <PresentComponent key={iconName} name={iconName} width={150}>
            <Icon name={iconName as AcceptedIconNames} color={'darkGrey'} />
          </PresentComponent>
        ))}
    </Stack>
  ),

  name: 'Icons Gallery',
};

export const IconWithColor = {
  render: () => (
    <Stack>
      <PresentComponent name={'primary'}>
        <Icon name={'add'} color={'primary'} />
      </PresentComponent>
      <PresentComponent name={'secondary'}>
        <Icon name={'add'} color={'secondary'} />
      </PresentComponent>
      <PresentComponent name={'success'}>
        <Icon name={'add'} color={'success'} />
      </PresentComponent>
      <PresentComponent name={'error'}>
        <Icon name={'add'} color={'error'} />
      </PresentComponent>
      <PresentComponent name={'info'}>
        <Icon name={'add'} color={'info'} />
      </PresentComponent>
      <PresentComponent name={'warning'}>
        <Icon name={'add'} color={'warning'} />
      </PresentComponent>
      <PresentComponent name={'primary'}>
        <Icon name={'add'} color={'primary'} />
      </PresentComponent>
      <PresentComponent name={'secondary'}>
        <Icon name={'add'} color={'secondary'} />
      </PresentComponent>
      <PresentComponent name={'custom'}>
        <Icon name={'add'} color={'#de5798'} />
      </PresentComponent>
    </Stack>
  ),

  name: 'Icon with color',
};

export const IconWithSize = {
  render: () => (
    <Stack>
      <PresentComponent name={'default'}>
        <Icon name={'add'} />
      </PresentComponent>
      <PresentComponent name={'20'}>
        <Icon name={'add'} size={20} />
      </PresentComponent>
      <PresentComponent name={'46'}>
        <Icon name={'add'} size={46} />
      </PresentComponent>
    </Stack>
  ),

  name: 'Icon with size',
};
