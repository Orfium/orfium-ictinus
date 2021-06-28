import React from 'react';

import ListItem from '../ListItem';
import { generateUniqueID } from 'utils/helpers';
import { listStyle } from './NormalList.style';
import { SelectOption } from '../../Select/Select';
import { isSelected } from '../utils';
import { TestProps } from 'utils/types';
import { ListRowSize } from '../List';

type Props = {
  items: (string | number | SelectOption)[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: ListRowSize;
  /** Width of the list */
  width?: number;
  /** Height of the list */
  height?: number;
  /** Ref of ListItem component */
  listItemRef?: React.RefObject<HTMLDivElement>;
  /** Selected Item */
  selectedItem?: string | number;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: (option: SelectOption) => void;
} & TestProps;

const NormalList: React.FC<Props> = ({
  items,
  width,
  height,
  rowSize,
  listItemRef,
  selectedItem,
  searchTerm,
  handleOptionClick,
  dataTestId,
}) => {
  return (
    <div data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}>
      <ul css={listStyle({ width, height })}>
        {items.map((item, index) => (
          <li key={generateUniqueID('list_item')}>
            <ListItem
              content={item}
              size={rowSize}
              index={index}
              listItemRef={listItemRef}
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
};

export default NormalList;
