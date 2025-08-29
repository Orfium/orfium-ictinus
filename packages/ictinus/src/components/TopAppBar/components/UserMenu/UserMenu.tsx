import type { FC } from 'react';
import { useRef, useState } from 'react';
import React from 'react';

import Button from '../../../Button';
import { ListItem, ListItemText } from '../../../List';
import Menu from '../../../Menu';

export type UserMenuProps = {
  items: string[];
  userName: string;
  userAvatar: { src: string; letter: string };
  onSelect: (selectedItem: string | number) => void;
};

const UserMenu: FC<UserMenuProps> = ({ items, userAvatar, userName, onSelect }) => {
  const [isBtnOpen, setBtnOpen] = React.useState<boolean>(false);
  const btnRef = useRef(null);
  const handleBtnClick = () => {
    setBtnOpen((isOpen) => !isOpen);
  };
  const [selectedKeys, setSelectedKeys] = useState(new Set<string>([]));

  return (
    <>
      <Button
        avatar={userAvatar}
        iconRightName="chevronDown"
        ref={btnRef}
        aria-label="Menu"
        dataTestId="userMenu"
        type="tertiary"
        onClick={handleBtnClick}
        aria-controls={isBtnOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isBtnOpen ? 'true' : undefined}
      >
        {userName}
      </Button>
      <Menu
        triggerRef={btnRef}
        isOpen={isBtnOpen}
        onClose={handleBtnClick}
        selectedKeys={selectedKeys}
        rowSize="normal"
        onSelectionChange={setSelectedKeys}
        onAction={onSelect}
      >
        {items.map((item) => (
          <ListItem key={item} parentType="Menu">
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </Menu>
    </>
  );
};

export default UserMenu;
