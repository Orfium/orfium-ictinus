import { useFocusRing } from '@react-aria/focus';
import { useListBox, useOption } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { useListState } from '@react-stately/list';
import React from 'react';
import { AriaListBoxProps, useListBoxSection } from 'react-aria';
import { TestProps } from 'utils/types';

import ListItemWrapper from './components/ListItemWrapper/ListItemWrapper';
import { ListItemWrapperStyled } from './components/ListItemWrapper/ListItemWrapper.style';
import { groupedUlStyle, listStyle, wrapperStyle } from './List.style';
import { ListSelected, ListSelection } from './types';
import { COMPACT_LIST_ITEM_HEIGHT, NORMAL_LIST_ITEM_HEIGHT } from './utils';
import Window from './Window';
import useCombinedRefs from '../../hooks/useCombinedRefs';
import { SelectOption } from '../Select';

export type ListProps = {
  /** The label that describes the List, useful to determine aria and accessibility of the list  */
  label: string;
  /** Width of the list */
  width?: number;
  /** Height of the list when you use it as virtualized */
  height?: number;
  /** Virtualized list option */
  isVirtualized?: boolean;
  /** Callback when an item gets a change */
  onSelectionChange?: (keys: ListSelection) => unknown;
  /** Is the actual `key` of the item e.g `<Item key={'item_1'} />` is the `item_1` */
  disabledKeys?: ListSelected;
  /** Is the actual `key` of the item e.g `<Item key={'item_1'} />` is the `item_1` */
  selectedKeys?: ListSelected;
  // @TODO fix this on Select/Filter part as this only affect those
  // /** Search Term to be highlighted in list items */
  // searchTerm?: string;
  // /** Defines if this is searchable list or not **/
  // isSearchable?: boolean;
} & Omit<AriaListBoxProps<SelectOption>, 'selectionMode' | 'onSelectionChange' | 'children'> &
  TestProps &
  Omit<React.InputHTMLAttributes<HTMLUListElement>, 'onChange'>;

/**
 * This is the List component that uses the Window underneath for every UL.
 * Because this component uses the React-Aria abstraction for the List it will also contain the Option and ListBoxSection below
 * as a masked layer to the actual subcomponents
 * */
const List = React.forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const {
    width,
    height,
    isVirtualized = false,
    // isSearchable,
    // searchTerm,
    dataTestId,
  } = props;
  /** ignore the change on the `onSelectionChange` from any to unknown **/
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const state = useListState<SelectOption>({ ...props, selectionMode: 'single' });
  const myRef = React.useRef(null);
  const combinedRefs = useCombinedRefs(myRef, ref);
  /** ignore the change on the `onSelectionChange` from any to unknown **/
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { listBoxProps } = useListBox(props, state, combinedRefs);

  const firstKey = state.collection.getFirstKey();
  const first = firstKey ? state.collection.getItem(firstKey) : null;

  return (
    <div css={wrapperStyle({ width })}>
      <div data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}>
        <div style={{ height: height || '100%' }}>
          <Window
            {...listBoxProps}
            css={listStyle({ width, height })}
            id={listBoxProps.id}
            isVirtualizationEnabled={isVirtualized}
            rowHeight={
              first?.props.rowSize === 'compact'
                ? COMPACT_LIST_ITEM_HEIGHT
                : NORMAL_LIST_ITEM_HEIGHT
            }
            ref={combinedRefs}
          >
            {Array.from(state.collection).map((item) => {
              return item.type === 'section' ? (
                <ListBoxSection key={item.key} section={item} state={state} />
              ) : (
                <Option key={item.key} item={item} state={state} />
              );
            })}
          </Window>
        </div>
      </div>
    </div>
  );
});
List.displayName = 'List';

/**
 * The Option overlay component for React-Aria. The actual subcomponent rendered is the `ListItemWrapper`
 */
function Option({ item, state, style }: { item: any; state: any; style?: any }) {
  // Get props for the option element
  const ref = React.useRef(null);
  const { optionProps, isDisabled } = useOption({ key: item.key }, state, ref);

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, isFocused, focusProps } = useFocusRing();

  return (
    <ListItemWrapper
      {...mergeProps(optionProps, focusProps)}
      id={optionProps.id}
      ref={ref}
      isDisabled={isDisabled}
      style={style}
      data-focus-visible={isFocusVisible || undefined}
      data-focused={isFocused || undefined}
      data-empty={state.collection.size === 0 || undefined}
      rowSize={item.props?.rowSize || 'normal'}
    >
      {item.rendered}
    </ListItemWrapper>
  );
}

/**
 * The Group overlay component for React-Aria. The actual subcomponent rendered is the `Option` which will render
 * `ListItemWrapper` at the end.
 */
function ListBoxSection({ section, state }: any) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      <ListItemWrapperStyled
        {...itemProps}
        rowSize={section.props?.rowSize || 'normal'}
        isDisabled={false}
      >
        {section.rendered && (
          <span {...headingProps} id={headingProps.id}>
            {section.rendered}
          </span>
        )}
        <ul {...groupProps} aria-labelledby={groupProps['aria-labelledby']} css={groupedUlStyle}>
          {[...section.childNodes].map((node) => (
            <Option
              key={node.key}
              item={{
                ...node,
                props: { ...node.props, rowSize: section.props?.rowSize || 'normal' },
              }}
              state={state}
            />
          ))}
        </ul>
      </ListItemWrapperStyled>
    </>
  );
}

export default List;
