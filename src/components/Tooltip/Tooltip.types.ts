export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export type InteractiveTooltip = {
  isInteractive: true;
  content: React.ReactNode;
};

export type TextTooltip = {
  isInteractive?: false;
  content: string;
};

export type TooltipContent = InteractiveTooltip | TextTooltip;

export type TooltipProps = TooltipContent & {
  /** Whether the tooltip's style is inverted */
  /** @default false */
  isInverted?: boolean;
  /** The placement where the tooltip will show */
  /** @default top */
  placement?: TooltipPlacement;
  /** The unique id in order to link content and tooltip */
  /** @default uuid */
  id?: string;
  /** Show delay for tooltip */
  /** @default 500 */
  delayIn?: number;
  /** Hide delay for tooltip */
  /** @default 500 */
  delayOut?: number;
  children: React.ReactElement;
};
