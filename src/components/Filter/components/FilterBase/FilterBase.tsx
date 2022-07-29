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
import { Props } from '../../types';
import { getTextColor } from '../../utils';

type FilterBaseProps = {
  children?: ReactNode;
  isDatePicker?: boolean;
  handleOpen: () => void;
  iconName: AcceptedIconNames;
  onClear: () => void;
  selectedItemLabel?: string;
  isOpen: boolean;
  hasSelectedValue: boolean;
} & Pick<
  Props,
  'dataTestId' | 'isDisabled' | 'label' | 'buttonType' | 'filterType' | 'styleType' | 'ref'
>;

export const FilterBase: React.FC<FilterBaseProps> = (props) => {
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
    ref,
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
    [calculatedColor.color, hasSelectedValue, open, theme.utils, theme.palette]
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
};

FilterBase.displayName = 'FilterBase';

export default React.forwardRef<HTMLButtonElement, FilterBaseProps>((props, ref) => (
  <FilterBase {...props} ref={ref} />
));
