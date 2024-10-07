import type { ReactElement, ReactNode } from 'react';

import type { TestProps } from '~/utils/types';

/**
 * Represents the possible status values for a broadcast.
 */
export type BroadcastStatus = 'neutral' | 'informational' | 'error' | 'warning' | 'success';

export interface BroadcastProps extends TestProps {
  /**
   * The status of the broadcast.
   * @default 'neutral'
   */
  status?: BroadcastStatus;
  /**
   * The actions to be rendered within the broadcast.
   * Can be a single ReactElement or an array of ReactElements.
   * @example
   * actions={[
   *   <Button type="tertiary">Tertiary</Button>,
   *   <Button>Primary</Button>
   * ]}
   */
  actions?: ReactElement | ReactElement[];
  /**
   * Whether to use alternative styling for the broadcast.
   * @default false
   */
  isAlt?: boolean;
  /**
   * Callback function for the dismiss button.
   * If not provided, the dismiss button will not be rendered.
   */
  onDismiss?(): void;
  /**
   * The main content of the broadcast.
   */
  children: ReactNode;
  /**
   * Whether the broadcast should receive focus automatically when rendered.
   * Useful for scenarios where the broadcast is triggered programmatically.
   * @default false
   */
  hasAutoFocus?: boolean;
  /** Optional css class */
  className?: string;
}
