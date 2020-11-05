import { Theme } from '../../theme';
import { rem } from 'polished';
import { NotificationTypes } from './Notification';

export const notificationsContainer = (type?: NotificationTypes) => (theme: Theme) => ({
  width: rem(100),
  height: rem(100),
  borderLeft: type === 'success' ? `${theme.palette.success['400']} 1px solid` : 'red 1px solid',
  borderRadius: rem(4),
});
