import React from 'react';

import { TabStep, TabStepList } from './components';
import type { StepperProps } from './types';
import { TabsContainer } from '../Tabs';

const TabStepper = React.forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  const {
    orientation = 'horizontal',
    selectedKey,
    onSelectionChange,
    items,
    dataTestPrefixId = 'ictinus',
    children,
  } = props;

  return (
    <TabsContainer
      orientation={orientation}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      ref={ref}
    >
      <TabStepList aria-label={props['aria-label']}>
        {items.map((item) => (
          <TabStep
            key={item.id}
            {...item}
            dataTestPrefixId={`${dataTestPrefixId}_tabstep_${item.id}`}
          />
        ))}
      </TabStepList>
      {children}
    </TabsContainer>
  );
});

TabStepper.displayName = 'TabStepper';

export default TabStepper;
