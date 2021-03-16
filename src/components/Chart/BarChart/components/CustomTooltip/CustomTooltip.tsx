/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { tickStyle, tooltipStyle, tooltipArrowStyle } from './CustomTooltip.style';

type Props = {
  content: React.ReactNode;
  fill: string;
};

const CustomTooltip: React.FC<Props> = ({ content, fill }) => {
  const wrapperRef = useRef<null | HTMLDivElement>(null);
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
      css={tickStyle(fill)}
    >
      {content}
      {active && truncated && (
        <div>
          <div css={tooltipStyle()}>{content}</div>
          <div css={tooltipArrowStyle()} />
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
