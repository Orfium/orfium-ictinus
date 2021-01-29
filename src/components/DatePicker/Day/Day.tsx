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
  isBetween?: boolean;
};

const Day: React.FC<Props> = ({ day, month, year, onSelect, isSelected, isBetween }) => {
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
        background: ${(isSelected || isBetween) && '#f7f7f7'};
      `}
      aria-label={date ? date.format('dd MMM DD YYYY') : undefined}
      onClick={onDayClick}
    >
      <div
        css={css`
          //selected 7%
          //white 7%
          //hover 3%

          border: 1px solid ${isToday ? '#cfcfcf' : 'transparent'};
          border-radius: ${(isToday || isSelected) && '100%'};
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${isSelected
            ? theme.utils.getColor(calculatedColor.color, calculatedColor.shade)
            : isBetween && '#f7f7f7'};

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
