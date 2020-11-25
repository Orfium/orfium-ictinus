/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import CompactNotification from './subcomponents/CompactNotification';
import Toast from './subcomponents/Toast';
import { TestId } from '../../utils/types';

export type NotificationTypes = 'success' | 'error' | 'info' | 'warning';

export type NotificationVariants = 'inline';

export type Props = {
  /** The informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: NotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** Show notification icon based on the type */
  withIcon: boolean;
  /** Use color filling */
  withFilling: boolean;
  /** The message heading of the Notification */
  title?: string;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel?: string;
  /** The primary call-to-action of the Notification */
  primaryCTA?: () => void;
  /** The secondary call-to-action label of the Notification */
  secondaryCTALabel?: string;
  /** The secondary call-to-action of the Notification */
  secondaryCTA?: () => void;
  /** The description of the Notification (only for toast) */
  description?: string;
  /** Make Notification expandable (only for toast) */
  expandable?: boolean;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const Notification: React.FC<Props> = ({
  message,
  variant,
  type,
  withIcon = true,
  withFilling = false,
  title,
  primaryCTALabel,
  primaryCTA = undefined,
  secondaryCTALabel,
  secondaryCTA = undefined,
  description,
  expandable = true,
  closeCTA = undefined,
  dataTestId,
}) => {
  return (
    <React.Fragment>
      {variant === 'inline' ? (
        <CompactNotification
          message={message}
          variant={variant}
          type={type}
          withIcon={withIcon}
          withFilling={withFilling}
          primaryCTALabel={primaryCTALabel}
          primaryCTA={primaryCTA}
          closeCTA={closeCTA}
          dataTestId={dataTestId}
        />
      ) : variant === 'toast' ? (
        <Toast
          message={message}
          title={title}
          description={description}
          type={type}
          primaryCTALabel={primaryCTALabel}
          primaryCTA={primaryCTA}
          secondaryCTALabel={secondaryCTALabel}
          secondaryCTA={secondaryCTA}
          closeCTA={closeCTA}
        />
      ) : (
        <p>This type is not yet supported</p>
      )}
    </React.Fragment>
  );
};

export default Notification;
