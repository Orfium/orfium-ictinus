import { vars } from '@orfium/tokens';
import type { EventButtonProps } from 'components/ButtonBase';
import type { FilterProps } from 'components/Filter/Filter.types';
import Icon from 'components/Icon';
import Tag from 'components/Tag';
import React from 'react';
import type { CommonButtonProps } from 'utils/common';
import type { TestProps } from 'utils/types';
import { buttonStyles, iconStyles } from './FilterButton.style';

export type FilterButtonProps = Pick<FilterProps, 'filterType' | 'colorScheme'> &
  React.PropsWithChildren<{
    isDisabled?: boolean;
    onClear?: () => void;
    isActive?: boolean;
    isPopulated?: boolean;
    moreFilters?: number;
    iconLeft?: React.ReactNode;
  }> &
  TestProps &
  EventButtonProps &
  CommonButtonProps;

export const FilterButton = React.forwardRef<HTMLButtonElement, FilterButtonProps>((props, ref) => {
  const {
    filterType = 'preset',
    colorScheme = 'default',
    children,
    onClick,
    isDisabled,
    onClear,
    isActive,
    isPopulated,
    moreFilters,
    dataTestPrefixId,
    iconLeft,
    ...rest
  } = props;

  const isAdded = filterType === 'added';

  const handleIconClick = React.useMemo(
    () =>
      !isDisabled
        ? (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            onClear();
          }
        : undefined,
    [isDisabled, onClear]
  );

  return (
    <button
      css={buttonStyles({ isActive, isPopulated, isDisabled, colorScheme })}
      type="button"
      ref={ref}
      onClick={onClick}
      disabled={isDisabled}
      data-testid={`${dataTestPrefixId}_filter_button`}
      data-active={isActive}
      {...rest}
    >
      {iconLeft}
      <div
        css={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
        data-testid={`${dataTestPrefixId}_filter_label`}
      >
        {children}
      </div>
      {moreFilters > 0 && !isActive && (
        <Tag
          css={{ cursor: 'pointer' }}
          color="blue"
          dataTestPrefixId={`${dataTestPrefixId}_${moreFilters}_more_filters`}
        >
          +{moreFilters}
        </Tag>
      )}
      <div css={iconStyles({ isActive })}>
        <Icon
          name="triangleDown"
          size={vars.sizing['4']}
          color={isActive ? vars.color.text.inverted.primary : vars.color.text.default.active}
        />
      </div>

      {isAdded && (
        <Icon
          role="button"
          aria-label="Remove filter"
          name="close"
          size={vars.sizing['4']}
          color={isActive ? vars.color.text.inverted.primary : vars.color.text.default.active}
          onClick={handleIconClick}
          dataTestPrefixId={`${dataTestPrefixId}_filter_close`}
        />
      )}
    </button>
  );
});

FilterButton.displayName = 'FilterButton';

export default FilterButton;
