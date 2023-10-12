import React from 'react';
import { DivProps } from 'utils/common';
import { TestProps } from 'utils/types';

import useGetTagUtils from './hooks/useGetTagUtils';
import { tagContainerStyles } from './Tag.style';
import { TagProps } from './Tag.types';

const Tag = React.forwardRef<HTMLDivElement, DivProps & TagProps>(
  (
    {
      color = 'neutral',
      size = 'normal',
      iconName,
      onSelect,
      onClear,
      isSelected,
      children,
      dataTestPrefixId,
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
        css={tagContainerStyles({ size, color, isSelectable, isClearable, isSelected })}
        ref={ref}
        data-testid={`${dataTestPrefixId}_tag_container`}
        {...rest}
      >
        {prefix}
        {children}
        {suffix}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
