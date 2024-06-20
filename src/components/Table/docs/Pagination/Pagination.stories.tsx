import { useState } from 'react';
import Table from '../../Table';
import { SimpleData, moreData, simpleColumns, simpleData } from '../../constants';
import { TableColumn } from '../../types';
import { ExpandedState } from '@tanstack/react-table';
import Button from '~/components/Button';
import DropdownButton from '~/components/DropdownButton';
import { chunk, concat } from 'lodash-es';
import { SelectOption, SelectOptionValues } from '~/components/Select';

export default {
  title: 'Updated Components/Table/Table/Pagination',
  component: Table,

  args: {
    isNextPageDisabled: false,
    isPrevPageDisabled: false,
    isEnhancedPaginationVisible: true,
    showItemsPerPageCount: true,
    maxHeight: 280,
  },

  argTypes: {
    showItemsPerPageCount: { name: 'Show items-per-page count' },
    maxHeight: { name: 'Tbody Max height' },
  },
};

export const Pagination = {
  render: (args) => {
    const {
      rowSize,
      hasStickyHeader,
      isNextPageDisabled,
      isPrevPageDisabled,
      isEnhancedPaginationVisible,
      showItemsPerPageCount,
      maxHeight,
    } = args;

    const [currentPage, setCurrentPage] = useState(1);

    const [showItems, setShowItems] = useState<Omit<SelectOptionValues, 'iconProps'>>({
      value: 10,
      label: '10 rows per page',
    });

    const data = chunk(concat(simpleData(), moreData()), Number(showItems.value));

    return (
      <Table
        data={data[currentPage - 1]}
        columns={simpleColumns as TableColumn<SimpleData>[]}
        rowSize={rowSize}
        hasStickyHeader={hasStickyHeader}
        sx={hasStickyHeader ? { tbody: { maxHeight: `${maxHeight}px` } } : undefined}
        pagination={{
          isEnhancedPaginationVisible,
          page: currentPage,
          onChange: setCurrentPage,
          totalPages: data.length,
          ...(showItemsPerPageCount && {
            showItems,
            showItemsOptions: [
              { value: 5, label: '5 rows per page' },
              { value: 10, label: '10 rows per page' },
            ],
          }),
          onShowItemsChange: setShowItems,
          isNextPageDisabled,
          isPrevPageDisabled,
        }}
      />
    );
  },

  name: 'Pagination',

  parameters: {
    controls: {
      include: [
        'hasStickyHeader',
        'isPrevPageDisabled',
        'isNextPageDisabled',
        'isEnhancedPaginationVisible',
        'Show items-per-page count',
        'Tbody Max height',
      ],
    },
  },
};
