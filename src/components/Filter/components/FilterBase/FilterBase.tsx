import React, { ReactNode, useCallback } from 'react';

import useTheme from '../../../../hooks/useTheme';
import { useTypeColorToColorMatch } from '../../../../hooks/useTypeColorToColorMatch';
import { generateTestDataId } from '../../../../utils/helpers';
import Icon from '../../../Icon';
import { AcceptedIconNames } from '../../../Icon/types';
import {
  buttonSpanStyle,
  buttonStyle,
  buttonWrapperStyle,
  childrenWrapperStyle,
  dividedButtonStyle,
  divider,
  labelSpanStyle,
  valueSpanStyle,
  wrapperStyle,
} from '../../Filter.style';
import { FilterProps } from '../../types';
import { getTextColor } from '../../utils';

export type FilterBaseProps = {
  children?: ReactNode;
  isDatePicker?: boolean;
  handleOpen: () => void;
  iconName: AcceptedIconNames;
  onClear: () => void;
  selectedItemLabel?: string;
  isOpen: boolean;
  hasSelectedValue: boolean;
} & Pick<
  FilterProps,
  'dataTestId' | 'isDisabled' | 'label' | 'buttonType' | 'filterType' | 'styleType' | 'isMulti'
>;

export const FilterBase = React.forwardRef<HTMLButtonElement, FilterBaseProps>((props, ref) => {
  const {
    dataTestId,
    isDatePicker = false,
    handleOpen,
    isDisabled,
    onClear,
    selectedItemLabel,
    isOpen,
    hasSelectedValue,
    label,
    iconName,
    buttonType = 'primary',
    filterType = 'preset',
    styleType,
    children,
    isMulti,
  } = props;

  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType('', buttonType);
  const theme = useTheme();

  const pickIconColor = useCallback(
    (isCloseButton = false) => {
      if (isOpen) {
        return getTextColor({
          theme,
          isOpen,
          calculatedColor,
          hasSelectedValue,
        });
      }
      if (isCloseButton) {
        if (hasSelectedValue) {
          return theme.utils.getColor(calculatedColor.color, 550);
        }

        return theme.utils.getColor('darkGrey', 400);
      }

      return theme.utils.getColor('darkGrey', 850);
    },
    [calculatedColor, hasSelectedValue, isOpen, theme]
  );

  const buttonStyleProps = {
    calculatedColor,
    buttonType,
    isDisabled,
    isOpen,
    styleType,
    hasSelectedValue,
    filterType,
  };

  return (
    <div css={wrapperStyle()} data-testid={dataTestId}>
      <button
        ref={ref}
        data-testid={generateTestDataId('filter', dataTestId)}
        onClick={handleOpen}
        disabled={isDisabled}
        css={buttonWrapperStyle(buttonStyleProps)}
      >
        <div css={buttonStyle(buttonStyleProps)}>
          <div css={buttonSpanStyle()}>
            <div css={childrenWrapperStyle()}>
              <span css={labelSpanStyle(isOpen, hasSelectedValue)}>
                {label && (
                  <div data-testid="filter-label">
                    {label} {!isDatePicker ? <>:&nbsp;</> : ''}
                  </div>
                )}
                {selectedItemLabel && (
                  <span css={valueSpanStyle()} data-testid="filter-selected-item-label">
                    {selectedItemLabel}
                  </span>
                )}
              </span>
            </div>

            <Icon name={iconName} size={isDatePicker ? 14 : 7} color={pickIconColor()} />
          </div>
        </div>

        {filterType === 'added' && !isMulti && (
          <>
            <span css={divider(buttonStyleProps)} />
            <div css={dividedButtonStyle(buttonStyleProps)}>
              <Icon
                size={19}
                name={'closeTag'}
                color={pickIconColor(true)}
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
              />
            </div>
          </>
        )}
      </button>
      {children}
    </div>
  );
});

FilterBase.displayName = 'FilterBase';

export default FilterBase;
