import React from 'react';
import { TabPanel as ReactAriaTabPanel } from 'react-aria-components';

import type { TabPanelProps } from '../../types';

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <ReactAriaTabPanel {...rest} ref={ref}>
      {children}
    </ReactAriaTabPanel>
  );
});

TabPanel.displayName = 'TabPanel';

export default TabPanel;
