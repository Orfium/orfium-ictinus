import * as React from 'react';
import type { TestId } from 'utils/types';

import type {
  NotificationActions,
  NotificationStyleType,
  NotificationTypes,
} from '../Notification';
import CompactNotification from '../subcomponents/CompactNotification';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-imports
import type { InlineAlert } from '~/components/InlineAlert';

export type InlineNotificationProps = {
  /** Show notification icon based on the type */
  hasIcon?: boolean;
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
} & Pick<NotificationActions, 'primaryCTALabel' | 'primaryCTA'>;

/**
 *
 * @deprecated {@link InlineNotification} has been deprecated; use {@link InlineAlert} instead.
 *
 */
const InlineNotification: React.FC<InlineNotificationProps> = ({
  hasIcon = false,
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
      variant="inline"
      type={type}
      styleType={styleType}
      primaryCTALabel={primaryCTALabel}
      primaryCTA={primaryCTA}
      closeCTA={closeCTA}
      dataTestId={dataTestId}
    />
  );
};

export default InlineNotification;
