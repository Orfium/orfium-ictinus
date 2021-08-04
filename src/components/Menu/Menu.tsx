import useTheme from 'hooks/useTheme';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import isEmpty from 'lodash/isEmpty';
import * as React from 'react';
import { pickTextColorFromSwatches } from 'theme/palette';
import { EventProps } from 'utils/common';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';

import Avatar from '../Avatar';
import Button from '../Button';
import { defineBackgroundColor } from '../Button/utils';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import ClickAwayListener from '../utils/ClickAwayListener';
import { optionsStyle, MenuPositionAllowed } from '../utils/DropdownOptions';
import { wrapperStyle } from './Menu.style';
import List from 'components/List';

export type Props = {
  /** the color of the button based on our colors eg. red-400 */
  color?: string;
  /** Items that are being declared as menu options */
  items?: string[];
  /** This property define the size of the button. Defaults to 'md' */
  size?: 'lg' | 'md' | 'sm';
  /** Property indicating if the component is filled with a color based on the type */
  filled?: boolean;
  /** Returns the items selected on the menu */
  selectedItem?: string | null;
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: string) => void;
  /** The text of the button to show - defaults to "More" */
  buttonText: React.ReactNode;
  /** Menu position when open */
  menuPosition?: MenuPositionAllowed;
  /** The type of the button - defaults to "primary" */
  buttonType?: AcceptedColorComponentTypes;
  /** The name of the icon on the right area of menu button */
  rightIconName?: AcceptedIconNames;
  /** The name of the icon on the left area of menu button */
  leftIconName?: AcceptedIconNames;
  /** The size of the icon on the menu button */
  iconSize?: number;
  /** You can define the avatar properties here for src or letter if none then the user icon will be displayed if the object is not empty */
  avatar?: {
    src: string;
    letter: string;
    color?: string;
  };
};

export type TestProps = {
  dataTestId?: string;
};

const Menu: React.FC<Props & TestProps & EventProps> = props => {
  const {
    items,
    onSelect,
    color = '',
    size = 'md',
    buttonText = 'More',
    menuPosition = 'left',
    buttonType = 'primary',
    rightIconName,
    filled = true,
    leftIconName,
    iconSize = 16,
    avatar,
    dataTestId,
  } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType(color, buttonType);
  const iconColor = filled
    ? pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade)
    : defineBackgroundColor(theme, calculatedColor, buttonType, true, true);

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={wrapperStyle()} data-testid={dataTestId}>
        <Button
          size={size}
          onClick={() => setOpen(!open)}
          type={buttonType}
          color={color}
          filled={filled}
          iconRight={
            rightIconName ? <Icon name={rightIconName} color={iconColor} size={iconSize} /> : null
          }
          iconLeft={
            !isEmpty(avatar) ? (
              <Avatar size={'xs'} src={avatar?.src} color={avatar?.color} iconName={'user'}>
                {avatar?.letter}
              </Avatar>
            ) : leftIconName ? (
              <Icon name={leftIconName} color={iconColor} size={iconSize} />
            ) : null
          }
        >
          <span>{buttonText}</span>
        </Button>
        {open && (
          <div css={optionsStyle({ menuPosition })(theme)}>
            {items && (
              <List
                data={items}
                rowSize={'small'}
                handleOptionClick={(option: string) => {
                  setOpen(false);
                  onSelect(option);
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
