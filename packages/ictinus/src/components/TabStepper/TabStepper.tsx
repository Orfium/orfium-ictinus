import React from 'react';
import { TabsContainer } from '~/components/Tabs';
import { TabStep, TabStepList } from './components';
import type { StepperProps } from './types';

const TabStepper = React.forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  const {
    orientation = 'horizontal',
    selectedKey,
    onSelectionChange,
    items,
    iconPosition = 'adjacent',
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
            iconPosition={iconPosition}
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
