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
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';

export type Props = {
  items: string[];
  selectedItem: string | null;
  onSelect: (option: string) => void;
  buttonText: React.ReactNode;
  menuPosition?: 'left' | 'right';
  optionIcon?: boolean;
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
    optionIcon = false,
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
          iconAlign={optionIcon ? 'right' : undefined}
          icon={optionIcon ? <Icon name={'dotsVertical'} color={'white'} /> : null}
        >
          <span>{buttonText}</span>
        </Button>
        {open && (
          <div
            css={css`
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
