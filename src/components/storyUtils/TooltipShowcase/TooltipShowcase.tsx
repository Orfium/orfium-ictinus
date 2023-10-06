import React from 'react';

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
    <div style={{ padding: '48px' }}>
      <Tooltip
        delayIn={delayIn}
        delayOut={delayOut}
        placement={placement}
        content={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: isInverted ? '#DCDFFF' : '#434666',
              padding: '8px',
              width: '240px',
              color: isInverted ? 'black' : 'white',
              border: '1px solid' + isInverted ? '#DCDFFF' : '#434666',
              borderRadius: '4px',
            }}
          >
            <div>This container is custom content</div>
            <Button>Hello there mate</Button>
          </div>
        }
        isInteractive
        isInverted={isInverted}
      >
        <Button>{buttonText}</Button>
      </Tooltip>
    </div>
  );
};

export default TooltipShowcase;
