import * as React from 'react';

import { TestId } from '../../../utils/types';
import { NotificationActions, NotificationStyleType, NotificationTypes } from '../Notification';
import CompactNotification from '../subcomponents/CompactNotification';

export type Props = {
  /** Show notification icon based on the type */
  withIcon?: boolean;
  /** The title (message heading) of the Notification */
  title: string;
  /** The informative message of the Notification */
  message: string | React.ReactNode;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The style type of the Notification. Defaults to elevated */
  styleType?: NotificationStyleType;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
  /** The data test id if needed */
  dataTestId?: TestId;
  /** The alternative call-to-action label of the Notification */
  alternativeCTALabel?: string;
  /** The alternative call-to-action of the Notification */
  alternativeCTA?: () => void;
} & Pick<NotificationActions, 'primaryCTALabel' | 'primaryCTA'>;

const Banner: React.FC<Props> = ({
  withIcon = false,
  title,
  message,
  type,
  styleType = 'elevated',
  alternativeCTALabel,
  alternativeCTA = undefined,
  primaryCTALabel,
  primaryCTA = undefined,
  closeCTA = undefined,
  dataTestId,
}) => {
  return (
    <CompactNotification
      withIcon={withIcon}
      message={message}
      title={title}
      variant="banner"
      type={type}
      styleType={styleType}
      alternativeCTALabel={alternativeCTALabel}
      alternativeCTA={alternativeCTA}
      primaryCTALabel={primaryCTALabel}
      primaryCTA={primaryCTA}
      closeCTA={closeCTA}
      dataTestId={dataTestId}
    />
  );
};

export default Banner;
