import { default as React } from 'react';
export type NotificationsContainerPositions = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';
export type NotificationsContainerProps = {
    /** Notifications Container position */
    position: NotificationsContainerPositions;
    parent?: HTMLElement | null;
};
declare const NotificationsContainer: React.FCC<NotificationsContainerProps>;
export default NotificationsContainer;
