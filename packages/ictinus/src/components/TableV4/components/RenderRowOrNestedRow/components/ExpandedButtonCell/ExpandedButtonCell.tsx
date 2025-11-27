import useBreakpoints from 'hooks/useBreakpoints';
import React from 'react';

import { vars } from '@orfium/tokens';
import IconButton from 'components/IconButton';
import TableCell from '../../../TableCell';

type ExpandedButtonCellProps = {
  isExpandedExists: boolean;
  isChecked: boolean;
  toggleIsChecked: () => void;
  actionWidth?: number;
  dataTestIdPrefix?: string;
  rowIndex?: number;
  index?: number;
};

const ExpandedButtonCell: React.FCC<ExpandedButtonCellProps> = ({
  isExpandedExists,
  isChecked,
  toggleIsChecked,
  actionWidth,
  dataTestIdPrefix,
  rowIndex,
  index,
}) => {
  const breakpoints = useBreakpoints();
  const actionCellWidth = actionWidth ? `${actionWidth}%` : breakpoints.des1920 ? '5%' : '7%';

  return isExpandedExists ? (
    <TableCell
      width={actionCellWidth}
      dataTestIdPrefix={dataTestIdPrefix}
      rowIndex={rowIndex}
      index={index}
    >
      <div>
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            padding: `${vars.spacing['3']} ${vars.spacing['4']}`,
          }}
        >
          <div
            css={{
              transition: '0.3s all ease-in-out',
              transformOrigin: 'center',
              width: 'fit-content',
              transform: `rotate(${isChecked ? '180' : '0'}deg)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton
              type="tertiary"
              iconName="chevronDown"
              onClick={toggleIsChecked}
              dataTestId="expanded-button"
            />
          </div>
        </div>
      </div>
    </TableCell>
  ) : null;
};

export default React.memo(ExpandedButtonCell);
