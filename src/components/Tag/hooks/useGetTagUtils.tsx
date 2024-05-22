import useTheme from 'hooks/useTheme';
import React, { useCallback, useMemo } from 'react';
import type { TestProps } from 'utils/types';

import { tagColorToSemColor } from '../constants';
import { iconStyles } from '../Tag.style';
import type { TagProps } from '../Tag.types';
import Icon from 'components/Icon';

const useGetTagUtils = ({
  color = 'neutral',
  iconName,
  onSelect,
  onClear,
  isSelected,
  dataTestPrefixId,
}: Pick<TagProps, 'iconName' | 'color' | 'onSelect' | 'onClear' | 'isSelected'> & TestProps) => {
  const theme = useTheme();

  const isSelectable = onSelect && !onClear;
  const isClearable = Boolean(onClear);
  const isInteractive = isSelectable || isClearable;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && isSelectable && onSelect) {
        onSelect();
      }

      if (e.key === 'Enter' && isClearable && onClear) {
        onClear();
      }
    },
    [isClearable, isSelectable, onClear, onSelect]
  );

  const prefix = useMemo(() => {
    if (isSelectable && isSelected)
      return (
        <Icon
          dataTestId={`${dataTestPrefixId}_tag_prefix`}
          size={theme.dimension.sizing.get('icon.sm')}
          name="check"
          color={theme.tokens.colors.get('textColor.default.active')}
        />
      );

    if (!isInteractive && iconName)
      return (
        <Icon
          size={theme.dimension.sizing.get('icon.sm')}
          name={iconName}
          color={theme.tokens.colors.get(tagColorToSemColor[color].text)}
        />
      );

    return null;
  }, [
    color,
    dataTestPrefixId,
    iconName,
    isInteractive,
    isSelectable,
    isSelected,
    theme.dimension.sizing,
    theme.tokens.colors,
  ]);

  const suffix = useMemo(
    () =>
      isClearable ? (
        <div tabIndex={-1} aria-hidden="true" css={iconStyles()}>
          <Icon
            onClick={onClear}
            hasHover={false}
            size={theme.dimension.sizing.get('icon.sm')}
            name="close"
            color={theme.tokens.colors.get('textColor.default.active')}
            dataTestId={`${dataTestPrefixId}_tag_suffix`}
          />
        </div>
      ) : null,
    [dataTestPrefixId, isClearable, onClear, theme.dimension.sizing, theme.tokens.colors]
  );

  return {
    isSelectable,
    isClearable,
    isInteractive,
    handleKeyDown,
    prefix,
    suffix,
  };
};

export default useGetTagUtils;
