import React from 'react';
import { TooltipProps } from 'recharts';

import { tooltipLiStyle, tooltipStyle, tooltipUlStyle } from './CustomTooltipContent.style';
import { HoverInfo } from '../../BarChart';

const CustomTooltip: React.FC<TooltipProps> = ({ payload }) => {
  const options = payload && (payload[0]?.payload?.options?.hoverInfo as HoverInfo[]);

  return options ? (
    <div className="custom-tooltip" css={tooltipStyle()}>
      <ul css={tooltipUlStyle()}>
        {options.map(({ name, value, percentage }) => (
          <li key={`${name}${value}`} css={tooltipLiStyle()}>
            <div>{name}</div>
            <div>
              <span>
                <b>{value}</b>
              </span>
              {percentage && <span>({percentage})</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default CustomTooltip;
