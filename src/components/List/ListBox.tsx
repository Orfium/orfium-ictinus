import { useFocusRing } from '@react-aria/focus';
import { useListBox, useOption } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { useListState } from '@react-stately/list';
import * as React from 'react';
import { forwardRef } from 'react';
import { AriaListBoxProps, useListBoxSection } from 'react-aria';
// import { VariableSizeList as VList } from 'react-window';

import ListItem from './ListItem';
import { listItemStyle } from './ListItem/ListItem.style';
import Window from './Window';
import useCombinedRefs from '../../hooks/useCombinedRefs';
import { SelectOption } from '../Select';

export const ListBox = forwardRef<
  HTMLUListElement,
  AriaListBoxProps<SelectOption> & { height?: number; isVirtualizationEnabled?: boolean }
>((props, ref) => {
  // Create state based on the incoming props
  const state = useListState<SelectOption>(props);
  const myRef = React.useRef(null);
  const combinedRefs = useCombinedRefs(myRef, ref);

  const { listBoxProps } = useListBox(props, state, combinedRefs);

  return (
    <div style={{ height: props.height || '100%' }}>
      <Window
        {...listBoxProps}
        id={listBoxProps.id}
        isVirtualizationEnabled={props.isVirtualizationEnabled}
        rowHeight={46}
        ref={combinedRefs}
      >
        {[...state.collection].map((item) => {
          const options = item?.value?.options;

          return options && options.length > 0 ? (
            <ListBoxSection key={item.key} section={item} state={state} />
          ) : (
            <Option key={item.key} item={item} state={state} />
          );
        })}
      </Window>
    </div>
  );
});
ListBox.displayName = 'ListBox';

function Option({ item, state, style }: { item: any; state: any; style?: any }) {
  // Get props for the option element
  const ref = React.useRef(null);
  const { optionProps, isDisabled } = useOption({ key: item.key }, state, ref);

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, isFocused, focusProps } = useFocusRing();

  return (
    <ListItem
      {...mergeProps(optionProps, focusProps)}
      id={optionProps.id}
      ref={ref}
      isDisabled={isDisabled}
      // css={listItemStyle({ isHighlighted: false, isDisabled })}
      content={item.value}
      style={style}
      data-focus-visible={isFocusVisible || undefined}
      data-focused={isFocused || undefined}
      data-empty={state.collection.size === 0 || undefined}
    />
  );
}

function ListBoxSection({ section, state }: any) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  // If the section is not the first, add a separator element to provide visual separation.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      <li
        {...itemProps}
        css={listItemStyle({ isHighlighted: false, isDisabled: false, isGroupItem: true })}
      >
        {section.rendered && (
          <span {...headingProps} id={headingProps.id}>
            {section.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          aria-labelledby={groupProps['aria-labelledby']}
          style={{
            padding: 0,
            listStyle: 'none',
          }}
        >
          {[...section.childNodes].map((node) => (
            <Option
              key={node.key}
              item={{
                ...node,
                value: section.props.items.find((i: SelectOption) => i.value === node.key),
              }}
              state={state}
            />
          ))}
        </ul>
      </li>
    </>
  );
}
