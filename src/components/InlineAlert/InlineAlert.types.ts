import type { ReactElement, ReactNode } from 'react';

export type AlertStatus = 'neutral' | 'informational' | 'error' | 'warning' | 'success';

export interface InlineAlertProps {
  status?: AlertStatus;
  actions?: ReactElement | ReactElement[];
  isAlt?: boolean;
  onDismiss?(): void;
  children: ReactNode;
  className?: string;
  testId?: string;
  hasAutoFocus?: boolean;
}
