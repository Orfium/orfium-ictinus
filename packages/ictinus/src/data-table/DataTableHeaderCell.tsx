import { type Header } from '@tanstack/react-table';
import { forwardRef } from 'react';
import { Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger } from '~/vanilla/Menu';
import { ActionsContent, ActionsRoot } from '../actions';
import { Switch } from '../components/Controls';
import IconButton from '../components/IconButton';
import { Icon, type IconProps } from '../icon';
import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';
import { TableHeaderCell } from '../vanilla/Table';
import { Text } from '../vanilla/Text';
import { Tooltip, TooltipContent, TooltipTrigger } from '../vanilla/Tooltip';

import * as styles from './DataTableHeaderCell.css';

export type DataTableHeaderCellProps = Omit<
  BoxProps<
    typeof TableHeaderCell,
    {
      /**
       * The Header instance to render.
       */
      header: Header<unknown, unknown>;
    }
  >,
  'size'
>;

export const DataTableHeaderCell = forwardRef<HTMLTableCellElement, DataTableHeaderCellProps>(
  ({ children, header, ...props }, ref) => {
    const sortDir = header.column.getIsSorted();
    const flexDir = header.column.columnDef.meta?.align === 'flex-end' ? 'row-reverse' : 'row';

    return (
      <ActionsRoot asChild>
        <TableHeaderCell
          aria-sort={getAriaSort(header.column.getCanSort(), sortDir)}
          colSpan={header.colSpan}
          ref={ref}
          data-test
          {...props}
        >
          {typeof children === 'string' ? (
            <Box
              display="flex"
              alignItems="center"
              gap="sm"
              justifyContent="space-between"
              flex="1"
              flexDirection={flexDir}
            >
              <Box display="flex" alignItems="center" gap="sm" flexDirection={flexDir}>
                {header.column.getCanResize() && (
                  <ActionsContent
                    asChild
                    visible={header.column.getIsResizing() ? 'always' : 'if-needed'}
                  >
                    <Box
                      onDoubleClick={() => header.column.resetSize()}
                      onPointerDown={(event) => {
                        event.currentTarget.setPointerCapture(event.pointerId);
                        header.getResizeHandler()(event);
                      }}
                      style={{
                        transform:
                          header.getContext().table.options.columnResizeMode === 'onEnd' &&
                          header.column.getIsResizing()
                            ? `translateX(${header.getContext().table.getState().columnSizingInfo.deltaOffset}px)`
                            : '',
                      }}
                      className={cn(styles.handle({ resizing: header.column.getIsResizing() }))}
                    />
                  </ActionsContent>
                )}

                <Tooltip auto>
                  <TooltipTrigger>
                    <Text
                      role="button"
                      lineClamp="1"
                      className={styles.label({ sortDir: !!sortDir })}
                    >
                      {children}
                    </Text>
                  </TooltipTrigger>
                  <TooltipContent>{children}</TooltipContent>
                </Tooltip>
                {header.column.columnDef.meta?.tooltip && (
                  <Tooltip>
                    <TooltipTrigger>
                      {/* temporary work around, need to forward ref icon */}
                      <Box display="flex" alignItems="center" justifyContent="center" size="3">
                        <Icon name="informational" size="xs" color="secondary" />
                      </Box>
                    </TooltipTrigger>
                    <TooltipContent maxW="22">
                      {header.column.columnDef.meta.tooltip}
                    </TooltipContent>
                  </Tooltip>
                )}
                {header.column.getCanSort() && (
                  <ActionsContent
                    display="grid"
                    placeItems="center"
                    position="relative"
                    visible={sortDir ? 'always' : 'if-needed'}
                    flexDirection={flexDir}
                  >
                    <IconButton
                      onClick={() =>
                        header.column.toggleSorting(undefined, header.column.getCanMultiSort())
                      }
                      type="tertiary"
                      size="compact"
                      iconName={getSortIcon(sortDir)}
                    />
                    {header.column.getCanMultiSort() && header.column.getSortIndex() > -1 && (
                      <Text
                        typography="label04"
                        color="primary"
                        position="absolute"
                        pointerEvents="none"
                        style={{ top: 0, right: 0 }}
                      >
                        {header.column.getSortIndex() + 1}
                      </Text>
                    )}
                  </ActionsContent>
                )}
              </Box>

              {(header.column.getCanSort() || header.column.getCanPin()) && (
                <ActionsContent visible={sortDir ? 'always' : 'if-needed'}>
                  <Menu>
                    <MenuTrigger>
                      <IconButton type="tertiary" size="compact" iconName="moreOptions" />
                    </MenuTrigger>
                    <MenuContent style={{ minWidth: '220px' }}>
                      {header.column.getCanSort() && (
                        <>
                          <MenuItem onAction={() => header.column.toggleSorting(true)}>
                            <Box display="flex" alignItems="center" gap="sm">
                              <Icon name="sortDescending" />
                              <Text typography="body03">Sort descending (z-a)</Text>
                            </Box>
                          </MenuItem>
                          <MenuItem onAction={() => header.column.toggleSorting(false)}>
                            <Box display="flex" alignItems="center" gap="sm">
                              <Icon name="sortAscending" />
                              <Text typography="body03">Sort ascending (a-z)</Text>
                            </Box>
                          </MenuItem>
                        </>
                      )}
                      {header.column.getCanPin() && (
                        <>
                          {header.column.getCanSort() && <MenuSeparator />}
                          <MenuItem
                            onAction={() => {
                              const isPinnedLeft = header.column.getIsPinned() === 'left';
                              header.column.pin(isPinnedLeft ? false : 'left');
                            }}
                          >
                            <Box display="flex" alignItems="center" gap="sm" w="full">
                              <Icon name="freeze" />
                              <Text typography="body03">Freeze column (left)</Text>
                              <Box flex="1" />
                              <Switch
                                isSelected={header.column.getIsPinned() === 'left'}
                                isReadOnly
                              />
                            </Box>
                          </MenuItem>
                          <MenuItem
                            onAction={() => {
                              const isPinnedRight = header.column.getIsPinned() === 'right';
                              header.column.pin(isPinnedRight ? false : 'right');
                            }}
                          >
                            <Box display="flex" alignItems="center" gap="sm" w="full">
                              <Icon name="freeze" />
                              <Text typography="body03">Freeze column (right)</Text>
                              <Box flex="1" />
                              <Switch
                                isSelected={header.column.getIsPinned() === 'right'}
                                isReadOnly
                              />
                            </Box>
                          </MenuItem>
                        </>
                      )}
                    </MenuContent>
                  </Menu>
                </ActionsContent>
              )}
            </Box>
          ) : (
            children
          )}
        </TableHeaderCell>
      </ActionsRoot>
    );
  }
);

DataTableHeaderCell.displayName = 'DataTableHeaderCell';

const getAriaSort = (canSort: boolean, sortDir: false | 'asc' | 'desc') => {
  if (!canSort) return undefined;
  if (sortDir === false) return 'none';

  return sortDir === 'asc' ? 'ascending' : 'descending';
};

const getSortIcon = (sortDir: false | 'asc' | 'desc'): IconProps['name'] => {
  if (sortDir === 'asc') return 'arrowUp';
  if (sortDir === 'desc') return 'arrowDown';

  return 'sort';
};
