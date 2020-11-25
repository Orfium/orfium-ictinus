/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { useState } from 'react';
import {
  toastContainer,
  topContainer,
  infoContainer,
  infoIconContainer,
  actionIconsContainer,
  chevronIconContainer,
  closeIconContainer,
  expandedContainer,
  headingContainer,
  descriptionContainer,
  actionsContainer,
  actionContainer,
} from './Toast.style';
import { typeToIconName } from '../CompactNotification/CompactNotification';
import Icon from '../../../Icon';
import Button from '../../../Button';
import { NotificationTypes } from '../../Notification';

export type Props = {
  /** The informative message of the Notification */
  message: string;
  /** The type of the Notification */
  type: NotificationTypes;
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
  closeCTA: (() => void) | undefined;
  //   /** The data test id if needed */
  //   dataTestId?: TestId;
};

const Toast: React.FC<Props> = ({
  message,
  type,
  title,
  primaryCTALabel,
  primaryCTA,
  secondaryCTALabel,
  secondaryCTA,
  description,
  closeCTA,
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div css={toastContainer()}>
      <div css={topContainer(type)}>
        <div css={infoContainer()}>
          <div css={infoIconContainer()}>
            <Icon name={typeToIconName(type)} color="primary" size={24} />
          </div>
          <div>{message}</div>
        </div>
        <div css={actionIconsContainer()}>
          <span css={chevronIconContainer(expanded)} onClick={() => setExpanded(!expanded)}>
            <Icon name="chevronLargeDown" color="primary" size={24} />
          </span>
          <span css={closeIconContainer()} onClick={closeCTA}>
            <Icon name="close" color="primary" size={24} />
          </span>
        </div>
      </div>
      {expanded && (
        <div css={expandedContainer()}>
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
        </div>
      )}
    </div>
  );
};

export default Toast;
