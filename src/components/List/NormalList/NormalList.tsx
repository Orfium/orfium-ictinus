import React from 'react';
import { generateUniqueID } from 'utils/helpers';
import { TestProps } from 'utils/types';

import { SelectOption } from '../../Select/Select';
import { ListRowSize } from '../List';
import ListItem from '../ListItem';
import { isSelected } from '../utils';
import { listStyle } from './NormalList.style';

type Props = {
  items: (string | number | SelectOption)[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: ListRowSize;
  /** Width of the list */
  width?: number;
  /** Height of the list */
  height?: number;
  /** Selected Item */
  selectedItem?: string | number;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: (option: SelectOption) => void;
} & TestProps;

const NormalList = React.forwardRef<HTMLDivElement, Props>(
  (
    { items, width, height, rowSize, selectedItem, searchTerm, handleOptionClick, dataTestId },
    ref
  ) => {
    return (
      <div data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}>
        <ul css={listStyle({ width, height })}>
          {items.map((item, index) => (
            <li key={generateUniqueID('list_item')}>
              <ListItem
                content={item}
                size={rowSize}
                index={index}
                ref={ref}
                searchTerm={searchTerm}
                dataTestId={dataTestId}
                handleOptionClick={handleOptionClick}
                selected={isSelected({ item, selectedItem })}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default NormalList;
