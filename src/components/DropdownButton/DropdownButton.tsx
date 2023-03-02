import { ClickEvent } from 'hooks/useLoading';
import useTheme from 'hooks/useTheme';
import React, { useCallback } from 'react';

import {
  buttonSpanStyle,
  iconButtonSpanStyle,
  iconButtonWrapper,
  wrapperStyle,
} from './DropdownButton.style';
import Button from 'components/Button';
import { PrimitiveButtonTypes } from 'components/Button/Button.types';
import IconButton from 'components/IconButton';
import List from 'components/List';
import ClickAwayListener from 'components/utils/ClickAwayListener';
import { MenuPositionAllowed, optionsStyle } from 'components/utils/DropdownOptions';

export type DropdownButtonProps = {
  /** The Dropdown Items' CTA */
  onOptionSelect: (option: string) => void;
  /** The type of the Dropdown Button */
  type?: PrimitiveButtonTypes;
  /** The Button's CTA */
  onButtonClick?: (event: ClickEvent) => void;
  /** The items on the Dropdown List */
  items?: string[];
  /** Dropdown menu position when open */
  menuPosition?: MenuPositionAllowed;
};

const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>((props, ref) => {
  const {
    onButtonClick,
    onOptionSelect,
    menuPosition = 'left',
    items,
    type = 'primary',
    children,
  } = props;

  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const isIconButton = !onButtonClick;

  /** The CTA for the TextButton */
  const handleButtonClick = useCallback(
    (event: ClickEvent) => {
      onButtonClick?.(event);
      setIsOpen(false);
    },
    [onButtonClick]
  );

  /** The CTA for the Options inside the Dropdown */
  const handleOptionClick = useCallback(
    (option: string) => {
      setIsOpen(false);
      onOptionSelect(option);
    },
    [onOptionSelect]
  );

  /** The CTA for the IconButton and the ClickAwayListener */
  const handleIconButtonClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <ClickAwayListener onClick={() => setIsOpen(false)}>
      <div css={wrapperStyle({ type, isIconButton })}>
        {isIconButton ? (
          <div css={iconButtonWrapper({ type, isOpen })}>
            <IconButton type={type} name="dotsVertical" onClick={handleIconButtonClick} />
          </div>
        ) : (
          <div css={{ display: 'flex' }}>
            <div css={buttonSpanStyle({ type })}>
              <Button type={type} ref={ref} onClick={handleButtonClick}>
                {children}
              </Button>
            </div>
            <div css={iconButtonSpanStyle({ isOpen, type })}>
              <IconButton
                type={type}
                name="triangleDown"
                shape="square"
                onClick={handleIconButtonClick}
              />
            </div>
          </div>
        )}
        {isOpen && (
          <div css={optionsStyle({ menuPosition })(theme)}>
            {items && <List data={items} rowSize={'small'} handleOptionClick={handleOptionClick} />}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
