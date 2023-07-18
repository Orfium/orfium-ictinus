import useTheme from 'hooks/useTheme';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import { isEmpty } from 'lodash';
import * as React from 'react';
import { EventProps } from 'utils/common';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';

import { wrapperStyle } from './Menu.style';
import { TestProps } from '../../utils/types';
import Button from '../Button';
import { defineBackgroundColor } from '../Button/utils';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import ClickAwayListener from '../utils/ClickAwayListener';
import { optionsStyle, MenuPositionAllowed } from '../utils/DropdownOptions';
import Avatar, { AvatarColors } from 'components/Avatar';
import { ButtonTypes } from 'components/Button/Button.types';
import List from 'components/List';

export type MenuProps = {
  /** the color of the button based on our colors eg. red-500 */
  color?: string;
  /** Items that are being declared as menu options */
  items?: string[];
  /** Returns the items selected on the menu */
  selectedItem?: string | number | null;
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: string | number) => void;
  /** The text of the button to show - defaults to "More" */
  buttonText: React.ReactNode;
  /** Define if the button is in disabled state */
  isDisabled?: boolean;
  /** Menu position when open */
  menuPosition?: MenuPositionAllowed;
  /** The type of the button - defaults to "primary" */
  buttonType?: ButtonTypes;
  /** The name of the icon on the right area of menu button */
  rightIconName?: AcceptedIconNames;
  /** The name of the icon on the left area of menu button */
  leftIconName?: AcceptedIconNames;
  /** You can define the avatar properties here for src or letter if none then the user icon will be displayed if the object is not empty */
  avatar?: {
    src: string;
    letter: string;
    color?: AvatarColors;
  };
} & TestProps &
  EventProps;

const Menu: React.FC<MenuProps> = (props) => {
  const {
    items,
    onSelect,
    buttonText = 'More',
    menuPosition = 'left',
    buttonType = 'primary',
    rightIconName,
    isDisabled = false,
    leftIconName,
    avatar,
    dataTestId,
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <ClickAwayListener onClick={() => setIsOpen(false)}>
      <div css={wrapperStyle()} data-testid={dataTestId}>
        <Button
          type={buttonType}
          onClick={() => setIsOpen(!isOpen)}
          isDisabled={isDisabled}
          iconRightName={rightIconName}
          iconLeftName={leftIconName}
          avatar={!isEmpty(avatar) ? { src: avatar?.src, label: avatar?.letter } : undefined}
        >
          <span>{buttonText}</span>
        </Button>
        {isOpen && (
          <div css={optionsStyle({ menuPosition })(theme)}>
            {items && (
              <List
                data={items.map((item) => ({ value: item, label: item }))}
                rowSize={'small'}
                handleOptionClick={(option) => {
                  setIsOpen(false);
                  onSelect(option.value);
                }}
              />
            )}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Menu;
