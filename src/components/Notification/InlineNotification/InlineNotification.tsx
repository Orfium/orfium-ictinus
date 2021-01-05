/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import CompactNotification from '../subcomponents/CompactNotification';
import { NotificationTypes } from '../Notification';
import { TestId } from '../../../utils/types';

export type Props = {
  /** Show notification icon based on the type */
  withIcon?: boolean;
  /** Use color filling */
  withFilling?: boolean;
  /** The informative message of the Notification */
  message: string;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel?: string;
  /** The primary call-to-action of the Notification */
  primaryCTA?: () => void;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const InlineNotification: React.FC<Props> = ({
  withIcon = false,
  withFilling = false,
  message,
  type,
  primaryCTALabel,
  primaryCTA = undefined,
  closeCTA = undefined,
  dataTestId,
}) => {
  return (
    <CompactNotification
      withIcon={withIcon}
      withFilling={withFilling}
      message={message}
      variant="inline"
      type={type}
      primaryCTALabel={primaryCTALabel}
      primaryCTA={primaryCTA}
      closeCTA={closeCTA}
      dataTestId={dataTestId}
    />
  );
};

export default InlineNotification;
