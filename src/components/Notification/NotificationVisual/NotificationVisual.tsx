/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import Button from '../../Button';
import { actionContainer, actionsContainer, boldMessageContainer } from '../Notification.style';
import { visualContainer, descriptionContainer } from './NotificationVisual.style';
import { TestId } from '../../../utils/types';
import { generateTestDataId } from '../../../utils/helpers';

export type Props = {
  /** The message heading of the Notification */
  title: string | undefined;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel: string | undefined;
  /** The primary call-to-action of the Notification */
  primaryCTA: (() => void) | undefined;
  /** The secondary call-to-action label of the Notification */
  secondaryCTALabel: string | undefined;
  /** The secondary call-to-action of the Notification */
  secondaryCTA: (() => void) | undefined;
  /** The description of the Notification (only for toast) */
  description: string | undefined;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const NotificationVisual: React.FC<Props> = ({
  title,
  primaryCTALabel = 'OK',
  primaryCTA,
  secondaryCTALabel = 'Cancel',
  secondaryCTA,
  description,
  dataTestId,
}) => {
  return (
    <div css={visualContainer()}>
      <div css={boldMessageContainer()}>{title}</div>
      <div css={descriptionContainer()}>{description}</div>
      <div css={actionsContainer()}>
        <div
          css={actionContainer()}
          data-testid={generateTestDataId('visual-secondary', dataTestId)}
        >
          <Button filled={false} size="sm" onClick={secondaryCTA}>
            {secondaryCTALabel}
          </Button>
        </div>
        <div css={actionContainer()} data-testid={generateTestDataId('visual-primary', dataTestId)}>
          <Button type="branded1" size="sm" onClick={primaryCTA}>
            {primaryCTALabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationVisual;
