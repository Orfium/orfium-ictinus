import { css, SerializedStyles } from '@emotion/react';
import { darken, transparentize } from 'polished';
import { Theme } from 'theme';

import { pickTextColorFromSwatches } from '../../../theme/palette';
import { ColorShapeFromComponent } from '../../../utils/themeFunctions';

type Props = {
  day?: number;
  isSelected?: boolean;
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
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  position: relative;
  color: ${isSelected
    ? pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade)
    : theme.utils.getColor('darkGrey', 850)};
  width: 40px;
  padding: 0 4px;
  font-weight: ${isToday && 'bold'};
  opacity: ${disabled ? 0.5 : 1};
  background: ${isLast || isFirst
    ? 'transparent'
    : (isSelected || isBetween) &&
      typeof isBetween !== 'undefined' &&
      theme.utils.getColor('blue', 50)};
  border-bottom-right-radius: ${isLast && isSelected && '100%'};
  border-top-right-radius: ${isLast && isSelected && '100%'};
  border-bottom-left-radius: ${isFirst && isSelected && '100%'};
  border-top-left-radius: ${isFirst && isSelected && '100%'};

  ${(isSelected || isLast || isFirst) &&
    `&:after {
    z-index: -1;
    content: ' ';
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
     background: ${
       isLast && isFirst
         ? 'transparent'
         : (isSelected || isBetween) &&
           typeof isBetween !== 'undefined' &&
           theme.utils.getColor('blue', 50)
     };
  left: ${isLast ? '0' : 'initial'};
  right: ${isFirst ? '0' : 'initial'};
  border-bottom-right-radius: ${isLast && isSelected && '100%'};
  border-top-right-radius: ${isLast && isSelected && '100%'};
  border-bottom-left-radius: ${isFirst && isSelected && '100%'};
  border-top-left-radius: ${isFirst && isSelected && '100%'};
  }`}
`;

export const emptyDayStyle = ({ isBetween }: { isBetween: boolean }) => (theme: Theme) => css`
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  position: relative;
  background: ${isBetween ? theme.utils.getColor('blue', 50) : 'transparent'};
`;

export const dayStyle = ({ isSelected, calculatedColor, isToday, disabled }: Props) => (
  theme: Theme
) => css`
  border: 1px solid ${isToday ? theme.utils.getColor('lightGrey', 450) : 'transparent'};
  border-radius: ${(isToday || isSelected) && '100%'};
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${isSelected
    ? theme.utils.getColor(calculatedColor.color, calculatedColor.shade)
    : 'transparent'};

  ${!disabled &&
    `&:hover {
            border-radius: 100%;
            background: ${!isSelected && theme.utils.getColor('blue', 100)};
          }`}
`;
