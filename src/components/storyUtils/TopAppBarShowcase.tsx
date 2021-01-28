import React, { FC, useState } from 'react';
import TopAppBar from '../TopAppBar';
import TextField from '../TextField';
import { TopAppBarProps } from '../TopAppBar/TopAppBar.types';

interface Props extends TopAppBarProps {
  withLogo: boolean;
  withAdditionalTools: boolean;
  provideSearchHandler: boolean;
}

const DEFAULT_USER_MENU = {
  userName: 'Tom Cruise',
  onSelect: (selectedItem: string) => {
    alert(selectedItem);
  },
  items: ['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout'],
  userAvatar: { src: 'https://material-ui.com/static/images/avatar/1.jpg', letter: 'PV' },
  color: 'darkGray-600',
};

const DEFAULT_ADDITIONAL_TOOLS = (
  <>
    <TextField />
    <TextField />
    <TextField />
    <TextField />
  </>
);

const DEFAULT_ON_CLICK = () => {
  alert('Toggles a menu!');
};

const TopAppBarShowcase: FC<Props> = ({
  withLogo = false,
  withAdditionalTools = false,
  provideSearchHandler = false,
  additionalTools = DEFAULT_ADDITIONAL_TOOLS,
  userMenu = DEFAULT_USER_MENU,
  onMenuIconClick = DEFAULT_ON_CLICK,
  dark = false,
}) => {
  const [state, setState] = useState('');
  const logoIcon = withLogo && (
    <img src={'https://cdn.orfium.com/dist/0c5279a27dfc65b6b41b52634cbe7b80.svg'} alt={'logo'} />
  );

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event?.target?.value);
  };

  return (
    <>
      <TopAppBar
        dark={dark}
        logoIcon={logoIcon || undefined}
        onMenuIconClick={onMenuIconClick}
        userMenu={userMenu}
        additionalTools={withAdditionalTools ? additionalTools : []}
        onSearchHandler={provideSearchHandler ? onSearchHandler : undefined}
      />
      {provideSearchHandler && <div style={{ marginTop: 50 }}>Search value: {state}</div>}
    </>
  );
};

export default TopAppBarShowcase;
