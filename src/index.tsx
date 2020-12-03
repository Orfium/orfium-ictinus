import * as themeFunctions from './theme/functions';
import * as palette from './theme/palette';
import * as spacing from './theme/spacing';
import * as typography from './theme/typography';
import * as elevation from './theme/elevation';

// Types
import { Palette } from './theme/palette';
import { Spacing } from './theme/spacing';
import { Typography } from './theme/typography';
import { Elevation } from './theme/elevation';

export { default as Card } from './components/Card';
export { default as Breadcrumb } from './components/Breadcrumb';
export { default as Button } from './components/Button';
export { default as CheckBox } from './components/CheckBox';
export { default as DatePicker } from './components/DatePicker';
export { default as ExpandCollapse } from './components/ExpandCollapse';
export { default as Icon } from './components/Icon';
export { default as IconButton } from './components/IconButton';
export { default as Menu } from './components/Menu';
export { default as Notification } from './components/Notification';
export { default as NotificationsContainer } from './components/Notification/subcomponents/NotificationsContainer';
export { default as Pagination } from './components/Pagination';
export { default as Radio } from './components/Radio';
export { default as RadioGroup } from './components/RadioGroup';
export { default as Select } from './components/Select';
export { default as Table } from './components/Table';
export { default as TextField } from './components/TextField';
export { default as ThemeProvider } from './components/ThemeProvider';
export { default as useTheme } from './hooks/useTheme';

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
};
