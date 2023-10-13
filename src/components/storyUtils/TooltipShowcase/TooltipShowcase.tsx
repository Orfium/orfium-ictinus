import React from 'react';

import TooltipContent from './components/TooltipContent/TooltipContent';
import Tooltip from '../../Tooltip';
import Button from 'components/Button';
import { TooltipProps } from 'components/Tooltip/Tooltip.types';

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
    <div style={{ padding: '120px' }}>
      <Tooltip
        delayIn={delayIn}
        delayOut={delayOut}
        placement={placement}
        content={<TooltipContent isInverted={isInverted} />}
        isInteractive
        isInverted={isInverted}
      >
        <Button type={isInverted ? 'inverted' : 'primary'}>{buttonText}</Button>
      </Tooltip>
    </div>
  );
};

export default TooltipShowcase;
