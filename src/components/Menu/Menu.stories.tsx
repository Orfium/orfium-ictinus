import Menu from '../Menu';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from 'utils/common';
import { ListItem, ListItemAction, ListItemText } from '../List';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import Link from '../Link';
import { CheckBox, Switch } from '../Controls';
import Button from '../Button';
import IconButton from '../IconButton';
import Avatar from '../Avatar';
import MenuItemDivider from './MenuItemDivider';
import { useTheme } from '../../index';
import { fireEvent, within } from '@storybook/testing-library';

const LIST_ITEMS = [
  'Audio Network',
  'Audio Socket',
  'Bensound',
  'Cavendish',
  'De Wolfe',
  'Extreme Music',
  'Jingle Punks',
  'Lens Distortions',
  'Music Vine',
  'Slipstream',
  'SongTradr',
  'Sony Music Publishing',
  'Soundstripe',
  'Video Helper',
  'WMG',
  'Audio Network 2',
  'Audio Socket 2',
  'Bensound 2',
  'Cavendish 2',
  'De Wolfe 2',
  'Extreme Music 2',
  'Jingle Punks 2',
  'Lens Distortions 2',
  'Music Vine 2',
  'Slipstream 2',
  'SongTradr 2',
  'Sony Music Publishing 2',
  'Soundstripe 2',
  'Video Helper 2',
  'WMG 2',
  'Audio Network 3',
  'Audio Socket 3',
  'Bensound 3',
  'Cavendish 3',
  'De Wolfe 3',
  'Extreme Music 3',
  'Jingle Punks 3',
  'Lens Distortions 3',
  'Music Vine 3',
  'Slipstream 3',
  'SongTradr 3',
  'Sony Music Publishing 3',
  'Soundstripe 3',
  'Video Helper 3',
  'WMG 3',
];

export default {
  title: 'Updated Components/Menu',
  component: Menu,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Menu',
        url: `${FIGMA_URL}?node-id=2714%3A1333`,
      },
      {
        type: 'figma',
        name: 'Button',
        url: `${FIGMA_URL}?node-id=574%3A7239`,
      },
    ],
    chromatic: { delay: 400 },
    controls: { disable: true },
  },
};

