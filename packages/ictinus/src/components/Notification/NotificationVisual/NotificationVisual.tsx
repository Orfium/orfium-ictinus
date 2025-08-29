import * as React from 'react';
import { generateTestDataId } from 'utils/helpers';
import type { TestId } from 'utils/types';

import { visualContainer, descriptionContainer } from './NotificationVisual.style';
import type { NotificationActions } from '../Notification';
import { boldMessageContainer } from '../Notification.style';
import NotificationActionsArea from '../subcomponents/NotificationActionsArea';

export type NotificationVisualProps = {
  /** The message heading of the Notification */
  title: string | undefined;
  /** The description of the Notification (only for toast) */
  description: string | undefined;
  /** The data test id if needed */
  dataTestId?: TestId;
} & NotificationActions;

const NotificationVisual: React.FCC<NotificationVisualProps> = ({
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
      <div
        css={boldMessageContainer()}
        data-testid={generateTestDataId('visual-title', dataTestId)}
      >
        {title}
      </div>
      <div
        css={descriptionContainer()}
        data-testid={generateTestDataId('visual-description', dataTestId)}
      >
        {description}
      </div>
      {hasActions && (
        <NotificationActionsArea
          primaryCTA={primaryCTA}
          primaryCTALabel={primaryCTALabel}
          secondaryCTA={secondaryCTA}
          secondaryCTALabel={secondaryCTALabel}
          dataTestPrefixId="visual"
          dataTestId={dataTestId}
        />
      )}
    </div>
  );
};

export default NotificationVisual;
