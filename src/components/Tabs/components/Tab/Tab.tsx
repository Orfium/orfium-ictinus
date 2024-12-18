import React from 'react';
import { Tab as ReactAriaTab } from 'react-aria-components';

import { containerStyles } from './Tab.style';
import type { TabProps } from '../../types';

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { children, tabId, ...rest } = props;

  return (
    <ReactAriaTab css={containerStyles()} id={tabId} {...rest} ref={ref}>
      {children}
    </ReactAriaTab>
  );
});

Tab.displayName = 'Tab';

export default Tab;
