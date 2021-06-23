import React from 'react';

import useTheme from 'hooks/useTheme';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';

import { generateTestDataId } from '../../utils/helpers';
import Icon from '../Icon';
import ClickAwayListener from '../utils/ClickAwayListener';
import { optionsStyle } from '../utils/DropdownOptions';
import {
  buttonStyle,
  childrenWrapperStyle,
  buttonSpanStyle,
  labelSpanStyle,
  wrapperStyle,
} from './Filter.style';
import { Props, TestProps } from './types';
import { getTextColor } from './utils';

const Filter: React.FC<Props & TestProps> = props => {
  const {
    items,
    onSelect,
    defaultValue,
    selectedItem,
    styleType,
    dataTestId,
    label = '',
    color,
    buttonType = 'primary',
    disabled = false,
  } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const hasSelectedValue = defaultValue.value !== selectedItem.value;
  const activeCalculatedColor = calculateColorBetweenColorAndType('', 'primary');
  const calculatedColor = calculateColorBetweenColorAndType(color, buttonType);
  const iconColor = getTextColor({
    open,
    theme,
    activeCalculatedColor,
    calculatedColor,
    hasSelectedValue,
  });
  const iconName = open ? 'triangleUp' : 'triangleDown';

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={wrapperStyle()} data-testid={dataTestId}>
        <button
          data-testid={generateTestDataId('filter', dataTestId)}
          css={buttonStyle({
            calculatedColor,
            activeCalculatedColor,
            buttonType,
            disabled,
            open,
            styleType,
            hasSelectedValue,
          })}
          onClick={() => setOpen(!open)}
          disabled={disabled}
        >
          <span css={buttonSpanStyle()}>
            <span css={childrenWrapperStyle()}>
              <span css={labelSpanStyle(open, hasSelectedValue)}>
                {label}:<span>{selectedItem.label}</span>
              </span>
            </span>

            <Icon name={iconName} color={iconColor} size={6} />
          </span>
        </button>
        {open && (
          <div css={optionsStyle({})(theme)} data-testid="filter-menu">
            {items &&
              items.map((option, index) => (
                <button
                  css={{
                    backgroundColor: theme.palette.white,
                    border: 0,
                  }}
                  key={`${option.value}-${index}`}
                  onClick={() => {
                    setOpen(false);
                    onSelect(option);
                  }}
                >
                  {option.label}
                </button>
              ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Filter;
