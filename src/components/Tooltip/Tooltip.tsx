import { uniqueId } from 'lodash-es';
import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import type { TooltipProps } from './Tooltip.types';
import { tooltipStyle } from 'components/Tooltip/Tooltip.style';

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      id = uniqueId('tooltip'),
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
      <div css={tooltipStyle({ isInverted, isInteractive })}>
        <span data-tooltip-id={id} ref={ref}>
          {children}
        </span>
        <ReactTooltip
          id={id}
          place={placement}
          delayShow={delayIn}
          delayHide={delayOut}
          clickable={isInteractive}
          className="tooltip"
        >
          {content}
        </ReactTooltip>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
