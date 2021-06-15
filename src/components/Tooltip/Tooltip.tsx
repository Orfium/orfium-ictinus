import React from 'react';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { Placement } from 'tippy.js';
import { tooltipStyle, tooltipChildrenWrapperStyle } from './Tooltip.style';

type Props = {
  content: React.ReactNode;
  placement?: Placement;
};

const Tooltip: React.FC<Props> = ({ children, content, placement }) => (
  <Tippy css={tooltipStyle()} content={content} placement={placement}>
    <div css={tooltipChildrenWrapperStyle()}>{children}</div>
  </Tippy>
);

export default Tooltip;
