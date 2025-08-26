import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import { TestId } from '../../utils/types';
import { NotificationStyleType, NotificationTypes } from '../Notification/Notification';
import * as React from 'react';
export type ToastV4Props = {
    /** The informative message of the Toast */
    message: string;
    /** The type of the Toast, will determine the color and the icon */
    type?: AcceptedColorComponentTypes;
    /** The style type of the Notification. Defaults to elevated */
    styleType?: NotificationStyleType;
    /** The closing call-to-action of the Toast */
    closeCTA: (() => void) | undefined;
    /** Initialize toast as expanded */
    isExpanded?: boolean;
    /** If true, the Toast has a minimum-height */
    hasMinimumHeight?: boolean;
    /** The data test id if needed */
    dataTestId?: TestId;
};
export declare const isNotificationTypes: (type: string) => type is NotificationTypes;
/**
 *
 * @deprecated {@link ToastV4} has been deprecated; use {@link Toast} instead.
 *
 */
declare const ToastV4: React.FCC<ToastV4Props>;
export default ToastV4;
