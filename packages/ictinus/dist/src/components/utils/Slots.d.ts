import { ReactNode } from 'react';
export declare function useSlotProps<T>(props: T, defaultSlot?: string): any;
/**
 * SlotProvider manages and provides slot props to its descendants.
 * It allows for the definition and inheritance of props for named slots in a component tree.
 *
 * @component
 * @param {Object} [props.slots={}] - An object containing slot names as keys and their corresponding props as values.
 * @param {ReactNode} props.children - The child components to be wrapped by the SlotProvider.
 *
 *  * @example
 * // Register component with the useSlotProps() hook
 * function Button(props) {
 *   props = useSlotProps(props, 'button');
 *
 *   return (
 *     <button {...props}>{props.children}</button>
 *   );
 * }
 *
 * function ButtonsWithPadding(props) {
 *   return (
 *     <SlotProvider slots={{ button: { style: { padding: '1rem' } } }}>
 *       {props.children}
 *     </SlotProvider>
 *   )
 * }
 *
 * <ButtonsWithPadding>
 *   <Button>Button 1</Button> // Gets 1rem padding
 *   <Button>Button 2</Button> // Gets 1rem padding
 * </ButtonsWithPadding>
 *
 * @example
 * // Nested usage
 * <SlotProvider slots={{ outer: { className: 'outer-class' } }}>
 *   <SlotProvider slots={{ inner: { className: 'inner-class' } }}>
 *     <Component />
 *   </SlotProvider>
 * </SlotProvider>
 *
 */
export declare function SlotProvider({ slots, children }: {
    slots?: object;
    children: ReactNode;
}): import("@emotion/react/jsx-runtime").JSX.Element;
/**
 * ClearSlots resets the SlotContext to an empty object for its children.
 * It's used to remove any inherited slot props from parent SlotProviders.
 *
 * @component
 * @param {React.ReactNode} props.children - The child components to be wrapped by ClearSlots.
 *
 * @example
 * // Basic usage
 * <SlotProvider slots={{ text: { color: 'blue' } }}>
 *   <div>
 *     <p {...useSlotProps({}, 'text')}>This text is blue</p>
 *     <ClearSlots>
 *       <p {...useSlotProps({}, 'text')}>This text is black</p>
 *     </ClearSlots>
 *   </div>
 * </SlotProvider>
 *
 * @example
 * // Usage within nested SlotProviders
 * <SlotProvider slots={{ text: { color: 'blue' } }}>
 *   <p {...useSlotProps({}, 'text')}>This text is blue</p>
 *   <ClearSlots>
 *     <SlotProvider slots={{ text: { color: 'red' } }}>
 *       <p {...useSlotProps({}, 'text')}>This text is red, not blue</p>
 *     </SlotProvider>
 *   </ClearSlots>
 * </SlotProvider>
 *
 */
export declare function ClearSlots({ children }: {
    children: ReactNode;
}): import("@emotion/react/jsx-runtime").JSX.Element;
