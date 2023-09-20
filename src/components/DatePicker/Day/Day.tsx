import { Dayjs } from 'dayjs';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import React from 'react';

import { dayStyle, dayWrapperStyle, emptyDayStyle } from './Day.style';
import { currentDay } from '../utils';

export type Props = {
  day?: number;
  month: number;
  year: number;
  onSelect?: (date: Dayjs) => void;
  isSelected?: boolean;
  isBetween?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
  disabled?: boolean;
};

const Day: React.FC<Props> = ({
  day,
  month,
  year,
  onSelect,
  isSelected = false,
  isBetween = false,
  isLast = false,
  isFirst = false,
  disabled = false,
}) => {
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType('', 'primary');
  const date = React.useMemo(
    () => day && currentDay.month(month).date(day).year(year),
    [year, day, month]
  );
  const isToday = React.useMemo(() => {
    return currentDay.month() === month && currentDay.year() === year && currentDay.date() === day;
  }, [year, month, day]);

  const onDayClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (onSelect && date) {
        onSelect(date);
      }
    },
    [onSelect, date]
  );

  if (!day) {
    return <td css={emptyDayStyle({ isBetween })} />;
  }

  return (
    <td style={{ padding: 0 }} onClick={disabled ? undefined : onDayClick}>
      <div
        css={dayWrapperStyle({
          isSelected,
          isBetween,
          calculatedColor,
          isLast,
          isFirst,
          isToday,
          disabled,
        })}
        data-testid={`${day}_${month + 1}_${year}` + `${isSelected ? '_selected' : ''}`}
      >
        <div
          css={dayStyle({
            isSelected,
            isBetween,
            calculatedColor,
            isLast,
            isFirst,
            isToday,
            disabled,
          })}
        >
          {day}
        </div>
      </div>
    </td>
  );
};

export default React.memo<Props>(Day);
