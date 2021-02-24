import React, { useState, useRef, useCallback, useEffect } from 'react';

type Props = {
  content: React.ReactNode;
  fill: string;
};

const CustomTooltip: React.FC<Props> = ({ content, fill }) => {
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const tooltipRef = useRef(null);
  const [active, setActive] = useState(false);
  const [truncated, setTrancated] = useState(false);

  useEffect(() => {
    setTrancated(
      wrapperRef.current ? wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth : false
    );
  }, [setTrancated]);

  const setActiveOnCallback = useCallback(() => {
    setActive(true);
  }, [setActive]);

  const setActiveOffCallback = useCallback(() => {
    setActive(false);
  }, [setActive]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={setActiveOnCallback}
      onMouseLeave={setActiveOffCallback}
      style={{
        width: 'inherit',
        height: 'inherit',
        color: `${fill}`,
        // border: '1px solid #73AD21',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {content}
      {active && truncated && (
        <>
          <div
            ref={tooltipRef}
            style={{
              display: 'block',
              position: 'fixed',
              top: '-33%',
              left: '106%',
              color: '#ffffff',
              backgroundColor: '#232323',
              opacity: '90%',
              borderRadius: '2px',
              padding: '8px',
            }}
          >
            {content}
          </div>
          <div
            className="tooltip-arrow"
            style={{
              content: '',
              position: 'absolute',
              borderStyle: 'solid',
              marginTop: '-5px',
              borderWidth: '5px',
              borderColor: 'transparent #232323 transparent transparent',
              top: '50%',
              left: '100%',
              opacity: '90%',
            }}
          />
        </>
      )}
    </div>
  );
};

export default CustomTooltip;
