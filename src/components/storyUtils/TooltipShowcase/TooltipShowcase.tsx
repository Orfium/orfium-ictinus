import React from 'react';

import TooltipContent from './components/TooltipContent/TooltipContent';
import Tooltip from '../../Tooltip';
import Button from 'components/Button';
import type { TooltipProps } from 'components/Tooltip/Tooltip.types';

const TooltipShowcase = ({
  buttonText = 'Hover here',
  isInverted = false,
  delayIn,
  delayOut,
  placement = 'right',
}: Pick<TooltipProps, 'isInverted' | 'delayIn' | 'delayOut' | 'placement'> & {
  buttonText?: string;
}) => {
  return (
    <div style={{ padding: '128px' }}>
      <Tooltip
        delayIn={delayIn}
        delayOut={delayOut}
        placement={placement}
        content={<TooltipContent isInverted={isInverted} />}
        isInteractive
        isInverted={isInverted}
        data-testid="tooltip-button"
      >
        <Button>{buttonText}</Button>
      </Tooltip>
    </div>
  );
};

export default TooltipShowcase;
