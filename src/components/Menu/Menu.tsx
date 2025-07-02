import * as React from 'react';
import { MenuTrigger, Popover } from 'react-aria-components';
import type { TestProps } from 'utils/types';

import type { ListRowSize } from 'components/List';
import { listStyle } from '../List/List.style';
import { MenuItemWrapper, MenuWrapper, popoverStyle } from './Menu.style';
import MenuItemDivider from './MenuItemDivider';

export type MenuProps = {
  children?: React.ReactNode[] | React.ReactNode;
  /** A callback that is being triggered when selection change */
  onSelectionChange?: (e: Set<string>) => any;
  /** The keys of the items that are disabled */
  disabledKeys?: Set<string>;
  /** The keys of the items that are selected */
  selectedKeys?: Set<string>;
  /** The size of the row */
  rowSize?: ListRowSize;
  /** The ref of the trigger element */
  triggerRef: React.RefObject<any>;
  /** Define if the menu is open or not */
  isOpen?: boolean;
  /** A callback that is being triggered when the menu is closed */
  onClose?: (e: any) => any;
  /** A callback that is being triggered when the menu is acting */
  onAction?: (item: string) => any;
  /** The selection mode of the menu */
  selectionMode?: 'single' | 'multiple';
  sx?: { listProps?: { maxHeight?: number; width?: number } };
} & TestProps;

const Menu: React.FC<MenuProps> = ({
  selectionMode = 'single',
  rowSize = 'normal',
  children,
  onSelectionChange = () => {},
  disabledKeys = new Set(),
  selectedKeys = new Set(),
  triggerRef = null,
  isOpen = false,
  onClose = () => {},
  onAction = () => {},
  dataTestId,
  sx = { listProps: {} },
}) => {
  const isCompact = rowSize === 'compact';

  return (
    <MenuTrigger isOpen={isOpen} onOpenChange={onClose}>
      <Popover triggerRef={triggerRef} css={popoverStyle}>
        <MenuWrapper
          selectionMode={selectionMode}
          selectedKeys={selectedKeys}
          disabledKeys={disabledKeys}
          onSelectionChange={onSelectionChange}
          css={listStyle(sx.listProps)}
          data-testid={dataTestId}
          onAction={onAction}
        >
          {React.Children.map(children, (child) => {
            const key = React.isValidElement(child) ? (child.key ?? '') : '';

            if (React.isValidElement(child) && child.type === MenuItemDivider) {
              return child;
            }

            return (
              <MenuItemWrapper
                isCompact={isCompact}
                rowSize={rowSize}
                isDisabled={disabledKeys.has(key)}
                id={key}
                key={key}
              >
                {child}
              </MenuItemWrapper>
            );
          })}
        </MenuWrapper>
      </Popover>
    </MenuTrigger>
  );
};

export default Menu;
