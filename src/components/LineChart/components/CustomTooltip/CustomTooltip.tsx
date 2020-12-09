import { rem } from 'polished';
import React from 'react';
import { tooltipStyle } from './CustomTooltip.style';

// const divStyle = {
//   fontSize: '14px',
//   padding: '8px',
//   color: 'white',
//   background: '#232323',
//   opacity: '90%',
//   borderRadius: '4px',
//   minWidth: rem(247),
//   whiteSpace: 'nowrap',
//   // height: rem('148px'),
// };

type Props = {
  label: string;
  payload: Array<T>;
};

const CustomTooltip = ({ label, payload }: Props) => {
  // console.log(payload);

  return (
    <div className="custom-tooltip" css={tooltipStyle()}>
      <p className="label" style={{ margin: '0px' }}>
        {`${label}`}{' '}
      </p>
      {payload.length > 1 && (
        <hr
          style={{
            margin: '17px 0px 13px 0px',
            height: '1px',
            borderWidth: 0,
            backgroundColor: 'rgb(255, 255, 255)',
            opacity: '10%',
          }}
        />
      )}
      {payload && (
        <ul style={{ padding: '0px', margin: '0px' }}>
          {payload.map(({ name, value, datakey, color }) => (
            <li
              key={datakey}
              style={{
                listStyleType: 'none',
                color: color,
                // color: 'rgb(255, 255, 255)',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '16px',
                padding: '2px 0px',
              }}
            >
              <div>{name}</div> <div>{value}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomTooltip;
