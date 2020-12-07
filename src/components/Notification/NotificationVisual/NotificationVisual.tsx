/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import Button from '../../Button';
import {
  headingContainer,
  descriptionContainer,
  actionsContainer,
  actionContainer,
} from './NotificationVisual.style';

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
  /** The closing call-to-action of the Notification */
  //   /** The data test id if needed */
  //   dataTestId?: TestId;
};

const NotificationVisual: React.FC<Props> = ({
  title,
  primaryCTALabel,
  primaryCTA,
  secondaryCTALabel,
  secondaryCTA,
  description,
}) => {
  return (
    <React.Fragment>
      <div css={headingContainer()}>{title}</div>
      <div css={descriptionContainer()}>{description}</div>
      <div css={actionsContainer()}>
        <div css={actionContainer()}>
          <Button filled={false} size="sm" onClick={secondaryCTA}>
            {secondaryCTALabel}
          </Button>
        </div>
        <div css={actionContainer()} onClick={primaryCTA}>
          <Button type="secondary" size="sm">
            {primaryCTALabel}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotificationVisual;
