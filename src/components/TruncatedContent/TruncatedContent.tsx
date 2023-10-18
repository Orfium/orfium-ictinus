import React, { useCallback, useMemo, useRef, useState } from 'react';

import { TruncationDiv } from './TruncatedContent.style';
import Tooltip from 'components/Tooltip';

export type TruncatedContentProps = {
  /** The content of the tooltip */
  tooltipContent: string | undefined;
  /** Flag for overriding other settings to always show the tooltip */
  isAlwaysVisible?: boolean;
  /** The placement of the tooltip */
  placement?: 'top' | 'bottom' | 'right' | 'left';
};

const TruncatedContent: React.FC<TruncatedContentProps> = ({
  children,
  isAlwaysVisible = false,
  tooltipContent,
  placement = 'bottom',
}) => {
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
  }, [target]);

  const showTooltip = useCallback(
    (
      tooltipContent: string | undefined,
      isHovered: boolean,
      isTruncated: boolean,
      isAlwaysVisible: boolean
    ) => {
      if (tooltipContent === undefined) {
        return false;
      }

      if (isAlwaysVisible) {
        return true;
      }

      return isHovered && isTruncated;
    },
    []
  );

  return showTooltip(tooltipContent, isHovered, isTruncated, isAlwaysVisible) && tooltipContent ? (
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
