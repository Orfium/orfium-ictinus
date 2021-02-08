import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';
import { pickTextColorFromSwatches } from '../../../theme/palette';
import { transparentize } from 'polished';
import { ColorShapeFromComponent } from '../../../utils/themeFunctions';

type Props = {
  day?: number;
  isSelected: boolean;
  isBetween?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
  disabled?: boolean;
  isToday: boolean;
  calculatedColor: ColorShapeFromComponent;
};

export const dayWrapperStyle = ({
  isSelected,
  isBetween,
  calculatedColor,
  isLast,
  isFirst,
  isToday,
  disabled,
}: Props & { isToday: boolean; calculatedColor: ColorShapeFromComponent }) => (
  theme: Theme
): SerializedStyles => css`
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
  opacity: ${disabled ? 0.5 : 1};
  background: ${(isSelected || isBetween) &&
    typeof isBetween !== 'undefined' &&
    transparentize(0.7, theme.utils.getColor(calculatedColor.color, calculatedColor.shade))};
  border-bottom-right-radius: ${isLast && isSelected && '100%'};
  border-top-right-radius: ${isLast && isSelected && '100%'};
  border-bottom-left-radius: ${isFirst && isSelected && '100%'};
  border-top-left-radius: ${isFirst && isSelected && '100%'};
`;

export const emptyDayStyle = () => () => css`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  position: relative;
`;

export const dayStyle = ({ isSelected, calculatedColor, isToday, disabled }: Props) => (
  theme: Theme
) => css`
  border: 1px solid ${isToday ? '#cfcfcf' : 'transparent'};
  border-radius: ${(isToday || isSelected) && '100%'};
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${isSelected
    ? theme.utils.getColor(calculatedColor.color, calculatedColor.shade)
    : isToday && theme.palette.white};

  ${!disabled &&
    `&:hover {
            border-radius: 100%;
            background: ${!isSelected && theme.utils.getColor('lightGray', 200)};
          }`}
`;
