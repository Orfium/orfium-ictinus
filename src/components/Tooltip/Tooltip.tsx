import Tippy from '@tippyjs/react';
import React from 'react';

import { tooltipStyle } from './Tooltip.style';

export type TooltipSize = 'large' | 'medium' | 'small';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export type Props = {
  /** The plain text to show inside the tooltip */
  content: React.ReactNode;
  /** The placement where the tooltip will show */
  /** @default top */
  placement?: TooltipPlacement;
  /** Whether the tooltip is transparent or not - for cases
   * where the content is a custom component
   */
  /** @default false */
  isTransparent?: boolean;
  /** The unique id in order to link content and tooltip */
  /** @default uuid */
  id?: string;
  /** The size of the tooltip to define different style */
  /** @default medium */
  size?: TooltipSize;
  /** Determines if the tooltip is interactive, i.e. it can be
   * hovered over or clicked without hiding */
  /** @default false */
  interactive?: boolean;
  /** Number in ms to debounce the internal onMouseMove handler
   * which determines when an interactive tooltip should hide. */
  /** @default 100 */
  delay?: number;
  children: React.ReactElement;
};

const Tooltip: React.FC<Props> = ({
  size = 'medium',
  children,
  content,
  placement = 'top',
  isTransparent = false,
  interactive = false,
  delay = 100,
}) => {
  return (
    <Tippy
      css={tooltipStyle({ size, isTransparent })}
      content={content}
      placement={placement}
      interactive={interactive}
      interactiveDebounce={delay}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
