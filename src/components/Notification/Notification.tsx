/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import CompactNotification from './subcomponents/CompactNotification';

export type NotificationTypes = 'success' | 'error' | 'info' | 'alert';

export type NotificationVariants = 'inline' | 'banner';

export type Props = {
  /** Show notification icon based on the type */
  withIcon: boolean;
  /** Use color filling */
  withFilling: boolean;
  /** The informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: NotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel: string;
  /** The primary call-to-action of the Notification */
  primaryCTA: () => void;
  /** The closing call-to-action of the Notification */
  onCloseCTA: () => void;
  /** The title (message heading) of the Notification */
  title?: string;
};

const Notification: React.FC<Props> = ({
  withIcon = true,
  withFilling = false,
  message,
  variant = 'inline',
  type = 'info',
  primaryCTALabel,
  primaryCTA,
  onCloseCTA,
  title,
}) => {
  return (
    <React.Fragment>
      {variant === 'inline' || variant === 'banner' ? (
        <CompactNotification
          withIcon={withIcon}
          withFilling={withFilling}
          message={message}
          title={title}
          variant={variant}
          type={type}
          primaryCTALabel={primaryCTALabel}
          primaryCTA={primaryCTA}
          onCloseCTA={onCloseCTA}
        />
      ) : (
        <p>This type is not yet supported</p>
      )}
    </React.Fragment>
  );
};

export default Notification;
