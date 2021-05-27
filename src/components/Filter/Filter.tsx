/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { isUndefined } from 'lodash';

import useTheme from 'hooks/useTheme';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import Icon from '../Icon';
import { generateTestDataId } from '../../utils/helpers';
import ClickAwayListener from '../utils/ClickAwayListener';
import { optionsStyle } from '../utils/DropdownOptions';
import { Props, TestProps, } from './types';
import { getTextColor } from './utils';
import {
  buttonStyle,
  childrenWrapperStyle,
  buttonSpanStyle,
  labelSpanStyle,
  wrapperStyle,
} from './Filter.style';
import { darken } from 'polished';

const Filter: React.FC<Props & TestProps> = props => {
  const {
    items,
    onSelect,
    selectedItem,
    defaultValue,
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
  const hasSelectedValue = Boolean(selectedItem?.value);
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
              <span css={labelSpanStyle(open, hasSelectedValue)}>{label}:
                <span>{selectedItem?.label ?? defaultValue.label}</span>
              </span>
            </span>

            <Icon name={iconName} color={iconColor} size={6} />
          </span>
        </button>
        {open && (
          <div css={optionsStyle({})(theme)} data-testid="filter-menu">
            <button
              css={{
                backgroundColor: isUndefined(selectedItem?.value) || selectedItem?.value === defaultValue.value
                  ? darken(0.05, theme.palette.white)
                  : theme.palette.white,
                border: 0,
                fontWeight: theme.typography.weights.medium,
              }}
              key={`${defaultValue.value}`}
              onClick={() => {
                setOpen(false);
                onSelect(defaultValue);
              }}
            >
              {defaultValue.label}
            </button>
            {items &&
              items
                .filter(option => option.value !== defaultValue.value) //filter options just in case the default value is included
                .map((option, index) => (
                <button
                  css={{
                    backgroundColor: option.value === selectedItem?.value ? darken(0.05, theme.palette.white) : theme.palette.white,
                    border: 0,
                    fontWeight: theme.typography.weights.regular,
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
