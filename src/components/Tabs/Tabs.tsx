import React from 'react';

import { Tab, TabList, TabsContainer } from './components';
import { tagStyles } from './Tabs.style';
import { type TabsProps } from './types';
import Tag from '../Tag';

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
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
      <TabList aria-label={props['aria-label']} sx={sx?.tabList}>
        {items.map((item) => {
          const { id, label, counter } = item;

          const isActive = id === selectedKey;

          return (
            <Tab key={id} id={id} data-testid={`${dataTestPrefixId}_tab_${id}`} sx={sx?.tab}>
              <span>{label}</span>
              {Boolean(counter) && (
                <Tag
                  css={tagStyles(isActive)}
                  dataTestPrefixId={`${dataTestPrefixId}_tab_${id}_counter`}
                >
                  {counter}
                </Tag>
              )}
            </Tab>
          );
        })}
      </TabList>
      {children}
    </TabsContainer>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;
