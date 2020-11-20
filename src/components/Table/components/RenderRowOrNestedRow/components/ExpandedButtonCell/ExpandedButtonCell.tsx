/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../../../../hooks/useTheme';
import TableCell from '../../../TableCell';
import rem from 'polished/lib/helpers/rem';
import Icon from '../../../../../Icon';

type Props = { isExpandedExists: boolean; checked: boolean; toggleChecked: () => void };

const ExpandedButtonCell: React.FC<Props> = ({ isExpandedExists, checked, toggleChecked }) => {
  const theme = useTheme();

  return isExpandedExists ? (
    <TableCell width={67}>
      <div>
        <div
          data-testid="expanded-button"
          css={{
            padding: theme.spacing.sm,
            overflow: 'hidden',
            borderRadius: rem(20),
            backgroundColor: checked
              ? theme.getColor('darkGray', 400)
              : theme.getColor('lightGray', 200),
            margin: `${rem(8)} ${theme.spacing.md}`,
            transition: '0.2s all ease-in-out',
            cursor: 'pointer',
          }}
          onClick={() => toggleChecked()}
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
