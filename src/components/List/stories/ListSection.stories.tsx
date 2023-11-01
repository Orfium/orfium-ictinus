import List, { ListSection, ListItem, ListItemText } from '../index';
import { FIGMA_URL, Function } from '../../../utils/common';
import SectionHeader from '../../../storybook/SectionHeader';
import Stack from '../../storyUtils/Stack';

export default {
  title: 'Design System/List/ListSection',
  component: ListSection,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'ListSection',
        url: `${FIGMA_URL}?node-id=22406-71589`,
      },
    ],
  },
};

export const NormalListSection = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          return (
            <List label={'ListSection'}>
              <ListSection title="Section 1">
                <ListItem>
                  <ListItemText>...</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>...</ListItemText>
                </ListItem>
              </ListSection>
              <ListSection title="Section 2">
                <ListItem>
                  <ListItemText>...</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>...</ListItemText>
                </ListItem>
              </ListSection>
            </List>
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Normal ListSection',
};

export const CompactListSection = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          return (
            <List label={'ListSection'}>
              <ListSection title="Section 1" rowSize={'compact'}>
                <ListItem>
                  <ListItemText>...</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>...</ListItemText>
                </ListItem>
              </ListSection>
              <ListSection title="Section 2" rowSize={'compact'}>
                <ListItem>
                  <ListItemText>...</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>...</ListItemText>
                </ListItem>
              </ListSection>
            </List>
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Compact ListSection',
};
