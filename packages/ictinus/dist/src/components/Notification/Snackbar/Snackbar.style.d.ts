import { SerializedStyles } from '@emotion/react';
import { Theme } from '../../../theme';
import { NotificationStyleType, NotificationTypes } from '../Notification';
export declare const cardContainer: (type: NotificationTypes, styleType: NotificationStyleType) => (theme: Theme) => SerializedStyles;
export declare const topContainer: () => (theme: Theme) => SerializedStyles;
export declare const infoContainer: () => () => SerializedStyles;
export declare const descriptionContainer: () => (theme: Theme) => SerializedStyles;
