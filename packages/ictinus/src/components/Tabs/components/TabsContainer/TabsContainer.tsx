import React from 'react';
import { Tabs as AriaTabs } from 'react-aria-components';

import { tabsContainerStyles } from './TabsContainer.style';
import type { TabsContainerProps } from '../../types';

const TabsContainer = React.forwardRef<HTMLDivElement, TabsContainerProps>((props, ref) => {
  const { selectedKey, onSelectionChange, orientation = 'horizontal', sx, children } = props;

  return (
    <AriaTabs
      css={tabsContainerStyles(orientation, sx)}
      orientation={orientation}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      ref={ref}
    >
      {children}
    </AriaTabs>
  );
});

TabsContainer.displayName = 'TabsContainer';

export default TabsContainer;
