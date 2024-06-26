import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';

import ColumnChooser from './components/ColumnChooser';
import { actionsContent, titleContent, tTitleContainer } from './TTitle.style';
import type { TableProps } from 'components/Table/types';
import Typography from 'components/Typography';

import type { TestProps } from '~/utils/types';

type Props = Pick<TableProps<any>, 'columnsConfig' | 'columns' | 'rowsConfig' | 'type'> & {
  /** Element that that serves as the positioning boundary of the ColumnChooser Menu */
  containerRef: React.MutableRefObject<any>;
  /** Number of rows */
  rowsCount?: number;
} & TestProps;

const TTitle: React.FCC<Props> = ({
  type = 'read-only',
  columns,
  columnsConfig,
  rowsConfig,
  rowsCount,
  containerRef,
  dataTestPrefixId,
}) => {
  const { hasRowsCount, rowSelection, bulkActions, defaultAction } = rowsConfig ?? {};

  const isSelectable = type === 'interactive' && rowSelection;

  const itemsToDisplay = isSelectable
    ? Object.keys(rowSelection).length
    : hasRowsCount
    ? rowsCount
    : 0;

  const hasTitle = isSelectable || hasRowsCount;
  const hasVisibleActions = isSelectable && itemsToDisplay > 0;

  const title = useMemo(
    () => (
      <div data-testid={`${dataTestPrefixId}_title`}>
        <Typography
          type={isSelectable ? 'active' : 'primary'}
          variant="label02"
          data-testid={`${dataTestPrefixId}_title_items_count`}
        >
          {itemsToDisplay}
        </Typography>
        <Typography variant="label02"> items {isSelectable ? 'selected' : ''}</Typography>
      </div>
    ),
    [dataTestPrefixId, isSelectable, itemsToDisplay]
  );

  return (
    <div css={tTitleContainer()}>
      <div css={titleContent()}>
        {hasTitle && (
          <>
            {title}
            {hasVisibleActions && bulkActions}
          </>
        )}
      </div>

      <div css={actionsContent()}>
        {defaultAction}
        {columnsConfig && (
          <ColumnChooser
            columns={columns}
            columnsConfig={columnsConfig}
            containerRef={containerRef}
            dataTestPrefixId={dataTestPrefixId}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(TTitle, isEqual);
