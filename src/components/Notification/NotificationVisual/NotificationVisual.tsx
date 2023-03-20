import * as React from 'react';

import { generateTestDataId } from '../../../utils/helpers';
import { TestId } from '../../../utils/types';
import Button from '../../Button';
import { NotificationActions } from '../Notification';
import { actionContainer, actionsContainer, boldMessageContainer } from '../Notification.style';
import { visualContainer, descriptionContainer } from './NotificationVisual.style';

export type Props = {
  /** The message heading of the Notification */
  title: string | undefined;
  /** The description of the Notification (only for toast) */
  description: string | undefined;
  /** The data test id if needed */
  dataTestId?: TestId;
} & NotificationActions;

const NotificationVisual: React.FC<Props> = ({
  title,
  primaryCTALabel = 'OK',
  primaryCTA,
  secondaryCTALabel = 'Cancel',
  secondaryCTA,
  description,
  dataTestId,
}) => {
  const hasActions = (primaryCTA && primaryCTALabel) || (secondaryCTA && secondaryCTALabel);

  return (
    <div css={visualContainer()}>
      <div css={boldMessageContainer()}>{title}</div>
      <div css={descriptionContainer()}>{description}</div>
      {hasActions && (
        <div css={actionsContainer()}>
          {secondaryCTA && secondaryCTALabel && (
            <div
              css={actionContainer()}
              data-testid={generateTestDataId('visual-secondary', dataTestId)}
            >
              <Button type={'link'} transparent size="sm" onClick={secondaryCTA}>
                {secondaryCTALabel}
              </Button>
            </div>
          )}
          {primaryCTA && primaryCTALabel && (
            <div
              css={actionContainer()}
              data-testid={generateTestDataId('visual-primary', dataTestId)}
            >
              <Button type={'link'} transparent size="sm" onClick={primaryCTA}>
                {primaryCTALabel}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationVisual;
