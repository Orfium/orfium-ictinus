/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { NotificationTypes } from '../Notification';
import CompactNotification from '../subcomponents/CompactNotification';

export type Props = {
  /** The informative message of the Toast */
  message: string;
  /** The type of the Notification */
  type: NotificationTypes;
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
  /** The closing call-to-action of the Toast */
  closeCTA: (() => void) | undefined;
  //   /** The data test id if needed */
  //   dataTestId?: TestId;
};

const CardNotification: React.FC<Props> = ({
  message,
  type,
  primaryCTALabel,
  primaryCTA,
  secondaryCTALabel,
  secondaryCTA,
  description,
  closeCTA,
}) => {
  return (
    <CompactNotification
      withIcon={true}
      withFilling={false}
      message={message}
      variant="card"
      type={type}
      primaryCTALabel={primaryCTALabel}
      primaryCTA={primaryCTA}
      secondaryCTALabel={secondaryCTALabel}
      secondaryCTA={secondaryCTA}
      description={description}
      closeCTA={closeCTA}
    />
  );
};

export default CardNotification;
