import React, { FC, useState } from 'react';

import TextField from '../TextField';
import TopAppBar from '../TopAppBar';
import { TopAppBarProps } from '../TopAppBar/TopAppBar.types';

interface Props extends TopAppBarProps {
  hasLogo?: boolean;
  hasAdditionalTools?: boolean;
  hasSearchHandler?: boolean;
}

export const DEFAULT_USER_MENU = {
  userName: 'Tom Cruise',
  onSelect: (selectedItem: string) => {
    alert(selectedItem);
  },
  items: ['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout'],
  userAvatar: { src: 'https://mui.com/static/images/avatar/1.jpg', letter: 'PV' },
  color: 'darkGrey-600',
};

const DEFAULT_ADDITIONAL_TOOLS = (
  <>
    <TextField label={'Label'} />
    <TextField label={'Label'} />
    <TextField label={'Label'} />
  </>
);

const DEFAULT_ON_CLICK = () => {
  alert('Toggles a menu!');
};

const TopAppBarShowcase: FC<Props> = ({
  hasLogo = false,
  hasAdditionalTools = false,
  hasSearchHandler = false,
  additionalTools = DEFAULT_ADDITIONAL_TOOLS,
  userMenu = DEFAULT_USER_MENU,
  onMenuIconClick = DEFAULT_ON_CLICK,
  isSearchDisabled = false,
  isDark = false,
}) => {
  const [state, setState] = useState('');
  const logoIcon = hasLogo && (
    <img src={'https://cdn.orfium.com/dist/0c5279a27dfc65b6b41b52634cbe7b80.svg'} alt={'logo'} />
  );

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event?.target?.value);
  };

  return (
    <>
      <TopAppBar
        isDark={isDark}
        logoIcon={logoIcon || undefined}
        onMenuIconClick={onMenuIconClick}
        userMenu={userMenu}
        additionalTools={hasAdditionalTools ? additionalTools : []}
        onSearchHandler={hasSearchHandler ? onSearchHandler : undefined}
        isSearchDisabled={isSearchDisabled}
      />
      {hasSearchHandler && <div style={{ marginTop: 50 }}>Search value: {state}</div>}
    </>
  );
};

export default TopAppBarShowcase;
