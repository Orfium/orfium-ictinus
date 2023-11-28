import type { TestProps } from 'utils/types';

export type ProgressIndicatorProps = {
  /** The type of the progress indicator in terms of shape */
  type?: 'linear' | 'circular';
  /** The value (%) of the progress indicator. If not provided, the progress indicator is indeterminate */
  value?: number;
  /** The status of the progress indicator */
  status?: 'normal' | 'error';
  /** Whether the progress indicator is block-positioned. Only applies for the linear variation */
  isBlock?: boolean;
} & TestProps;
