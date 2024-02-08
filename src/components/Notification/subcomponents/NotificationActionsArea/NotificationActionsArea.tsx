import React from 'react';
import type { TestProps } from 'utils/types';

import { generateTestDataId } from '../../../../utils/helpers';
import Button from '../../../Button';
import type { NotificationActions } from '../../Notification';
import { actionContainer, actionsContainer } from '../../Notification.style';

type Props = NotificationActions & TestProps;

const NotificationActionsArea: React.FCC<Props> = ({
  primaryCTA,
  primaryCTALabel,
  secondaryCTA,
  secondaryCTALabel,
  dataTestPrefixId,
  dataTestId,
}) => {
  return (
    <div css={actionsContainer()}>
      {secondaryCTA && secondaryCTALabel && (
        <div
          css={actionContainer()}
          data-testid={generateTestDataId(`${dataTestPrefixId}-secondary`, dataTestId)}
        >
          <Button type="tertiary" onClick={secondaryCTA}>
            {secondaryCTALabel}
          </Button>
        </div>
      )}
      {primaryCTA && primaryCTALabel && (
        <div
          css={actionContainer()}
          data-testid={generateTestDataId(`${dataTestPrefixId}-primary`, dataTestId)}
        >
          <Button onClick={primaryCTA}>{primaryCTALabel}</Button>
        </div>
      )}
    </div>
  );
};

export default NotificationActionsArea;
