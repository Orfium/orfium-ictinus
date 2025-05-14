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
    sx,
  } = props;

  return (
    <TabsContainer
      orientation={orientation}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      ref={ref}
      sx={sx?.tabsContainer}
    >
      <TabStepList aria-label={props['aria-label']} sx={sx?.tabStepList}>
        {items.map((item) => (
          <TabStep
            key={item.id}
            {...item}
            dataTestPrefixId={`${dataTestPrefixId}_tabstep_${item.id}`}
            sx={sx?.tabStep}
          />
        ))}
      </TabStepList>
      {children}
    </TabsContainer>
  );
});

TabStepper.displayName = 'TabStepper';

export default TabStepper;
