import React, { useCallback, useMemo, useRef, useState } from 'react';

import { TruncationDiv } from './TruncatedContent.style';
import Tooltip from 'components/Tooltip';

type Props = {
  tooltipContent: string | undefined;
  shouldAlwaysShow?: boolean;
  placement?: 'top' | 'bottom' | 'right' | 'left';
};

const TruncatedContent: React.FC<Props> = ({
  children,
  shouldAlwaysShow = false,
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
      shouldAlwaysShow: boolean
    ) => {
      if (tooltipContent === undefined) {
        return false;
      }

      if (shouldAlwaysShow) {
        return true;
      }

      return isHovered && isTruncated;
    },
    []
  );

  return showTooltip(tooltipContent, isHovered, isTruncated, shouldAlwaysShow) ? (
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
