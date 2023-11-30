import type { ClickEvent } from 'hooks/useLoading';
import useTheme from 'hooks/useTheme';
import { head } from 'lodash';
import React, { useCallback } from 'react';
import { rem } from 'theme/utils';
import type { ComponentSizes, TestProps } from 'utils/types';

import {
  buttonSpanStyle,
  iconButtonSpanStyle,
  iconButtonWrapper,
  wrapperStyle,
} from './DropdownButton.style';
import { generateTestDataId } from '../../utils/helpers';
import Button from 'components/Button';
import type { PrimitiveButtonTypes } from 'components/Button/Button.types';
import IconButton from 'components/IconButton';
import type { ListSelection } from 'components/List';
import List, { ListItem, ListItemText } from 'components/List';
import ClickAwayListener from 'components/utils/ClickAwayListener';
import type { MenuPositionAllowed} from 'components/utils/DropdownOptions';
import { optionsStyle } from 'components/utils/DropdownOptions';

export type DropdownButtonProps = TestProps & {
  /** The size of the DropdownButton */
  size?: ComponentSizes;
  /** The Dropdown Items' CTA */
  onOptionSelect: (option: string | number) => void;
  /** The type of the Dropdown Button */
  type?: PrimitiveButtonTypes;
  /** The Button's CTA */
  onButtonClick?: (event: ClickEvent) => void;
  /** The items on the Dropdown List */
  items?: string[];
  /** Dropdown menu position when open */
  menuPosition?: MenuPositionAllowed;
  children?: React.ReactNode;
};

const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>((props, ref) => {
  const {
    size = 'normal',
    onButtonClick,
    onOptionSelect,
    menuPosition = 'left',
    items,
    type = 'primary',
    dataTestPrefixId = '',
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
    (option: string | number) => {
      setIsOpen(false);
      onOptionSelect(option);
    },
    [onOptionSelect]
  );

  /** The CTA for the IconButton and the ClickAwayListener */
  const handleIconButtonClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const onSelectionChange = useCallback(
    (keys: ListSelection) => {
      setIsOpen(false);
      const keyFound = String(head(Array.from(keys)));
      const optionFound = items?.find((o) => o === keyFound);
      optionFound && handleOptionClick(optionFound);
    },
    [handleOptionClick, items]
  );

  return (
    <ClickAwayListener onClick={() => setIsOpen(false)}>
      <div css={wrapperStyle()}>
        {isIconButton ? (
          <div css={iconButtonWrapper({ type, isOpen })}>
            <IconButton
              type={type}
              size={size}
              name="moreOptions"
              onClick={handleIconButtonClick}
              dataTestPrefixId={generateTestDataId('icon-dropdown', dataTestPrefixId)}
            />
          </div>
        ) : (
          <div css={{ display: 'flex' }}>
            <div css={buttonSpanStyle({ type })}>
              <Button
                type={type}
                size={size}
                ref={ref}
                onClick={handleButtonClick}
                dataTestPrefixId={generateTestDataId('dropdown', dataTestPrefixId)}
              >
                {children}
              </Button>
            </div>
            <div css={iconButtonSpanStyle({ isOpen, type })}>
              <IconButton
                type={type}
                size={size}
                name="triangleDown"
                shape="square"
                onClick={handleIconButtonClick}
                dataTestPrefixId={generateTestDataId('dropdown-toggle', dataTestPrefixId)}
              />
            </div>
          </div>
        )}
        {isOpen && (
          <div
            css={optionsStyle({
              menuPosition,
              sx: { top: size === 'compact' ? rem(34) : rem(42) },
            })(theme)}
          >
            {items && (
              <List
                label="dropdown-button"
                onSelectionChange={onSelectionChange}
                dataTestId={generateTestDataId('dropdown-button-options', dataTestPrefixId)}
              >
                {items.map((item) => (
                  <ListItem key={item} rowSize="compact">
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