export const MenuTriggers = {
  render: () => {
    const factory = useCallback(() => {
      const [isBtnOpen, setBtnOpen] = React.useState<boolean>(false);
      const btnRef = useRef(null);
      const handleBtnClick = (e) => {
        e?.preventDefault && e?.preventDefault();
        setBtnOpen((state) => !state);
      };
      const [selectedKeys, setSelectedKeys] = useState(new Set<string>([]));

      return { isBtnOpen, setBtnOpen, btnRef, handleBtnClick, selectedKeys, setSelectedKeys };
    }, []);
    const btn1 = factory();
    const btn2 = factory();
    const btn3 = factory();

    return (
      <Stack height={400}>
        <IconButton
          iconName={'menu'}
          ref={btn1.btnRef}
          aria-label="Menu"
          onClick={btn1.handleBtnClick}
          aria-controls={btn1.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn1.isBtnOpen ? 'true' : undefined}
        >
          button with menu
        </IconButton>
        <Menu
          triggerRef={btn1.btnRef}
          isOpen={btn1.isBtnOpen}
          onClose={btn1.handleBtnClick}
          disabledKeys={new Set(['paste'])}
          selectedKeys={btn1.selectedKeys}
          rowSize={'compact'}
          onSelectionChange={btn1.setSelectedKeys}
        >
          <ListItem key={'copy'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText>copy</ListItemText>
          </ListItem>
          <ListItem key={'helper_text'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText description={'helper text'}>clone</ListItemText>
          </ListItem>
          <ListItem key={'9'} textValue={'Option Switch'} parentType={'Menu'}>
            <ListItemText>Option Switch</ListItemText>
            <ListItemAction>
              <Switch
                isSelected={btn1.selectedKeys?.has('9')}
                onChange={(isSelected) => {
                  btn1.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    if (isSelected) {
                      return newState.add('9');
                    }
                    newState.delete('9');
                    return newState;
                  });
                }}
              />
            </ListItemAction>
          </ListItem>
          <ListItem key={'11'} textValue={'Option Icon/Avatar'} parentType={'Menu'}>
            <ListItemAction>
              <Avatar size={1} color={'blue'} />
            </ListItemAction>
            <ListItemText>Option Icon/Avatar</ListItemText>
          </ListItem>
          <ListItem key={'checkbox_option'} parentType={'Menu'}>
            <ListItemAction>
              <CheckBox
                value="checkbox_option"
                isSelected={btn1.selectedKeys?.has('checkbox_option')}
                onChange={(isSelected) => {
                  btn1.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    console.log({ isSelected, newState });
                    if (isSelected) {
                      return newState.add('checkbox_option');
                    }
                    newState.delete('checkbox_option');
                    return newState;
                  });
                }}
              >
                checkbox option
              </CheckBox>
            </ListItemAction>
          </ListItem>
        </Menu>

        <Button
          ref={btn2.btnRef}
          aria-label="Menu"
          onClick={btn2.handleBtnClick}
          aria-controls={btn2.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn2.isBtnOpen ? 'true' : undefined}
        >
          button with menu
        </Button>
        <Menu
          triggerRef={btn2.btnRef}
          isOpen={btn2.isBtnOpen}
          onClose={btn2.handleBtnClick}
          disabledKeys={new Set(['paste'])}
          selectedKeys={btn2.selectedKeys}
          rowSize={'compact'}
          onSelectionChange={btn2.setSelectedKeys}
        >
          <ListItem key={'copy'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText>copy</ListItemText>
          </ListItem>
          <ListItem key={'helper_text'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText description={'helper text'}>clone</ListItemText>
          </ListItem>
          <ListItem key={'9'} textValue={'Option Switch'} parentType={'Menu'}>
            <ListItemText>Option Switch</ListItemText>
            <ListItemAction>
              <Switch
                isSelected={btn2.selectedKeys?.has('9')}
                onChange={(isSelected) => {
                  btn2.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    if (isSelected) {
                      return newState.add('9');
                    }
                    newState.delete('9');
                    return newState;
                  });
                }}
              />
            </ListItemAction>
          </ListItem>
          <ListItem key={'checkbox_option'} parentType={'Menu'}>
            <ListItemAction>
              <CheckBox
                value="checkbox_option"
                isSelected={btn2.selectedKeys?.has('checkbox_option')}
                onChange={(isSelected) => {
                  btn2.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    console.log({ isSelected, newState });
                    if (isSelected) {
                      return newState.add('checkbox_option');
                    }
                    newState.delete('checkbox_option');
                    return newState;
                  });
                }}
              >
                checkbox option
              </CheckBox>
            </ListItemAction>
          </ListItem>
        </Menu>

        <Link
          ref={btn3.btnRef}
          aria-label="Menu"
          href={'#'}
          onClick={btn3.handleBtnClick}
          aria-controls={btn3.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn3.isBtnOpen ? 'true' : undefined}
        >
          link with menu
        </Link>
        <Menu
          triggerRef={btn3.btnRef}
          isOpen={btn3.isBtnOpen}
          onClose={btn3.handleBtnClick}
          disabledKeys={new Set(['paste'])}
          selectedKeys={btn3.selectedKeys}
          rowSize={'compact'}
          onSelectionChange={btn3.setSelectedKeys}
        >
          <ListItem key={'copy'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText>copy</ListItemText>
          </ListItem>
          <ListItem key={'helper_text'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText description={'helper text'}>clone</ListItemText>
          </ListItem>
          <ListItem key={'9'} textValue={'Option Switch'} parentType={'Menu'}>
            <ListItemText>Option Switch</ListItemText>
            <ListItemAction>
              <Switch
                isSelected={btn3.selectedKeys?.has('9')}
                onChange={(isSelected) => {
                  btn3.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    if (isSelected) {
                      return newState.add('9');
                    }
                    newState.delete('9');
                    return newState;
                  });
                }}
              />
            </ListItemAction>
          </ListItem>
          <ListItem key={'checkbox_option'} parentType={'Menu'}>
            <ListItemAction>
              <CheckBox
                value="checkbox_option"
                isSelected={btn3.selectedKeys?.has('checkbox_option')}
                onChange={(isSelected) => {
                  btn3.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    console.log({ isSelected, newState });
                    if (isSelected) {
                      return newState.add('checkbox_option');
                    }
                    newState.delete('checkbox_option');
                    return newState;
                  });
                }}
              >
                checkbox option
              </CheckBox>
            </ListItemAction>
          </ListItem>
        </Menu>
      </Stack>
    );
  },
  name: 'Menu',
  autoplay: true,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByTestId('button');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    buttons.forEach((button) => {
      fireEvent.click(button);
    });
  },
};

