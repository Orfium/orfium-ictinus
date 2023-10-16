import Tippy from '@tippyjs/react';
import React from 'react';

import { tooltipStyle } from './Tooltip.style';
import { TooltipProps } from './Tooltip.types';

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      placement = 'right',
      isInverted = false,
      isInteractive = false,
      delayIn = 500,
      delayOut = 500,
    },
    ref
  ) => {
    return (
      <Tippy
        css={tooltipStyle({ isInverted, isInteractive })}
        content={content}
        placement={placement}
        interactive={isInteractive}
        arrow={!isInteractive}
        delay={[delayIn, delayOut]}
        ref={ref}
      >
        {children}
      </Tippy>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
