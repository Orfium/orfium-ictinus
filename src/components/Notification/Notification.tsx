/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import CompactNotification from './subcomponents/CompactNotification';

export type NotificationTypes = 'success' | 'error' | 'info' | 'alert';

export type NotificationVariants = 'inline' | 'banner' | 'toast' | 'modal';

export type Props = {
  /** Show notification icon based on the type */
  withIcon: boolean;
  /** Use color filling */
  withFilling: boolean;
  /** The (message) informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: NotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel: string;
  /** The primary call-to-action of the Notification */
  primaryCTA: () => void;
  /** The title (message heading) of the Notification */
  title?: string;
  /** The description of the Notification */
  description?: string;
  /** The secondary call-to-action label of the Notification */
  secondaryCTALabel?: string;
  /** The secondary call-to-action of the Notification */
  secondaryCTA?: () => void;
};

const Notification: React.FC<Props> = ({
  withIcon,
  withFilling,
  message,
  variant,
  type,
  primaryCTALabel,
  primaryCTA,
  title,
  description,
  secondaryCTALabel,
  secondaryCTA,
}) => {
  return (
    <React.Fragment>
      {variant === 'inline' ? (
        <CompactNotification
          withIcon={withIcon}
          withFilling={withFilling}
          message={message}
          variant={variant}
          type={type}
          primaryCTALabel={primaryCTALabel}
          primaryCTA={primaryCTA}
        />
      ) : variant === 'banner' ? (
        <CompactNotification
          withIcon={withIcon}
          withFilling={withFilling}
          message={message}
          title={title}
          variant={variant}
          type={type}
          primaryCTALabel={primaryCTALabel}
          primaryCTA={primaryCTA}
        />
      ) : (
        <p>This type is not yet supported</p>
      )}
    </React.Fragment>
  );
};

export default Notification;
