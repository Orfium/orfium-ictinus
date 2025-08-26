import { TestId } from '../../../../utils/types';
import { NotificationActions, NotificationStyleType, NotificationTypes } from '../../Notification';
import { AcceptedIconNames } from '../../../Icon';
import * as React from 'react';
export type CompactNotificationVariants = 'inline' | 'banner' | 'card';
export type CompactNotificationProps = {
    /** Show notification icon based on the type */
    hasIcon?: boolean;
    /** The informative message of the Notification */
    message: string | React.ReactNode;
    /** The variant of the Notification */
    variant: CompactNotificationVariants;
    /** The type of the Notification */
    type: NotificationTypes;
    /** The style type of the Notification. Defaults to elevated */
    styleType: NotificationStyleType;
    /** The description of the Notification (only for toast) */
    description?: string;
    /** The closing call-to-action of the Notification */
    closeCTA?: () => void;
    /** The title (message heading) of the Notification */
    title?: string;
    /** The data test id if needed */
    dataTestId?: TestId;
} & NotificationActions;
export declare const typeToIconName: (type: NotificationTypes) => AcceptedIconNames;
declare const CompactNotification: React.FCC<CompactNotificationProps>;
export default CompactNotification;
