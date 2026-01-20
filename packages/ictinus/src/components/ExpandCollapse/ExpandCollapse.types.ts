
import { type ElementType, type ReactElement, type ReactEventHandler, type ReactNode } from 'react';
import type { TestProps } from 'utils/types';

export type SharedProps = {
  /**
   * A function accepting a click handler and a boolean representing the current expansion state. Returns the elements containing the text and the
   * expand/collapse button
   * */
  textAndControl: (x: ReactEventHandler, y: boolean) => ReactElement;
  /**
   * The type of the component that wraps the action and content. Must be able to hold a
   * `data-testid` prop
   *
   * @default div
   */
  component?: ElementType;
  /**
   * Initial expansion state.
   *
   * @default false
   */
  isInitiallyExpanded?: boolean;
  /**
   * The duration for the appear transition
   *
   * @default 200
   */
  transitionDuration?: number;
  /**
   * A function accepting a boolean representing the current expansion state. Returns the
   * collapsible/expandable content. Mutually exclusive with children.
   */
  content?: (x: boolean) => ReactNode;
  /**
   * A function accepting a boolean representing the current expansion state. Returns the
   * collapsible/expandable content. Mutually exclusive with content.
   */
  children?: (x: boolean) => ReactNode;
} & TestProps;

export type ExternalProps = {
  /**
   * Defining this prop means that the component is controlled
   *
   * @default false
   */
  isExpanded: true;
  /**
   * Change handler for the case when the component is controlled
   */
  onChange: ReactEventHandler;
};

export type InternalProps = {
  /**
   * Defining this prop means that the component is controlled
   *
   * @default false
   */
  isExpanded?: never;
  /**
   * Change handler for the case when the component is controlled
   */
  onChange?: never;
};

export type ExpandCollapseProps = SharedProps & (InternalProps | ExternalProps);
