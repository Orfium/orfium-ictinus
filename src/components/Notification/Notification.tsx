/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import CompactNotification from './subcomponents/CompactNotification';

export type NotificationTypes = 'success' | 'error' | 'info' | 'alert';

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
  /** The primary call-to-action label of the Notification */
  primaryCTALabel?: string;
  /** The primary call-to-action of the Notification */
  primaryCTA?: () => void;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
};

const Notification: React.FC<Props> = ({
  message,
  variant,
  type,
  withIcon = true,
  withFilling = false,
  primaryCTALabel,
  primaryCTA = undefined,
  closeCTA = undefined,
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
        />
      ) : (
        <p>This type is not yet supported</p>
      )}
    </React.Fragment>
  );
};

export default Notification;
