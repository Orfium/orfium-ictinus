/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import CompactNotification from './subcomponents/CompactNotification';
import BannersContainer from './subcomponents/BannersContainer';

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
  primaryCTALabel?: string;
  /** The primary call-to-action of the Notification */
  primaryCTA?: () => void;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
  /** The title (message heading) of the Notification */
  title?: string;
  /** Banner placed at the top */
  top?: boolean;
  /** Banner placed at the bottom */
  bottom?: boolean;
  /** Banner placed at the left */
  left?: boolean;
  /** Banner placed at the right */
  right?: boolean;
};

const Notification: React.FC<Props> = ({
  withIcon = true,
  withFilling = false,
  message,
  variant = 'inline',
  type = 'info',
  primaryCTALabel,
  primaryCTA = undefined,
  closeCTA = undefined,
  title,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <React.Fragment>
      {variant === 'inline' ? (
        <CompactNotification
          withIcon={withIcon}
          withFilling={withFilling}
          message={message}
          title={title}
          variant={variant}
          type={type}
          primaryCTALabel={primaryCTALabel}
          primaryCTA={primaryCTA}
          closeCTA={closeCTA}
        />
      ) : variant === 'banner' ? (
        <BannersContainer top={top} bottom={bottom} left={left} right={right}>
          <CompactNotification
            withIcon={withIcon}
            withFilling={withFilling}
            message={message}
            title={title}
            variant={variant}
            type={type}
            primaryCTALabel={primaryCTALabel}
            primaryCTA={primaryCTA}
            closeCTA={closeCTA}
          />
          <CompactNotification
            withIcon={withIcon}
            withFilling={withFilling}
            message={message}
            title={title}
            variant={variant}
            type={type}
            primaryCTALabel={primaryCTALabel}
            primaryCTA={primaryCTA}
            closeCTA={closeCTA}
          />
        </BannersContainer>
      ) : (
        <p>This type is not yet supported</p>
      )}
    </React.Fragment>
  );
};

export default Notification;