export const MenuComponents = {
  render: () => {
    const factory = useCallback(() => {
      const [isBtnOpen, setBtnOpen] = React.useState<boolean>(false);
      const btnRef = useRef(null);
      const handleBtnClick = (e) => {
        e?.preventDefault && e?.preventDefault();
        setBtnOpen((state) => !state);
      };
      const [selectedKeys, setSelectedKeys] = useState(new Set<string>([]));

      return { isBtnOpen, setBtnOpen, btnRef, handleBtnClick, selectedKeys, setSelectedKeys };
    }, []);
    const btn1 = factory();
    const btn2 = factory();

    return (
      <Stack height={400}>
        <Button
          ref={btn1.btnRef}
          aria-label="Menu"
          onClick={btn1.handleBtnClick}
          aria-controls={btn1.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn1.isBtnOpen ? 'true' : undefined}
        >
          button for normal menu
        </Button>
        <Menu
          triggerRef={btn1.btnRef}
          isOpen={btn1.isBtnOpen}
          onClose={btn1.handleBtnClick}
          disabledKeys={new Set(['paste'])}
          selectedKeys={btn1.selectedKeys}
          rowSize={'normal'}
          onSelectionChange={btn1.setSelectedKeys}
        >
          <ListItem key={'copy'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText>copy</ListItemText>
          </ListItem>
          <ListItem key={'helper_text'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText description={'helper text'}>clone</ListItemText>
          </ListItem>
          <ListItem key={'9'} textValue={'Option Switch'} parentType={'Menu'}>
            <ListItemText>Option Switch</ListItemText>
            <ListItemAction>
              <Switch
                isSelected={btn1.selectedKeys?.has('9')}
                onChange={(isSelected) => {
                  btn1.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    if (isSelected) {
                      return newState.add('9');
                    }
                    newState.delete('9');
                    return newState;
                  });
                }}
              />
            </ListItemAction>
          </ListItem>
          <ListItem key={'11'} textValue={'Option Icon/Avatar'} parentType={'Menu'}>
            <ListItemAction>
              <Avatar size={1} color={'blue'} />
            </ListItemAction>
            <ListItemText>Option Icon/Avatar</ListItemText>
          </ListItem>
          <ListItem key={'checkbox_option'} parentType={'Menu'}>
            <ListItemAction>
              <CheckBox
                value="checkbox_option"
                isSelected={btn1.selectedKeys?.has('checkbox_option')}
                onChange={(isSelected) => {
                  btn1.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    console.log({ isSelected, newState });
                    if (isSelected) {
                      return newState.add('checkbox_option');
                    }
                    newState.delete('checkbox_option');
                    return newState;
                  });
                }}
              >
                checkbox option
              </CheckBox>
            </ListItemAction>
          </ListItem>
        </Menu>
        <Button
          ref={btn2.btnRef}
          aria-label="Menu"
          onClick={btn2.handleBtnClick}
          aria-controls={btn2.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn2.isBtnOpen ? 'true' : undefined}
        >
          button for compact menu
        </Button>
        <Menu
          triggerRef={btn2.btnRef}
          isOpen={btn2.isBtnOpen}
          onClose={btn2.handleBtnClick}
          disabledKeys={new Set(['paste'])}
          selectedKeys={btn2.selectedKeys}
          rowSize={'compact'}
          onSelectionChange={btn2.setSelectedKeys}
        >
          <ListItem key={'copy'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText>copy</ListItemText>
          </ListItem>
          <ListItem key={'helper_text'} textValue={'copy'} parentType={'Menu'}>
            <ListItemText description={'helper text'}>clone</ListItemText>
          </ListItem>
          <ListItem key={'9'} textValue={'Option Switch'} parentType={'Menu'}>
            <ListItemText>Option Switch</ListItemText>
            <ListItemAction>
              <Switch
                isSelected={btn2.selectedKeys?.has('9')}
                onChange={(isSelected) => {
                  btn2.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    if (isSelected) {
                      return newState.add('9');
                    }
                    newState.delete('9');
                    return newState;
                  });
                }}
              />
            </ListItemAction>
          </ListItem>
          <ListItem key={'11'} textValue={'Option Icon/Avatar'} parentType={'Menu'}>
            <ListItemAction>
              <Avatar size={1} color={'blue'} />
            </ListItemAction>
            <ListItemText>Option Icon/Avatar</ListItemText>
          </ListItem>
          <ListItem key={'checkbox_option'} parentType={'Menu'}>
            <ListItemAction>
              <CheckBox
                value="checkbox_option"
                isSelected={btn2.selectedKeys?.has('checkbox_option')}
                onChange={(isSelected) => {
                  btn2.setSelectedKeys((state) => {
                    const newState = new Set(state);
                    console.log({ isSelected, newState });
                    if (isSelected) {
                      return newState.add('checkbox_option');
                    }
                    newState.delete('checkbox_option');
                    return newState;
                  });
                }}
              >
                checkbox option
              </CheckBox>
            </ListItemAction>
          </ListItem>
        </Menu>
      </Stack>
    );
  },
  name: 'Menu Components',
  autoplay: true,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByTestId('button');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    buttons.forEach((button) => {
      fireEvent.click(button);
    });
  },
};

