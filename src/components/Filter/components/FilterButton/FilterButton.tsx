import type { EventButtonProps } from 'components/ButtonBase';
import type { FilterProps } from 'components/Filter/Filter.types';
import Icon from 'components/Icon';
import Tag from 'components/Tag';
import useTheme from 'hooks/useTheme';
import React from 'react';
import type { CommonButtonProps } from 'utils/common';
import type { TestProps } from 'utils/types';
import { buttonStyles, iconStyles } from './FilterButton.style';

export type FilterButtonProps = Pick<FilterProps, 'filterType' | 'isMulti'> & {
  children?: React.ReactNode;
  isDisabled?: boolean;
  onClear?: () => void;
  isActive?: boolean;
  isPopulated?: boolean;
  moreFilters?: number;
} & TestProps &
  EventButtonProps &
  CommonButtonProps;

export const FilterButton = React.forwardRef<HTMLButtonElement, FilterButtonProps>((props, ref) => {
  const {
    filterType = 'preset',
    children,
    onClick,
    isDisabled,
    onClear,
    isActive,
    isPopulated,
    moreFilters,
    dataTestPrefixId,
    isMulti,
    ...rest
  } = props;
  const theme = useTheme();

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
      css={buttonStyles({ isActive, isPopulated, isMulti, isDisabled })}
      type="button"
      ref={ref}
      onClick={onClick}
      disabled={isDisabled}
      data-testid={`${dataTestPrefixId}_filter_button`}
      data-active={isActive}
      {...rest}
    >
      <div
        css={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
        data-testid={`${dataTestPrefixId}_filter_label`}
      >
        {children}
      </div>
      {moreFilters && !isActive && (
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
          size={theme.dimension.sizing.get('icon.sm')}
          color={theme.tokens.colors.get(
            isActive ? 'textColor.inverted.primary' : 'textColor.default.active'
          )}
        />
      </div>

      {isAdded && (
        <Icon
          role="button"
          aria-label="Remove filter"
          name="close"
          size={theme.dimension.sizing.get('icon.sm')}
          color={theme.tokens.colors.get(
            isActive ? 'textColor.inverted.primary' : 'textColor.default.active'
          )}
          onClick={handleIconClick}
          dataTestPrefixId={`${dataTestPrefixId}_filter_close`}
        />
      )}
    </button>
  );
});

FilterButton.displayName = 'FilterButton';

export default FilterButton;
