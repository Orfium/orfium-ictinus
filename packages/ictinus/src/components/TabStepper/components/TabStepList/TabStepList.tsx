import React from 'react';
import { TabList as AriaTabList } from 'react-aria-components';

import { containerStyles } from './TabStepList.style';
import type { TabStepListProps } from '../../types';

const TabStepList = React.forwardRef<HTMLDivElement, TabStepListProps>((props, ref) => {
  const { children, sx, ...rest } = props;

  return (
    <AriaTabList css={containerStyles(sx)} ref={ref} {...rest}>
      {children}
    </AriaTabList>
  );
});

TabStepList.displayName = 'TabStepList';

export default TabStepList;
