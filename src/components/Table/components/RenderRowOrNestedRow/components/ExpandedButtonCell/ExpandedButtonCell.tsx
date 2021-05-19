/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../../../../hooks/useTheme';
import TableCell from '../../../TableCell';
import rem from 'polished/lib/helpers/rem';
import Icon from '../../../../../Icon';

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
          data-testid="expanded-button"
          css={{
            padding: theme.spacing.sm,
            overflow: 'hidden',
            borderRadius: rem(20),
            backgroundColor: checked
              ? theme.utils.getColor('darkGray', 400)
              : theme.utils.getColor('lightGray', 200),
            margin: `${rem(8)} ${theme.spacing.md}`,
            transition: '0.2s all ease-in-out',
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.stopPropagation();
            toggleChecked();
          }}
        >
          <div
            css={{
              transition: '0.3s all ease-in-out',
              transform: `rotate(${checked ? '180' : '0'}deg)`,
            }}
          >
            <Icon name={'arrowDown'} size={15} color={checked ? 'light' : 'dark'} />
          </div>
        </div>
      </div>
    </TableCell>
  ) : null;
};

export default React.memo(ExpandedButtonCell);
