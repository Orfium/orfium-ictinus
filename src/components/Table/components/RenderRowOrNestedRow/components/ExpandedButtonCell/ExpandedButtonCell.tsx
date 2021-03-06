/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../../../../hooks/useTheme';
import TableCell from '../../../TableCell';
import { IconButton } from '../../../../../../index';

type Props = {
  isExpandedExists: boolean;
  checked: boolean;
  toggleChecked: () => void;
  dataTestIdPrefix?: string;
  rowIndex?: number;
  index?: number;
};

const ExpandedButtonCell: React.FC<Props> = ({
  isExpandedExists,
  checked,
  toggleChecked,
  dataTestIdPrefix,
  rowIndex,
  index,
}) => {
  const theme = useTheme();

  return isExpandedExists ? (
    <TableCell width={67} dataTestIdPrefix={dataTestIdPrefix} rowIndex={rowIndex} index={index}>
      <div>
        <div
          css={{
            padding: `${theme.spacing.xsm} ${theme.spacing.sm}`,
          }}
        >
          <div
            css={{
              transition: '0.3s all ease-in-out',
              transformOrigin: 'center',
              width: 'fit-content',
              transform: `rotate(${checked ? '180' : '0'}deg)`,
            }}
            onClick={e => e.stopPropagation()}
          >
            <IconButton
              transparent
              name={'chevronSmallDown'}
              size={'sm'}
              onClick={toggleChecked}
              color={'lightGray-700'}
              dataTestId={'expanded-button'}
            />
          </div>
        </div>
      </div>
    </TableCell>
  ) : null;
};

export default React.memo(ExpandedButtonCell);
