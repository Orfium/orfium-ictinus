import useBreakpoints from 'hooks/useBreakpoints';
import useTheme from 'hooks/useTheme';
import React from 'react';

import TableCell from '../../../TableCell';
import IconButton from 'components/IconButton';

type ExpandedButtonCellProps = {
  isExpandedExists: boolean;
  isChecked: boolean;
  toggleIsChecked: () => void;
  actionWidth?: number;
  dataTestIdPrefix?: string;
  rowIndex?: number;
  index?: number;
};

const ExpandedButtonCell: React.FC<ExpandedButtonCellProps> = ({
  isExpandedExists,
  isChecked,
  toggleIsChecked,
  actionWidth,
  dataTestIdPrefix,
  rowIndex,
  index,
}) => {
  const theme = useTheme();

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
            padding: `${theme.spacing.xsm} ${theme.spacing.sm}`,
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
              isTransparent
              name={'chevronSmallDown'}
              size={'sm'}
              onClick={toggleIsChecked}
              color={'lightGrey-700'}
              dataTestId={'expanded-button'}
            />
          </div>
        </div>
      </div>
    </TableCell>
  ) : null;
};

export default React.memo(ExpandedButtonCell);
