import useTheme from 'hooks/useTheme';
import React, { useCallback, useMemo } from 'react';
import { TestProps } from 'utils/types';

import { iconStyles } from '../Tag.style';
import { getTagTokens } from '../Tag.tokens';
import { TagProps } from '../Tag.types';
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

  const tokens = getTagTokens(theme);

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
          size={12}
          name={'checkmark'}
          color={tokens('textColor.blue')}
        />
      );

    if (!isInteractive && iconName)
      return <Icon size={12} name={iconName} color={tokens(`textColor.${color}` as const)} />;

    return null;
  }, [color, dataTestPrefixId, iconName, isInteractive, isSelectable, isSelected, tokens]);

  const suffix = useMemo(
    () =>
      isClearable ? (
        <div tabIndex={-1} aria-hidden="true" css={iconStyles()}>
          <Icon
            onClick={onClear}
            size={12}
            name="close"
            color={tokens('textColor.blue')}
            dataTestId={`${dataTestPrefixId}_tag_suffix`}
          />
        </div>
      ) : null,
    [dataTestPrefixId, isClearable, onClear, tokens]
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