export const MenuItemDividerStory = {
  render: () => {
    const factory = useCallback(() => {
      const [isBtnOpen, setBtnOpen] = React.useState<boolean>(false);
      const btnRef = useRef(null);
      const handleBtnClick = (e) => {
        e?.preventDefault && e?.preventDefault();
        setBtnOpen((state) => !state);
      };
      const [selectedKeys, setSelectedKeys] = useState(new Set<string>([]));

      return { isBtnOpen, setBtnOpen, btnRef, handleBtnClick, selectedKeys, setSelectedKeys };
    }, []);
    const btn1 = factory();
    const btn2 = factory();
    const theme = useTheme();

    return (
      <Stack height={400}>
        <Button
          ref={btn1.btnRef}
          aria-label="Menu"
          onClick={btn1.handleBtnClick}
          aria-controls={btn1.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn1.isBtnOpen ? 'true' : undefined}
        >
          menu default divider
        </Button>
        <Menu
          triggerRef={btn1.btnRef}
          isOpen={btn1.isBtnOpen}
          onClose={btn1.handleBtnClick}
          disabledKeys={new Set(['paste'])}
          selectedKeys={btn1.selectedKeys}
          rowSize={'normal'}
          onSelectionChange={btn1.setSelectedKeys}
        >
          <ListItem key={'copy'} parentType={'Menu'}>
            <ListItemText>copy</ListItemText>
          </ListItem>
          <MenuItemDivider />
          <ListItem key={'paste'} parentType={'Menu'}>
            <ListItemText>paste</ListItemText>
          </ListItem>
        </Menu>

        <Button
          ref={btn2.btnRef}
          aria-label="Menu"
          onClick={btn2.handleBtnClick}
          aria-controls={btn2.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn2.isBtnOpen ? 'true' : undefined}
          type={'secondary'}
        >
          menu styled divider
        </Button>
        <Menu
          triggerRef={btn2.btnRef}
          isOpen={btn2.isBtnOpen}
          onClose={btn2.handleBtnClick}
          disabledKeys={new Set(['paste'])}
          selectedKeys={btn2.selectedKeys}
          rowSize={'normal'}
          onSelectionChange={btn2.setSelectedKeys}
        >
          <ListItem key={'copy'} parentType={'Menu'}>
            <ListItemText>copy</ListItemText>
          </ListItem>
          <MenuItemDivider
            sx={{
              borderBottomStyle: 'dashed',
              borderBottomColor: theme.tokens.colors.get('borderColor.interactive.active'),
              width: '90%',
            }}
          />
          <ListItem key={'paste'} parentType={'Menu'}>
            <ListItemText>disabled paste</ListItemText>
          </ListItem>
        </Menu>
      </Stack>
    );
  },
  name: 'MenuItemDivider',
  autoplay: true,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByTestId('button');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    buttons.forEach((button) => {
      fireEvent.click(button);
    });
  },
};

