import React from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { HoverInfo } from '../../BarChart';
import { tooltipLiStyle, tooltipStyle, tooltipUlStyle } from './CustomTooltipContent.style';

const CustomTooltipContent: React.FC<TooltipProps<ValueType, NameType>> = ({ payload }) => {
  const options: HoverInfo[] | undefined = payload && (payload[0]?.payload?.options?.hoverInfo as HoverInfo[]);

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
