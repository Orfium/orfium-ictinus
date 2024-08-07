import React, { useRef } from 'react';
import { Popover } from 'react-aria-components';

import { menuStyle } from './ColumnChooser.style';
import { flattenColumns } from '../utils';
import Button from 'components/Button';
import { Switch } from 'components/Controls';
import { ListItem, ListItemAction, ListItemText } from 'components/List';
import { listStyle } from 'components/List/List.style';
import { MenuItemWrapper, MenuWrapper, popoverStyle } from 'components/Menu/Menu.style';
import MenuItemDivider from 'components/Menu/MenuItemDivider';
import type { TableProps } from 'components/Table/types';

import type { TestProps } from '~/utils/types';

type Props = Pick<TableProps<any>, 'columns' | 'columnsConfig'> & {
  /** Element that that serves as the positioning boundary of the ColumnChooser Menu */
  containerRef: React.MutableRefObject<any>;
} & TestProps;

/** @TODO create a generic Popover component */

const ColumnChooser: React.FC<Props> = ({
  columns,
  columnsConfig,
  containerRef,
  dataTestPrefixId,
}) => {
  const [isBtnOpen, setIsBtnOpen] = React.useState<boolean>(false);

  const options = flattenColumns(columns);

  const menuRef = useRef(null);

  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set<string>(
      Object.keys(columnsConfig.columnVisibility).filter(
        (col) => columnsConfig.columnVisibility[col] === true
      )
    )
  );

  const disabledKeys = options
    .filter((option) => option.isAlwaysVisible)
    .map((option) => option.id);

  const btnRef = useRef(null);

  const handleBtnClick = (e) => {
    if (e?.preventDefault) {
      e?.preventDefault();
    }

    setIsBtnOpen((isOpen) => !isOpen);
  };

  const handleSelectionChange = (keys) => {
    const keysArray = Array.from(keys);
    setSelectedKeys(keys);

    columnsConfig.setColumnVisibility(
      options.reduce((obj, item) => {
        obj[item.id] = keysArray.includes(item.id);

        return obj;
      }, {})
    );
  };

  return (
    <>
      <Button
        ref={btnRef}
        aria-label="Menu"
        onClick={handleBtnClick}
        aria-controls={isBtnOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isBtnOpen ? 'true' : undefined}
        /** @TODO add iconLeft functionality to compact Button */
        // iconLeftName="columnChooser"
        size="compact"
        type="secondary"
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            menuRef.current.focus();
          }
        }}
        dataTestPrefixId={`${dataTestPrefixId}_column_chooser_`}
      >
        Edit Columns
      </Button>
      <Popover
        triggerRef={btnRef}
        css={popoverStyle}
        isOpen={isBtnOpen}
        onOpenChange={() => setIsBtnOpen((isOpen) => !isOpen)}
        shouldCloseOnInteractOutside={() => true}
        boundaryElement={containerRef.current}
        /** @TODO adjust this when compact Button with iconLeft is implemented */
        crossOffset={-31}
      >
        <MenuWrapper
          ref={menuRef}
          aria-label="Menu"
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          css={[listStyle({}), menuStyle()]}
          onSelectionChange={handleSelectionChange}
          disabledKeys={disabledKeys}
        >
          {options.map((col, index) => {
            const key = col.id;

            const testIdKey = col.header.toLowerCase().split(' ').join('_');

            return (
              <>
                <MenuItemWrapper
                  isCompact={true}
                  rowSize="compact"
                  isDisabled={col.isAlwaysVisible}
                  id={key}
                  key={key}
                >
                  <ListItem
                    key={key}
                    textValue={col.header}
                    parentType="Menu"
                    css={{ width: '100%' }}
                    data-testid={`${dataTestPrefixId}_column_chooser_${testIdKey}`}
                  >
                    <ListItemText>{col.header}</ListItemText>
                    <ListItemAction>
                      <Switch
                        isDisabled={col.isAlwaysVisible}
                        isSelected={selectedKeys?.has(key)}
                        dataTestPrefixId={`${dataTestPrefixId}_column_chooser_${testIdKey}`}
                      />
                    </ListItemAction>
                  </ListItem>
                </MenuItemWrapper>
                {index < options.length - 1 && <MenuItemDivider />}
              </>
            );
          })}
        </MenuWrapper>
      </Popover>
    </>
  );
};

export default ColumnChooser;
