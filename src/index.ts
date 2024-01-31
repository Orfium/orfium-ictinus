import { rem } from 'polished';

import { queriesSizes } from './hooks/useBreakpoints';
import * as themeFunctions from './theme/functions';
import * as elevation from './theme/globals/elevation';
// Types
import * as spacing from './theme/globals/spacing';
import * as typography from './theme/globals/typography';
import * as overrides from './theme/overrides';
import * as palette from './theme/palette';
import ClickAwayListener from 'components/utils/ClickAwayListener';
export * from './theme/functions';
export { generateUniqueID, generateTestDataId, generateUniqueKey } from './utils/helpers';

export type { Elevation } from './theme/globals/elevation';
export type { Overrides } from './theme/overrides';
export type { Palette } from './theme/palette';
export type { Spacing } from './theme/globals/spacing';
export type { Typography as GlobalsTypography } from './theme/globals/typography';
export type { AcceptedColorComponentTypes } from './utils/themeFunctions';
export type { Theme } from './theme';
export type { TestProps } from './utils/types';

export { default as Avatar } from './components/Avatar';
export * from './components/Avatar';
export { default as AvatarStack } from './components/Avatar/AvatarStack';
export * from './components/Avatar/AvatarStack';
export { default as Breadcrumb } from './components/Breadcrumb';
export * from './components/Breadcrumb';
export { default as Button } from './components/Button';
export * from './components/Button';
export { default as Card } from './components/Card';
export * from './components/Card';

export { default as LineChart } from './components/Chart/LineChart';
export * from './components/Chart/LineChart';
export { default as BarChart } from './components/Chart/BarChart';
export * from './components/Chart/BarChart';
export { default as DonutChart } from './components/Chart/DonutChart';
export * from './components/Chart/DonutChart';

export { CheckBox } from './components/Controls';
export * from './components/Controls/CheckBox';
export { default as DatePicker } from './components/DatePicker';
export * from './components/DatePicker';
export { default as Navigation } from './components/Navigation';
export * from './components/Navigation';
export { default as ExpandCollapse } from './components/ExpandCollapse';
export * from './components/ExpandCollapse';
export { default as Icon } from './components/Icon';
export * from './components/Icon';
export { default as Link } from './components/Link';
export * from './components/Link';
export { default as IconButton } from './components/IconButton';
export * from './components/IconButton';
export { default as Label } from './components/Label';
export * from './components/Label';
export { default as List } from './components/List';
export * from './components/List';
export { default as Menu } from './components/Menu';
export * from './components/Menu';
export { default as Modal } from './components/Modal';
export * from './components/Modal';

export { default as InlineNotification } from './components/Notification/InlineNotification';
export * from './components/Notification/InlineNotification';
export { default as NotificationsContainer } from './components/Notification/NotificationsContainer';
export * from './components/Notification/NotificationsContainer';
export { default as NotificationVisual } from './components/Notification/NotificationVisual';
export * from './components/Notification/NotificationVisual';
export { default as Banner } from './components/Notification/Banner';
export * from './components/Notification/Banner';
export { default as Snackbar } from './components/Notification/Snackbar';
export * from './components/Notification/Snackbar';
export * from './components/Notification/Notification';

export { default as Drawer } from './components/Drawer';
export * from './components/Drawer';
export { default as Pagination } from './components/Pagination';
export * from './components/Pagination';
export { Radio } from './components/Controls';
export * from './components/Controls/Radio';
export { default as ProgressIndicator } from './components/ProgressIndicator';
export * from './components/ProgressIndicator';
export { RadioGroup } from './components/Controls';
export * from './components/Controls/Radio/components/RadioGroup';
export { default as Select, StatefulSelect } from './components/Select';
export * from './components/Select';
export { default as Slider } from './components/Slider';
export * from './components/Slider';
export { Switch } from './components/Controls';
export * from './components/Controls/Switch';
export { default as Table } from './components/Table';
export * from './components/Table';
export { default as Tag } from './components/Tag';
export * from './components/Tag';
export { default as TextField } from './components/TextField';
export * from './components/TextField';
export { default as Search } from './components/Search';
export * from './components/Search';
export { default as TextArea } from './components/TextArea';
export * from './components/TextArea';
export { default as ThemeProvider } from './components/ThemeProvider';
export * from './components/ThemeProvider';
export { default as Toast } from './components/Toast';
export * from './components/Toast';
export { default as Tooltip } from './components/Tooltip';
export * from './components/Tooltip';
export { default as TopNavBar } from './components/TopAppBar';
export * from './components/TopAppBar';
export { default as Filter } from './components/Filter';
export * from './components/Filter';
export { default as TruncatedContent } from './components/TruncatedContent';
export * from './components/TruncatedContent';
export { default as Typography } from './components/Typography';
export * from './components/Typography';

// hooks
export { default as useTheme } from './hooks/useTheme';
export * from './hooks/useTheme';
export { default as useBreakpoints } from './hooks/useBreakpoints';
export * from './hooks/useBreakpoints';
export { default as useEscape } from './hooks/useEscape';
export * from './hooks/useEscape';

export { default as themeConfig } from './theme';
export {
  ClickAwayListener,
  themeFunctions,
  palette,
  spacing,
  typography,
  elevation,
  overrides,
  queriesSizes,
  rem,
};
