import React, { FC, useState } from 'react';
import TopNavBar from '../TopNavBar';
import TextField from '../TextField';
import { TopNavBarProps } from '../TopNavBar/TopNavBar.types';

interface Props extends TopNavBarProps {
  withLogo?: boolean;
  withAdditionalTools?: boolean;
  provideSearchHandler?: boolean;
}

export const DEFAULT_USER_MENU = {
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
  </>
);

const DEFAULT_ON_CLICK = () => {
  alert('Toggles a menu!');
};

const TopNavBarShowcase: FC<Props> = ({
  withLogo = false,
  withAdditionalTools = false,
  provideSearchHandler = false,
  additionalTools = DEFAULT_ADDITIONAL_TOOLS,
  userMenu = DEFAULT_USER_MENU,
  onMenuIconClick = DEFAULT_ON_CLICK,
  isSearchDisabled = false,
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
      <TopNavBar
        dark={dark}
        logoIcon={logoIcon || undefined}
        onMenuIconClick={onMenuIconClick}
        userMenu={userMenu}
        additionalTools={withAdditionalTools ? additionalTools : []}
        onSearchHandler={provideSearchHandler ? onSearchHandler : undefined}
        isSearchDisabled={isSearchDisabled}
      />
      {provideSearchHandler && <div style={{ marginTop: 50 }}>Search value: {state}</div>}
    </>
  );
};

export default TopNavBarShowcase;
