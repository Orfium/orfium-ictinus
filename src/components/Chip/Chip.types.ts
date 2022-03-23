import { ClickEvent } from '../../hooks/useLoading';
import { flatColors } from '../../theme/palette';
import { ButtonProps } from '../../utils/common';
import { TestProps } from '../../utils/types';

export const READ_ONLY = 'read-only' as const;
export const INTERACTIVE = 'interactive' as const;

export const styleType = [READ_ONLY, INTERACTIVE] as const;

export type Props = {
  /**
   * Determines whether the chip should be read-only or interactive.
   * @default read-only
   */
  styleType?: typeof styleType[number];
  /** Defines the fill color of the component, if filled. */
  fill?: typeof flatColors[number];
  /** An optional thumbnail to show to the left. */
  thumbnail?: { src?: string; name?: string };
  /** Boolean defining if the chip is selected. */
  isSelected?: boolean;
  /** Boolean defining if the check icon is shown. */
  isChecked?: boolean;
  /** Defines the number value of the badge */
  badgeNumber?: number;
  /** Callback function for onClick. */
  onClick?: (event: ClickEvent) => void;
  /** A callback that is being triggered when type is interactive and you press the X icon. */
  onClear?: () => void;
  /** Boolean defining if the chip is disabled. Interactive only. */
  disabled?: boolean;
};

export type ChipProps = Props & TestProps & ButtonProps;
