import { Button, Tooltip, type TooltipProps } from '@orfium/ictinus';
import TooltipContent from './components/TooltipContent/TooltipContent';

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
