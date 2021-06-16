import React from 'react';

import ListItem from '../ListItem';
import { generateUniqueID } from 'utils/helpers';
import { listStyle } from './NormalList.style';
import { SelectOption } from '../../Select/Select';
import { isSelected } from '../utils';

type Props = {
  items: (string | number | SelectOption)[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: 'small' | 'normal';
  /** Width of the list */
  width: number;
  /** Height of the list */
  height: number;
  /** Ref of ListItem component */
  listItemRef?: React.RefObject<HTMLDivElement>;
  /** Selected Item */
  selectedItem?: string | number;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: (option: SelectOption) => void;
  /** Data Test Id Prefix */
  dataTestIdPrefix?: string;
};

const NormalList: React.FC<Props> = ({
  items,
  width,
  height,
  rowSize,
  listItemRef,
  selectedItem,
  searchTerm,
  handleOptionClick,
  dataTestIdPrefix,
}) => {
  return (
    <div data-testid={dataTestIdPrefix ? `${dataTestIdPrefix}_list` : 'ictinus_list'}>
      <ul css={listStyle({ width, height })}>
        {items.map((item, index) => (
          <ListItem
            key={generateUniqueID('list_item')}
            content={item}
            size={rowSize}
            index={index}
            listItemRef={listItemRef}
            searchTerm={searchTerm}
            dataTestIdPrefix={dataTestIdPrefix}
            handleOptionClick={handleOptionClick}
            selected={isSelected({ item, selectedItem })}
          />
        ))}
      </ul>
    </div>
  );
};

export default NormalList;
