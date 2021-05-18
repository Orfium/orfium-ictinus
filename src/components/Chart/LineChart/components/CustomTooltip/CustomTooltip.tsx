import React from 'react';
import { TooltipProps } from 'recharts';
import {
  tooltipHrStyle,
  tooltipLiStyle,
  tooltipStyle,
  tooltipUlStyle,
} from './CustomTooltip.style';

const CustomTooltip: React.FC<TooltipProps> = ({ label, payload }) => {
  return (
    <div className="custom-tooltip" css={tooltipStyle()}>
      <p className="label" style={{ margin: '0px' }}>
        {`${label}`}{' '}
      </p>
      {payload && payload.length > 1 && <hr css={tooltipHrStyle()} />}
      {payload && (
        <ul css={tooltipUlStyle()}>
          {payload.map(({ name, value }) => (
            <li key={name} css={tooltipLiStyle()}>
              <div>{name}</div> <div>{value}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomTooltip;
