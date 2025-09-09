import React from 'react';
import { lineEllipsis } from 'theme/functions';
import type { DivProps } from 'utils/common';
import useGetTagUtils from './hooks/useGetTagUtils';
import * as styles from './Tag.style';
import type { TagProps } from './Tag.types';

const Tag = React.forwardRef<HTMLDivElement, DivProps & TagProps>(
  (
    {
      variant = 'default',
      color = 'neutral',
      size = 'normal',
      iconName,
      onSelect,
      onClear,
      isSelected = false,
      children,
      dataTestPrefixId,
      dataTestId,
      ...rest
    },
    ref
  ) => {
    const { isSelectable, isClearable, isInteractive, handleKeyDown, prefix, suffix } =
      useGetTagUtils({ color, iconName, onSelect, onClear, isSelected, dataTestPrefixId });

    return (
      <div
        onClick={onSelect}
        onKeyDown={handleKeyDown}
        tabIndex={isInteractive ? 0 : -1}
        css={[
          styles.tagContainerStyles({ size, color, isSelectable, isClearable, isSelected }),
          variant === 'code' && styles.code(size),
        ]}
        ref={ref}
        data-testid={dataTestId ? dataTestId : `${dataTestPrefixId}_tag_container`}
        aria-label={children?.toString()}
        aria-selected={isSelected}
        {...rest}
      >
        {prefix}
        <div css={lineEllipsis}>{children}</div>
        {suffix}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
