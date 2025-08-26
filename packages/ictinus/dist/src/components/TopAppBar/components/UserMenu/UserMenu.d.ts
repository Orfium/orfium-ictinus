import { FC } from 'react';
export type UserMenuProps = {
    items: string[];
    userName: string;
    userAvatar: {
        src: string;
        letter: string;
    };
    onSelect: (selectedItem: string | number) => void;
};
declare const UserMenu: FC<UserMenuProps>;
export default UserMenu;
