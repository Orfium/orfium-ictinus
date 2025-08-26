import { TestId } from '../../../utils/types';
import { NotificationActions, NotificationStyleType, NotificationTypes } from '../Notification';
import * as React from 'react';
export type SnackbarProps = {
    /** The informative message of the Toast */
    message: string;
    /** The type of the Notification */
    type: NotificationTypes;
    /** The style type of the Notification. Defaults to elevated */
    styleType?: NotificationStyleType;
    /** The description of the Notification (only for toast) */
    description: string | undefined;
    /** The closing call-to-action of the Toast */
    closeCTA: (() => void) | undefined;
    /** The data test id if needed */
    dataTestId?: TestId;
} & NotificationActions;
declare const Snackbar: React.FCC<SnackbarProps>;
export default Snackbar;
