import React, { useState, useRef, useCallback, useEffect } from 'react';

import { tickStyle, tooltipStyle, tooltipArrowStyle } from './CustomTooltip.style';

type CustomTooltipProps = {
  content: React.ReactNode;
  fill: string;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ content, fill }) => {
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isTruncated, setIsTrancated] = useState(false);

  useEffect(() => {
    setIsTrancated(
      wrapperRef.current ? wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth : false
    );
  }, [setIsTrancated]);

  const setActiveOnCallback = useCallback(() => {
    setIsActive(true);
  }, [setIsActive]);

  const setActiveOffCallback = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={setActiveOnCallback}
      onMouseLeave={setActiveOffCallback}
      css={tickStyle(fill)}
    >
      {content}
      {isActive && isTruncated && (
        <div>
          <div css={tooltipStyle()}>{content}</div>
          <div css={tooltipArrowStyle()} />
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
