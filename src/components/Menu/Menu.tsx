/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import useTheme from '../../hooks/useTheme';
import { EventProps } from '../../utils/common';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import Button from '../Button';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import ClickAwayListener from '../utils/ClickAwayListener';
// import { buttonSpanStyle, menuStyle } from './Menu.style';
import { MenuPositionAllowed, optionsStyle } from './Menu.style';

export type Props = {
  /** Items that are being declared as menu options */
  items?: string[];
  /** Returns the items selected on the menu */
  selectedItem: string | null;
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: string) => void;
  /** The text of the button to show - defaults to "More" */
  buttonText: React.ReactNode;
  /** Menu position when open */
  menuPosition?: MenuPositionAllowed;
  /** The type of the button - defaults to "primary" */
  buttonType?: AcceptedColorComponentTypes;
  /** The name of the icon on the menu button */
  menuIconName?: AcceptedIconNames;
  /** The size of the icon on the menu button */
  menuIconSize?: number;
};

export type TestProps = {
  dataTestId?: string;
};

const Menu: React.FC<Props & TestProps & EventProps> = props => {
  const {
    items,
    onSelect,
    buttonText = 'More',
    menuPosition = 'left',
    buttonType = 'primary',
    menuIconName,
    menuIconSize = 16,
  } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={{ position: 'relative', display: 'inline-block' }}>
        <Button
          onClick={() => setOpen(!open)}
          type={buttonType}
          iconAlign={menuIconName ? 'right' : undefined}
          icon={
            menuIconName ? (
              <Icon
                name={menuIconName}
                color={buttonType === ('primary' || 'secondary') ? 'dark' : 'light'}
                size={menuIconSize}
              />
            ) : null
          }
        >
          <span>{buttonText}</span>
        </Button>
        {open && (
          <div css={optionsStyle({ menuPosition })(theme)}>
            {items &&
              items.map((option, index) => (
                <button
                  css={{
                    backgroundColor: theme.palette.white,
                    border: 0,
                  }}
                  key={`${option}-${index}`}
                  onClick={() => {
                    setOpen(false);
                    onSelect(option);
                  }}
                >
                  {option}
                </button>
              ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Menu;
