/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import useTheme from '../../hooks/useTheme';
import { EventProps } from '../../utils/common';
import { AcceptedColorComponentTypes, calculateActualColorFromComponentProp } from '../../utils/themeFunctions';
import Button from '../Button';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import ClickAwayListener from '../utils/ClickAwayListener';
import { MenuPositionAllowed, optionsStyle } from './Menu.style';
import { pickTextColorFromSwatches } from '../../theme/palette';

export type Props = {
  /** the color of the button based on our colors eg. red-400 */
  color?: string;
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
  /** The name of the icon on the right area of menu button */
  rightIconName?: AcceptedIconNames;
  /** The name of the icon on the left area of menu button */
  leftIconName?: AcceptedIconNames;
  /** The size of the icon on the menu button */
  iconSize?: number;
};

export type TestProps = {
  dataTestId?: string;
};

const Menu: React.FC<Props & TestProps & EventProps> = props => {
  const {
    items,
    onSelect,
    color = '',
    buttonText = 'More',
    menuPosition = 'left',
    buttonType = 'primary',
    rightIconName,
    leftIconName,
    iconSize = 16,
  } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const calculatedColor = color ? calculateActualColorFromComponentProp(color) : undefined;

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={{ position: 'relative', display: 'inline-block' }}>
        <Button
          onClick={() => setOpen(!open)}
          type={buttonType}
          color={color}
          iconRight={
            rightIconName ? (
              <Icon
                name={rightIconName}
                color={
                  calculatedColor
                    ? pickTextColorFromSwatches(calculatedColor?.color, calculatedColor?.shade)
                    : buttonType === ('primary' || 'secondary')
                    ? 'black'
                    : 'white'
                }
                size={iconSize}
              />
            ) : null
          }
          iconLeft={
            leftIconName ? (
              <Icon
                name={leftIconName}
                color={
                  calculatedColor
                    ? pickTextColorFromSwatches(calculatedColor?.color, calculatedColor?.shade)
                    : buttonType === ('primary' || 'secondary')
                    ? 'black'
                    : 'white'
                }
                size={iconSize}
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
