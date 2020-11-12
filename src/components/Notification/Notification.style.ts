import { Theme } from '../../theme';
import { rem } from 'polished';
import { NotificationTypes } from './Notification';

export const notificationsContainer = (type?: NotificationTypes) => (theme: Theme) => ({
  width: rem(330),
  height: rem(58),
  borderLeft:
    type === 'success'
      ? `${theme.palette.success['400']} 4px solid`
      : type === 'error'
      ? `${theme.palette.error['400']} 4px solid`
      : type === 'info'
      ? `${theme.palette.info['400']} 4px solid`
      : `${theme.palette.warning['400']} 4px solid`,
  borderRadius: rem(4),
});
