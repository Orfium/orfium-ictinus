import React from 'react';
import { tooltipStyle, tooltipChildrenWrapperStyle } from './Tooltip.style';
import { uuid } from 'uuidv4';
import ReactTooltip from 'react-tooltip';

export type TooltipSize = 'normal' | 'medium' | 'small';

type Props = {
  /** The plain text to show inside the tooltip */
  content: React.ReactNode;
  /** The placement where the tooltip will show */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /** The unique id in order to link content and tooltip */
  /** @default uuid */
  id?: string;
  /** The size of the tooltip to define different style */
  size?: TooltipSize;
};

const Tooltip: React.FC<Props> = ({ id, size = 'medium', children, content, placement }) => {
  const tooltipID = id || uuid();

  return (
    <>
      <div css={tooltipChildrenWrapperStyle()} data-tip data-for={tooltipID}>
        {children}
      </div>
      <ReactTooltip
        css={tooltipStyle({ size })}
        id={tooltipID}
        place={placement}
        effect="solid"
        className="tooltip"
      >
        {content}
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
