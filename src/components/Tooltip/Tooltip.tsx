import Tippy from '@tippyjs/react';
import React from 'react';

import { tooltipStyle } from './Tooltip.style';

export type TooltipSize = 'large' | 'medium' | 'small';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

type Props = {
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
  children: React.ReactElement;
};

const Tooltip: React.FC<Props> = ({
  id,
  size = 'medium',
  children,
  content,
  placement = 'top',
  isTransparent = false,
}) => {
  return (
    <Tippy
      data-testid={id}
      css={tooltipStyle({ size, isTransparent })}
      content={content}
      placement={placement}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
