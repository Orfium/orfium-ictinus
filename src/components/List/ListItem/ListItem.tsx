import React from 'react';

import Icon from 'components/Icon';
import CheckBox from 'components/CheckBox';
import { AcceptedIconNames } from 'components/Icon/types';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';
import { listItemStyle, iconStyle, contentStyle } from './ListItem.style';

/** ListItem cannot have a leftIcon and a Checkbox at the same time */
type IconCheckboxCombinations =
  | {
      leftIcon?: AcceptedIconNames;
      leftIconColor?: AcceptedColorComponentTypes;
      hasCheckbox?: false | undefined;
      checked?: undefined;
    }
  | {
      leftIcon?: undefined;
      leftIconColor?: undefined;
      hasCheckbox?: boolean;
      checked?: boolean;
    };

type Props = {
  size: 'normal' | 'small';
  content: string;
  selected?: boolean;
  disabled?: boolean;
  index?: number;
  rightIcon?: AcceptedIconNames;
  rightIconColor?: AcceptedColorComponentTypes;
  onCheckOption?: () => void;
  onSelectOption?: () => void;
  dataTestIdPrefix?: string;
} & IconCheckboxCombinations;

const ListItem: React.FC<Props> = ({
  size,
  content,
  selected = false,
  disabled = false,
  index,
  rightIcon = undefined,
  rightIconColor,
  leftIcon = undefined,
  leftIconColor,
  hasCheckbox = false,
  onCheckOption,
  checked = false,
  onSelectOption,
  dataTestIdPrefix,
}) => {
  return (
    <div
      css={listItemStyle({ size, selected, disabled, hasCheckbox })}
      data-testid={dataTestIdPrefix ?? 'list_item' + (index ?? '')}
    >
      {leftIcon && (
        <span css={iconStyle({ position: 'left' })}>
          <Icon name={leftIcon} size={size === 'small' ? 16 : 20} color={leftIconColor} />
        </span>
      )}
      {hasCheckbox && <CheckBox checked={checked} onClick={onCheckOption} />}
      <span css={contentStyle()} onClick={onSelectOption}>
        {content}
      </span>
      {rightIcon && (
        <span css={iconStyle({ position: 'right' })}>
          <Icon name={rightIcon} size={size === 'small' ? 16 : 20} color={rightIconColor} />
        </span>
      )}
    </div>
  );
};

export default ListItem;
