import * as themeFunctions from './theme/functions';
// Types
import * as palette from './theme/palette';
import { Palette } from './theme/palette';
import * as spacing from './theme/spacing';
import { Spacing } from './theme/spacing';
import * as typography from './theme/typography';
import { Typography } from './theme/typography';
import * as elevation from './theme/elevation';
import { Elevation } from './theme/elevation';
import { queriesSizes } from './hooks/useBreakpoints';

export { default as Avatar } from './components/Avatar';
export { default as Breadcrumb } from './components/Breadcrumb';
export { default as Button } from './components/Button';
export { default as Card } from './components/Card';

export { default as LineChart } from './components/Chart/LineChart';
export { default as BarChart } from './components/Chart/BarChart';
export { default as DonutChart } from './components/Chart/DonutChart';

export { default as CheckBox } from './components/CheckBox';
export { default as Chip } from './components/Chip';
export { default as DatePicker } from './components/DatePicker';
export { default as Drawer } from './components/Drawer';
export { default as ExpandCollapse } from './components/ExpandCollapse';
export { default as Icon } from './components/Icon';
export { default as IconButton } from './components/IconButton';
export { default as Label } from './components/Label';
export { default as Loader } from './components/Loader';
export { default as Menu } from './components/Menu';
export { default as Modal } from './components/Modal';

export { default as InlineNotification } from './components/Notification/InlineNotification';
export { default as NotificationsContainer } from './components/Notification/NotificationsContainer';
export { default as NotificationVisual } from './components/Notification/NotificationVisual';
export { default as Banner } from './components/Notification/Banner';
export { default as Snackbar } from './components/Notification/Snackbar';

export { default as Pagination } from './components/Pagination';
export { default as Radio } from './components/Radio';
export { default as RadioGroup } from './components/RadioGroup';
export { default as Select } from './components/Select';
export { default as Table } from './components/Table';
export { default as TextField } from './components/TextField';
export { default as TextArea } from './components/TextArea';
export { default as ThemeProvider } from './components/ThemeProvider';
export { default as Toast } from './components/Toast';
export { default as TopNavBar } from './components/TopAppBar';

export { default as useTheme } from './hooks/useTheme';
export { default as useBreakpoints } from './hooks/useBreakpoints';

export { Theme, default as themeConfig } from './theme';
export { AcceptedColorComponentTypes } from './utils/themeFunctions';
export {
  themeFunctions,
  palette,
  spacing,
  typography,
  elevation,
  Spacing,
  Palette,
  Typography,
  Elevation,
  queriesSizes,
};
