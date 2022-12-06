import * as React from 'react';

import { TestId } from '../../../utils/types';
import { NotificationStyleType, NotificationTypes } from '../Notification';
import CompactNotification from '../subcomponents/CompactNotification';

export type BannerProps = {
  /** Show notification icon based on the type */
  hasIcon?: boolean;
  /** The title (message heading) of the Notification */
  title: string;
  /** The informative message of the Notification */
  message: string | React.ReactNode;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The style type of the Notification. Defaults to elevated */
  styleType?: NotificationStyleType;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel?: string;
  /** The primary call-to-action of the Notification */
  primaryCTA?: () => void;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const Banner: React.FC<BannerProps> = ({
  hasIcon = false,
  title,
  message,
  type,
  styleType = 'elevated',
  primaryCTALabel,
  primaryCTA = undefined,
  closeCTA = undefined,
  dataTestId,
}) => {
  return (
    <CompactNotification
      hasIcon={hasIcon}
      message={message}
      title={title}
      variant="banner"
      type={type}
      styleType={styleType}
      primaryCTALabel={primaryCTALabel}
      primaryCTA={primaryCTA}
      closeCTA={closeCTA}
      dataTestId={dataTestId}
    />
  );
};

export default Banner;
