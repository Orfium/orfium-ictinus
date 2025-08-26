import { TestId } from '../../../utils/types';
import { NotificationActions } from '../Notification';
import * as React from 'react';
export type NotificationVisualProps = {
    /** The message heading of the Notification */
    title: string | undefined;
    /** The description of the Notification (only for toast) */
    description: string | undefined;
    /** The data test id if needed */
    dataTestId?: TestId;
} & NotificationActions;
declare const NotificationVisual: React.FCC<NotificationVisualProps>;
export default NotificationVisual;