export const MenuDisabledKeys = {
  render: () => {
    const factory = useCallback(() => {
      const [isBtnOpen, setBtnOpen] = React.useState<boolean>(false);
      const btnRef = useRef(null);
      const handleBtnClick = (e) => {
        e?.preventDefault && e?.preventDefault();
        setBtnOpen((state) => !state);
      };
      const [selectedKeys, setSelectedKeys] = useState(new Set<string>([]));

      return { isBtnOpen, setBtnOpen, btnRef, handleBtnClick, selectedKeys, setSelectedKeys };
    }, []);
    const btn1 = factory();

    return (
      <Stack height={400}>
        <IconButton
          iconName={'menu'}
          ref={btn1.btnRef}
          aria-label="Menu"
          onClick={btn1.handleBtnClick}
          aria-controls={btn1.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn1.isBtnOpen ? 'true' : undefined}
        >
          menu
        </IconButton>
        <Menu
          triggerRef={btn1.btnRef}
          isOpen={btn1.isBtnOpen}
          onClose={btn1.handleBtnClick}
          disabledKeys={new Set(['paste'])}
          selectedKeys={btn1.selectedKeys}
          rowSize={'normal'}
          onSelectionChange={btn1.setSelectedKeys}
        >
          <ListItem key={'copy'} parentType={'Menu'}>
            <ListItemText>copy</ListItemText>
          </ListItem>
          <MenuItemDivider />
          <ListItem key={'paste'} parentType={'Menu'}>
            <ListItemText>disabled paste</ListItemText>
          </ListItem>
        </Menu>
      </Stack>
    );
  },
  name: 'Menu Disabled Keys',
  autoplay: true,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByTestId('icon-button');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    buttons.forEach((button) => {
      fireEvent.click(button);
    });
  },
};

export const MenuWithCustomListWidthAndHeight = {
  render: () => {
    const factory = useCallback(() => {
      const [isBtnOpen, setBtnOpen] = React.useState<boolean>(false);
      const btnRef = useRef(null);
      const handleBtnClick = (e) => {
        e?.preventDefault && e?.preventDefault();
        setBtnOpen((state) => !state);
      };
      const [selectedKeys, setSelectedKeys] = useState(new Set<string>([]));

      return { isBtnOpen, setBtnOpen, btnRef, handleBtnClick, selectedKeys, setSelectedKeys };
    }, []);
    const btn1 = factory();

    return (
      <Stack height={400}>
        <Button
          ref={btn1.btnRef}
          aria-label="Menu with many options"
          onClick={btn1.handleBtnClick}
          aria-controls={btn1.isBtnOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={btn1.isBtnOpen ? 'true' : undefined}
        >
          Menu with many options
        </Button>
        <Menu
          triggerRef={btn1.btnRef}
          isOpen={btn1.isBtnOpen}
          onClose={btn1.handleBtnClick}
          selectedKeys={btn1.selectedKeys}
          rowSize={'compact'}
          onSelectionChange={btn1.setSelectedKeys}
          sx={{ listProps: { height: 300, width: 190 } }}
        >
          {LIST_ITEMS.map((item) => (
            <ListItem key={item} textValue={item} parentType={'Menu'}>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </Menu>
      </Stack>
    );
  },
  name: 'Menu With Custom List Width And Height',
  autoplay: true,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByTestId('icon-button');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    buttons.forEach((button) => {
      fireEvent.click(button);
    });
  },
};
