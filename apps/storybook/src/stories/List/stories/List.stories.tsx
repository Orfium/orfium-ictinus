import { List, ListSection, ListItemText, ListItem } from '@orfium/ictinus';
import { FIGMA_URL, Function } from 'utils/common';

export default {
  title: 'Updated Components/List/List',
  component: List,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'List',
        url: `${FIGMA_URL}?node-id=22406-71589`,
      },
    ],
    controls: { disable: true },
  },
};

export const ListStory = {
  render: () => (
    <Function>
      {() => {
        return (
          <List label={'list'}>
            {new Array(7).fill(undefined).map((__, index) => {
              return (
                <ListItem key={`Item ${index}`}>
                  <ListItemText>Item{index}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        );
      }}
    </Function>
  ),

  name: 'List',
};

export const GroupList = {
  render: () => (
    <Function>
      {/* @TODO */}
      {() => {
        return (
          <List label={'group list'}>
            {new Array(3).fill(undefined).map((__, index) => {
              return (
                <ListSection key={`Group_${index}`} title={`Group ${index}`}>
                  <ListItem key={`Group_${index}_1`}>
                    <ListItemText>Item 1</ListItemText>
                  </ListItem>
                  <ListItem key={`Group_${index}_2`}>
                    <ListItemText>Item 2</ListItemText>
                  </ListItem>
                </ListSection>
              );
            })}
          </List>
        );
      }}
    </Function>
  ),

  name: 'Group List',
};

export const VirtualizedList = {
  render: () => (
    <Function>
      {() => {
        return (
          <List label={'list'} height={450} isVirtualized={true}>
            {new Array(1000).fill(undefined).map((__, index) => {
              return (
                <ListItem key={`Item ${index}`}>
                  <ListItemText>Item {index}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        );
      }}
    </Function>
  ),

  name: 'Virtualized List',
};
