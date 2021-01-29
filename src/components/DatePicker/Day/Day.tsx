/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import useTheme from '../../../hooks/useTheme';
import { pickTextColorFromSwatches } from '../../../theme/palette';
import { useTypeColorToColorMatch } from '../../../hooks/useTypeColorToColorMatch';

export type Props = {
  day?: number;
  month: number;
  year: number;
  onSelect?: (date: Dayjs) => void;
  isSelected: boolean;
};

const Day: React.FC<Props> = ({ day, month, year, onSelect, isSelected }) => {
  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType('', 'branded1');
  const date = React.useMemo(
    () =>
      day &&
      dayjs()
        .month(month)
        .date(day)
        .year(year),
    [year, day, month]
  );
  const isToday = React.useMemo(() => {
    return dayjs().month() === month && dayjs().year() === year && dayjs().date() === day;
  }, [year, month, day]);

  const onDayClick = React.useCallback(
    e => {
      e.preventDefault();
      if (onSelect && date) {
        onSelect(date);
      }
    },
    [onSelect, date]
  );

  if (!day) {
    return (
      <td
        css={css`
          vertical-align: middle;
          text-align: center;
          cursor: pointer;
          position: relative;
        `}
      />
    );
  }

  return (
    <div
      css={css`
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        position: relative;
        color: ${isSelected
          ? pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade)
          : theme.utils.getColor('darkGray', 700)};
        width: 39px;
        font-weight: ${isToday && 'bold'};
      `}
      aria-label={date ? date.format('dd MMM DD YYYY') : undefined}
      onClick={onDayClick}
    >
      <div
        css={css`
          border: 1px solid ${isToday ? '#cfcfcf' : 'transparent'};
          border-radius: ${isToday && '100%'};
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${isSelected &&
            theme.utils.getColor(calculatedColor.color, calculatedColor.shade)};

          &:hover {
            background: ${!isSelected && '#f7f7f7'};
          }
        `}
      >
        {day}
      </div>
    </div>
  );
};

export default React.memo(Day);
