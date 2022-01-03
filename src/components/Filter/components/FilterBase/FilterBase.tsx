import React, { forwardRef, ReactNode, useCallback } from 'react';

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
import { Props } from '../../types';
import { getTextColor } from '../../utils';

type FilterBaseProps = {
  children?: ReactNode;
  isDatePicker?: boolean;
  handleOpen: () => void;
  iconName: AcceptedIconNames;
  onClear: () => void;
  selectedItemLabel?: string;
  open: boolean;
  hasSelectedValue: boolean;
};

export const FilterBase = forwardRef<
  HTMLButtonElement,
  FilterBaseProps &
    Pick<Props, 'dataTestId' | 'disabled' | 'label' | 'buttonType' | 'filterType' | 'styleType'>
>((props, ref) => {
  const {
    dataTestId,
    isDatePicker = false,
    handleOpen,
    disabled,
    onClear,
    selectedItemLabel,
    open,
    hasSelectedValue,
    label,
    iconName,
    buttonType = 'primary',
    filterType = 'preset',
    styleType,
    children,
  } = props;

  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType('', buttonType);
  const theme = useTheme();

  const pickIconColor = useCallback(
    (isCloseButton = false) => {
      if (open) {
        return getTextColor({
          theme,
          open,
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
    [calculatedColor.color, hasSelectedValue, open, theme.utils, theme.palette]
  );

  const buttonStyleProps = {
    calculatedColor,
    buttonType,
    disabled,
    open,
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
        disabled={disabled}
        css={buttonWrapperStyle(buttonStyleProps)}
      >
        <div css={buttonStyle(buttonStyleProps)}>
          <div css={buttonSpanStyle()}>
            <div css={childrenWrapperStyle()}>
              <span css={labelSpanStyle(open, hasSelectedValue)}>
                {label && (
                  <div>
                    {label} {!isDatePicker ? <>:&nbsp;</> : ''}
                  </div>
                )}
                {selectedItemLabel && <span css={valueSpanStyle()}>{selectedItemLabel}</span>}
              </span>
            </div>

            <Icon name={iconName} size={isDatePicker ? 14 : 7} color={pickIconColor()} />
          </div>
        </div>

        {filterType === 'added' && (
          <>
            <span css={divider(buttonStyleProps)} />
            <div css={dividedButtonStyle(buttonStyleProps)}>
              <Icon
                size={19}
                name={'closeTag'}
                color={pickIconColor(true)}
                onClick={e => {
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
