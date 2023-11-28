import React from 'react';
import type { TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { tooltipLiStyle, tooltipStyle, tooltipUlStyle } from './CustomTooltipContent.style';
import type { HoverInfo } from '../../BarChart';

const CustomTooltipContent: React.FCC<TooltipProps<ValueType, NameType>> = ({ payload }) => {
  const options: HoverInfo[] | undefined =
    payload && (payload[0]?.payload?.options?.hoverInfo as HoverInfo[]);

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

export default CustomTooltipContent;
