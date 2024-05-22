import List, { ListItemText, ListItem } from '../index';
import { FIGMA_URL, Function } from 'utils/common';
import Stack from '../../storyUtils/Stack';

export default {
  title: 'Updated Components/List/ListItemText',
  component: ListItemText,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'ListItemAction',
        url: `${FIGMA_URL}?node-id=22406-71589`,
      },
    ],
    controls: { disable: true },
  },
};

export const ListItemTextNormal = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          return (
            <List label={'ListItem'}>
              <ListItem>
                <ListItemText>Item 1</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Item 2</ListItemText>
              </ListItem>
            </List>
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'ListItemText normal',
};

export const ListItemTextWithSecondaryText = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          return (
            <List label={'ListItem with secondary text'}>
              <ListItem>
                <ListItemText description={'This is a secondary text on this item'}>
                  Item 1
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText description={'This is a secondary text on this item'}>
                  Item 2
                </ListItemText>
              </ListItem>
            </List>
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'ListItemText with secondary text',
};
