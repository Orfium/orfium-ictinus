import { SerializedStyles } from '@emotion/react';
import { Theme } from '../../../../theme';
import { NotificationStyleType, NotificationTypes } from '../../Notification';
export declare const notificationsContainer: (type: NotificationTypes, styleType: NotificationStyleType) => (theme: Theme) => SerializedStyles;
export declare const infoContainer: () => (theme: Theme) => SerializedStyles;
export declare const messageContainer: () => (theme: Theme) => SerializedStyles;
export declare const actionsContainer: () => (theme: Theme) => SerializedStyles;
export declare const headContainer: () => (theme: Theme) => SerializedStyles;
export declare const primaryActionContainer: () => () => SerializedStyles;
