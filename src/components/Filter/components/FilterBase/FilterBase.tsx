import React, { forwardRef, ReactNode } from 'react';

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
import { FilterType, StyleType } from '../../types';

// eslint-disable-next-line react/display-name
export const FilterBase = forwardRef<
  HTMLButtonElement,
  {
    dataTestId?: string;
    children?: ReactNode;
    disabled: boolean;
    handleOpen: () => void;
    onClear: () => void;
    selectedItemLabel?: string;
    open: boolean;
    hasSelectedValue: boolean;
    label?: string;
    iconName: AcceptedIconNames;
    iconColor: string;
    iconSize?: number;
    /** Defines the style type of the button */
    styleType: StyleType;
    /** Defines the filter type */
    filterType?: FilterType;
    buttonType?: 'primary' | 'secondary';
  }
>((props, ref) => {
  const {
    dataTestId,
    handleOpen,
    disabled,
    onClear,
    selectedItemLabel,
    open,
    hasSelectedValue,
    label,
    iconName,
    iconColor,
    iconSize = 6,
    buttonType = 'primary',
    filterType = 'preset',
    styleType,
    children,
  } = props;
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType('', buttonType);
  const theme = useTheme();

  const buttonStyleProps = {
    calculatedColor,
    buttonType,
    disabled,
    open,
    styleType,
    hasSelectedValue,
    filterType,
  };

  const pickIconColor = () => {
    if (open) {
      return theme.utils.getColor('neutralWhite', 100);
    }
    if (hasSelectedValue) {
      return theme.utils.getColor(calculatedColor.color, 550);
    }

    return theme.utils.getColor('darkGrey', 400);
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
          <span css={buttonSpanStyle()}>
            <span css={childrenWrapperStyle()}>
              <span css={labelSpanStyle(open, hasSelectedValue)}>
                {label && <div>{label} :</div>}
                <span css={valueSpanStyle()}>{selectedItemLabel}</span>
              </span>
            </span>

            <Icon name={iconName} color={iconColor} size={iconSize} />
          </span>
        </div>

        {filterType === 'added' && (
          <>
            <span css={divider(buttonStyleProps)} />
            <div css={dividedButtonStyle(buttonStyleProps)}>
              <Icon
                size={19}
                name={'closeTag'}
                color={pickIconColor()}
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

export default FilterBase;
