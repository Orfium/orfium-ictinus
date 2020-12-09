import React from 'react';
import {
  tooltipHrStyle,
  tooltipLiStyle,
  tooltipStyle,
  tooltipUlStyle,
} from './CustomTooltip.style';
import {TooltipPayload} from 'recharts'


type Props = {
  label: string;
  payload: TooltipPayload[];
};

const CustomTooltip = ({ label, payload }: Props) => {
  // console.log(payload);

  return (
    <div className="custom-tooltip" css={tooltipStyle()}>
      <p className="label" style={{ margin: '0px' }}>
        {`${label}`}{' '}
      </p>
      {payload.length > 1 && <hr css={tooltipHrStyle()} />}
      {payload && (
        <ul css={tooltipUlStyle()}>
          {payload.map(({ name, value, color }) => (
            <li key={name} css={tooltipLiStyle(color)}>
              <div>{name}</div> <div>{value}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomTooltip;
