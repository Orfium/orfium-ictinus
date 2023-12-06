import List, { ListItem, ListItemAction, ListItemText } from '../index';
import { FIGMA_URL } from '../../../utils/common';
import { Radio, Switch } from '../../Controls';
import CheckBox from '../../CheckBox';
import Avatar from '../../Avatar';
import Box from '../../Box';
import { useState } from 'react';

export default {
  title: 'Updated Components/List/ListItem',
  component: ListItem,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'ListItem',
        url: `${FIGMA_URL}?node-id=22406-71589`,
      },
    ],
  },
};

export const ListItemCompilations = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    return (
      <>
        <Box mb={'3'}>
          <List label={'list'} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ListItem key={'1'} textValue={'Text Only'}>
              <ListItemText>Text only</ListItemText>
            </ListItem>
            <ListItem key={'2'} rowSize={'compact'} textValue={'Text Only'}>
              <ListItemText>Text only (compact)</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box mb={'3'}>
          <List label={'list'} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ListItem key={'3'} textValue={'Text'}>
              <ListItemText description={'with Secondary Help Text'}>Text</ListItemText>
            </ListItem>
            <ListItem key={'4'} rowSize={'compact'} textValue={'Text'}>
              <ListItemText description={'with Secondary Help Text'}>Text (compact)</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box mb={'3'}>
          <List label={'list'} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ListItem key={'5'}>
              <ListItemAction>
                <Radio
                  value="cherry"
                  isSelected={selectedKeys.has(`5`)}
                  inputProps={{
                    onClick: (e) => {
                      e.stopPropagation();
                      setSelectedKeys(new Set(['5']));
                    },
                  }}
                />
              </ListItemAction>
              <ListItemText>Option Radio</ListItemText>
            </ListItem>
            <ListItem key={'6'} rowSize={'compact'}>
              <ListItemAction>
                <Radio
                  value="banana"
                  isSelected={selectedKeys.has(`6`)}
                  inputProps={{
                    onClick: (e) => {
                      e.stopPropagation();
                      setSelectedKeys(new Set(['6']));
                    },
                  }}
                />
              </ListItemAction>
              <ListItemText>Option Radio (compact)</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box mb={'3'}>
          <List label={'list'} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ListItem key={'7'} textValue={'Option Checkbox'}>
              <ListItemAction>
                <CheckBox isFilled={false} isChecked={selectedKeys.has(`7`)} />
              </ListItemAction>
              <ListItemText>Option Checkbox</ListItemText>
            </ListItem>
            <ListItem key={'8'} rowSize={'compact'} textValue={'Option Checkbox'}>
              <ListItemAction>
                <CheckBox isFilled={false} isChecked={selectedKeys.has(`8`)} />
              </ListItemAction>
              <ListItemText>Option Checkbox (compact)</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box mb={'3'}>
          <List label={'list'} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ListItem key={'9'} textValue={'Option Switch'}>
              <ListItemText>Option Switch</ListItemText>
              <ListItemAction>
                <Switch isSelected={selectedKeys.has(`9`)} onChange={() => {}} />
              </ListItemAction>
            </ListItem>
            <ListItem key={'10'} rowSize={'compact'} textValue={'Option Switch'}>
              <ListItemText>Option Switch (compact)</ListItemText>
              <ListItemAction>
                <Switch isSelected={selectedKeys.has(`10`)} onChange={() => {}} />
              </ListItemAction>
            </ListItem>
          </List>
        </Box>
        <Box mb={'3'}>
          <List label={'list'} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ListItem key={'11'} textValue={'Option Icon/Avatar'}>
              <ListItemAction>
                <Avatar size={1} color={'blue'} />
              </ListItemAction>
              <ListItemText>Option Icon/Avatar</ListItemText>
            </ListItem>
            <ListItem key={'12'} rowSize={'compact'} textValue={'Option Icon/Avatar'}>
              <ListItemAction>
                <Avatar size={1} color={'blue'} />
              </ListItemAction>
              <ListItemText>Option Icon/Avatar (compact)</ListItemText>
            </ListItem>
          </List>
        </Box>
      </>
    );
  },
  name: 'List Item Compilations',
};

export const DisabledListItem = {
  render: () => {
    return (
      <Box mb={'3'}>
        <List label={'list'} disabledKeys={['1', '2', '3', '4', '5', '6']}>
          <ListItem key={'1'} textValue={'Text Only'}>
            <ListItemText>This text option is disabled</ListItemText>
          </ListItem>
          <ListItem key={'3'} textValue={'Option Switch'}>
            <ListItemText>This Switch Option is disabled</ListItemText>
            <ListItemAction>
              <Switch isDisabled isSelected={false} onChange={() => {}} />
            </ListItemAction>
          </ListItem>
          <ListItem key={'4'} rowSize={'compact'} textValue={'Option Icon/Avatar'}>
            <ListItemAction>
              <Avatar size={1} color={'blue'} />
            </ListItemAction>
            <ListItemText>This Avatar Option is disabled</ListItemText>
          </ListItem>
          <ListItem key={'5'} textValue={'Option Checkbox'}>
            <ListItemAction>
              <CheckBox isDisabled isFilled={false} />
            </ListItemAction>
            <ListItemText>This Checkbox Option is disabled</ListItemText>
          </ListItem>
          <ListItem key={'6'}>
            <ListItemAction>
              <Radio value="6" isDisabled />
            </ListItemAction>
            <ListItemText>This Radio Option is disabled</ListItemText>
          </ListItem>
        </List>
      </Box>
    );
  },
  name: 'Disabled ListItem',
};
