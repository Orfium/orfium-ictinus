import { ReactComponentLike } from 'prop-types';
import * as React from 'react';

import { TestProps } from '../../utils/types';

export type SharedProps = {
  /**
   * A function accepting a click handler and a boolean representing the current expansion state. Returns the elements containing the text and the
   * expand/collapse button
   * */
  textAndControl: (x: React.ReactEventHandler, y: boolean) => React.ReactElement;
  /**
   * The type of the component that wraps the action and content. Must be able to hold a
   * `data-testid` prop
   *
   * @default div
   */
  component?: ReactComponentLike;
  /**
   * Initial expansion state.
   *
   * @default false
   */
  initiallyExpanded?: boolean;
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
  content?: (x: boolean) => React.ReactNode;
  /**
   * A function accepting a boolean representing the current expansion state. Returns the
   * collapsible/expandable content. Mutually exclusive with content.
   */
  children?: (x: boolean) => React.ReactNode;
} & TestProps;

export type ExternalProps = {
  /**
   * Defining this prop means that the component is controlled
   *
   * @default false
   */
  expanded: boolean;
  /**
   * Change handler for the case when the component is controlled
   */
  onChange: React.ReactEventHandler;
};

export type InternalProps = {
  /**
   * Defining this prop means that the component is controlled
   *
   * @default false
   */
  expanded: undefined;
  /**
   * Change handler for the case when the component is controlled
   */
  onChange: undefined;
};

export type Props = SharedProps & (InternalProps | ExternalProps);
