import { TestProps } from 'utils/types';

export type ProgressIndicatorProps = {
  /** The type of the progress indicator in terms of shape */
  type?: 'linear' | 'circular';
  /** The value (%) of the progress indicator. If not provided, the progress indicator is indeterminate */
  value?: number;
  /** The status of the progress indicator */
  status?: 'normal' | 'error';
  /** The size of the progress indicator. Only applies for the circular variation */
  size?: 'small' | 'normal';
  /** Whether the progress indicator has border-radius. Only applies for the linear variation */
  hasBorderRadius?: boolean;
} & TestProps;
