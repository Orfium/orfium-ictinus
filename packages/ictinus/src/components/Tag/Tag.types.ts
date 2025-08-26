import type { TestProps } from 'utils/types';

import type { AcceptedIconNames } from 'components/Icon';

export type TagColors = 'neutral' | 'blue' | 'red' | 'purple' | 'teal' | 'orange';

export type TagSizes = 'normal' | 'small';

export type TagProps = {
  /** The color of the Tag
   *  @default 'neutral'
   * */
  color?: TagColors;
  /** The size of the Tag
   *  @default 'normal'
   * */
  size?: TagSizes;
  /** The name of the leading icon. Applies only to read-only Tag  */
  iconName?: AcceptedIconNames;
  /** If provided, the Tag becomes selectable. Callback for when the Tag is clicked */
  onSelect?: () => void;
  /** Whether the selectable Tag is selected (active state) */
  isSelected?: boolean;
  /** If provided, the Tag becomes clearable. Callback for when the clear icon of the Tag is clicked */
  onClear?: () => void;
} & TestProps;
