import type { ReactElement, ReactNode } from 'react';

import type { TestProps } from '~/utils/types';

/**
 * Represents the possible status values for an inline alert.
 */
export type AlertStatus = 'neutral' | 'informational' | 'error' | 'warning' | 'success';

export interface InlineAlertProps extends TestProps {
  /**
   * The status of the inline alert.
   * @default 'neutral'
   */
  status?: AlertStatus;
  /**
   * The actions to be rendered within the alert.
   * Can be a single ReactElement or an array of ReactElements.
   * @example
   * actions={[
   *   <Button type="tertiary" size="compact">Tertiary</Button>,
   *   <Button size="compact">Primary</Button>
   * ]}
   */
  actions?: ReactElement | ReactElement[];
  /**
   * Whether to use alternative styling for the inline alert.
   * @default false
   */
  isAlt?: boolean;
  /**
   * Callback function for the dismiss button.
   * If not provided, the dismiss button will not be rendered.
   */
  onDismiss?(): void;
  /**
   * The main content of the inline alert.
   */
  children: ReactNode;
  /**
   * Whether the alert should receive focus automatically when rendered.
   * Useful for scenarios where the alert is triggered programmatically.
   * @default false
   */
  hasAutoFocus?: boolean;
  /** Optional css class */
  className?: string;
}
