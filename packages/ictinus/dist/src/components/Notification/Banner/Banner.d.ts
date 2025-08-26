import { TestId } from '../../../utils/types';
import { NotificationActions, NotificationStyleType, NotificationTypes } from '../Notification';
import * as React from 'react';
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
    /** The closing call-to-action of the Notification */
    closeCTA?: () => void;
    /** The data test id if needed */
    dataTestId?: TestId;
} & Pick<NotificationActions, 'primaryCTALabel' | 'primaryCTA'>;
/**
 *
 * @deprecated {@link Banner} has been deprecated; use {@link Broadcast} instead.
 *
 */
declare const Banner: React.FCC<BannerProps>;
export default Banner;
