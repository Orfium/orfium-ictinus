/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
// import { buttonSpanStyle, menuStyle } from './Menu.style';
import useTheme from 'hooks/useTheme';
import Button from 'components/Button';
import Icon from '../Icon';
import { EventProps } from 'utils/common';
import ClickAwayListener from 'components/utils/ClickAwayListener';
import { rem, darken } from 'polished';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';

export type Props = {
  /** Items that are being declared as menu options */
  items: string[];
  /** Returns the items selected on the menu */
  selectedItem: string | null;
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: string) => void;
  /** The text of the button to show - defaults to "More" */
  buttonText: React.ReactNode;
  /** Menu position when open */
  menuPosition?: 'left' | 'right';
  /** Indicator to show dots icon */
  showOptionIcon?: boolean;
  /** The type of the button - defaults to "primary" */
  buttonType?: AcceptedColorComponentTypes;
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
                name={'dotsVertical'}
                color={buttonType === ('primary' || 'secondary') ? 'dark' : 'light'}
              />
            ) : null
          }
        >
          <span>{buttonText}</span>
        </Button>
        {open && (
          <div
            css={css`
              max-height: 400px;
              overflow-y: scroll;
              position: absolute;
              top: ${rem(48)};
              left: ${menuPosition === 'left' ? 0 : 'initial'};
              right 0;
              width: ${rem(148)};
              height: auto;
              background-color: #fff;
              box-shadow: 0px 0px ${rem(16)} grey;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              text-align: center;
              border-radius: ${rem(4)};
              z-index: 1;

              & > button {
                padding: ${rem(8)} 0;
                height: ${rem(48)};
                margin-left: 0;
                font-size: ${theme.typography.fontSizes['14']};
              }

              & > button:hover {
                background-color: ${darken(0.05, '#fff')};
              }
            `}
          >
            {items.map((option, index) => (
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
