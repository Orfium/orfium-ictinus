export type NotificationTypes = 'success' | 'error' | 'info' | 'warning';

export type NotificationVariants = 'inline' | 'banner';

export type NotificationStyleType = 'elevated' | 'outlined';

export type NotificationActions = {
  /** The primary call-to-action label of the Notification */
  primaryCTALabel?: string;
  /** The primary call-to-action of the Notification */
  primaryCTA?: () => void;
  /** The secondary call-to-action label of the Notification */
  secondaryCTALabel?: string;
  /** The secondary call-to-action of the Notification */
  secondaryCTA?: () => void;
};
