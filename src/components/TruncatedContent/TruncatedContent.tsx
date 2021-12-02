import React, { useCallback, useMemo, useRef, useState } from 'react';

import { TruncationDiv } from './TruncatedContent.style';
import Tooltip from 'components/Tooltip';

type Props = {
  /** The content of the tooltip */
  tooltipContent: string | undefined;
  /** The placement of the tooltip */
  placement?: 'top' | 'bottom' | 'right' | 'left';
};

const TruncatedContent: React.FC<Props> = ({ children, tooltipContent, placement = 'bottom' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null);
  const target = targetRef.current;

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const isTruncated = useMemo(() => {
    return !!target && target.scrollWidth > target.offsetWidth;
  }, [target, target?.offsetWidth]);

  const showTooltip = useCallback(
    (tooltipContent: string | undefined, isHovered: boolean, isTruncated: boolean) => {
      if (tooltipContent === undefined) {
        return false;
      }

      return isHovered && isTruncated;
    },
    []
  );

  return showTooltip(tooltipContent, isHovered, isTruncated) ? (
    <Tooltip placement={placement} content={tooltipContent}>
      <TruncationDiv
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </TruncationDiv>
    </Tooltip>
  ) : (
    <TruncationDiv ref={targetRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </TruncationDiv>
  );
};

export default TruncatedContent;
