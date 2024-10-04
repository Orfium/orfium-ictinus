import React from 'react';
import { Tabs as AriaTabs } from 'react-aria-components';

import type { TabsContainerProps } from '../../types';

const TabsContainer = React.forwardRef<HTMLDivElement, TabsContainerProps>((props, ref) => {
  const { selectedKey, onSelectionChange, orientation, children } = props;

  return (
    <AriaTabs
      css={{ width: 'fit-content' }}
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
