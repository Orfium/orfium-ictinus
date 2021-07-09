/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { List as VList, AutoSizer } from 'react-virtualized';

import ListItem from '../ListItem';
import { SelectOption } from '../../Select/Select';
import { isSelected } from '../utils';
import { listStyle } from './VirtualizedList.style';
import { TestProps } from 'utils/types';
import { ListRowSize } from '../List';
import { CSSProperties } from 'styled-components';

type Props = {
  items: (string | number | SelectOption)[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: ListRowSize;
  /** Width of the list */
  customWidth?: number;
  /** Height of the list */
  customHeight?: number;
  /** Selected Item */
  selectedItem?: string | number;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: (option: SelectOption) => void;
} & TestProps;

const VirtualizedList = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      items,
      customWidth,
      customHeight,
      rowSize,
      selectedItem,
      searchTerm,
      handleOptionClick,
      dataTestId,
    },
    ref
  ) => {
    const rowRenderer = ({
      index,
      key,
      style,
    }: {
      index: number;
      key: string;
      style: CSSProperties;
    }) => (
      <span style={style} key={key}>
        <ListItem
          size={rowSize}
          content={items[index]}
          index={index}
          ref={ref}
          selected={isSelected({ item: items[index], selectedItem })}
          searchTerm={searchTerm}
          dataTestId={dataTestId}
          handleOptionClick={handleOptionClick}
        />
      </span>
    );

    return (
      <AutoSizer
        css={listStyle({ width: customWidth, height: customHeight })}
        data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}
      >
        {({ height, width }) => (
          <VList
            width={customWidth ?? width}
            height={customHeight ?? height}
            rowCount={items.length}
            rowHeight={rowSize === 'normal' ? 56 : 46}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    );
  }
);

export default VirtualizedList;
