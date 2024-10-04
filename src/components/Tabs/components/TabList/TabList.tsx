import React from 'react';
import { TabList as AriaTabList } from 'react-aria-components';

import { containerStyles } from './TabList.style';
import type { TabListProps } from '../../types';

const TabList = React.forwardRef<HTMLDivElement, TabListProps>((props, ref) => {
  const { children, sx, ...rest } = props;

  return (
    <AriaTabList css={containerStyles(sx)} ref={ref} {...rest}>
      {children}
    </AriaTabList>
  );
});

TabList.displayName = 'TabList';

export default TabList;
