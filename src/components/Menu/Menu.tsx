/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
// import { buttonSpanStyle, menuStyle } from './Menu.style';
import { optionsStyle } from './Menu.style';
import useTheme from 'hooks/useTheme';
import Button from 'components/Button';
import Icon from '../Icon';
import { EventProps } from 'utils/common';
import ClickAwayListener from 'components/utils/ClickAwayListener';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';
import { AcceptedIconNames } from '../Icon/types';
import { MenuPositionAllowed } from './Menu.style';

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
  /** Indicator to show dots icon */
  showOptionIcon?: boolean;
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
    showOptionIcon = false,
    buttonType = 'primary',
    menuIconName = 'dotsVertical',
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
          iconAlign={showOptionIcon ? 'right' : undefined}
          icon={
            showOptionIcon ? (
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
                    backgroundColor: '#fff',
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
