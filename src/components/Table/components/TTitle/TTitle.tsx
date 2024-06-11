import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';

import ColumnChooser from './components/ColumnChooser';
import { actionsContent, titleContent, tTitleContainer } from './TTitle.style';
import type { TableProps } from 'components/Table/types';
import Typography from 'components/Typography';

type Props = Pick<TableProps<any>, 'columnsConfig' | 'columns' | 'rowsConfig' | 'type'> & {
  /** Element that that serves as the positioning boundary of the ColumnChooser Menu */
  containerRef: React.MutableRefObject<any>;
  /** Number of rows */
  rowsCount?: number;
};

const TTitle: React.FCC<Props> = ({
  type = 'read-only',
  columns,
  columnsConfig,
  rowsConfig,
  rowsCount,
  containerRef,
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
      <div>
        <Typography type={isSelectable ? 'active' : 'primary'} variant="label02">
          {itemsToDisplay}
        </Typography>
        <Typography variant="label02"> items {isSelectable ? 'selected' : ''}</Typography>
      </div>
    ),
    [isSelectable, itemsToDisplay]
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
        {hasVisibleActions && defaultAction}
        {columnsConfig && (
          <ColumnChooser
            columns={columns}
            columnsConfig={columnsConfig}
            containerRef={containerRef}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(TTitle, isEqual);
