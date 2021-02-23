import { padding } from 'polished';
import React, { useRef } from 'react';

const CustomTooltip = ({ content, children }) => {
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  console.log({ content });

  return (
    <div
      ref={wrapperRef}
      style={{
        width: 'inherit',
        height: 'inherit',
        border: '1px solid #73AD21',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {children}
      <div
        ref={tooltipRef}
        style={{
          display: 'block',
          position: 'fixed',
          top: '-33%',
          left: '110%',
          color: 'white',
          backgroundColor: 'black',
          padding: '8px',
          zIndex: 10000000,
          //   width: 'inherit',
          //   height: 'inherit',
          //   // border: '3px solid #73AD21',
          //   whiteSpace: 'nowrap',
          //   overflow: 'hidden',
          //   textOverflow: 'ellipsis',
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default CustomTooltip;
