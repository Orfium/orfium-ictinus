import { rem } from 'polished';

import { queriesSizes } from './hooks/useBreakpoints';
// Import from @orfium/tokens package
import * as dimension from '@orfium/tokens';
import * as elevation from '@orfium/tokens';
import * as palette from '@orfium/tokens';
import * as spacing from '@orfium/tokens';
import * as typography from '@orfium/tokens';
// Types
import ClickAwayListener from 'components/utils/ClickAwayListener';
import * as overrides from './theme/overrides';
// Note: We import specific items to avoid conflicts with local Typography TextColorTypes
// export * from '@orfium/tokens'; // Commented out to avoid TextColorTypes conflict
export { convertRemToPixels } from '@orfium/tokens';

export { globalColors } from '@orfium/tokens';
export type {
  AcceptedColorComponentTypes,
  BASE_SHADE,
  colorShades,
  Elevation,
  flatColors,
  Typography as GlobalsTypography,
  neutralColors,
  paleColors,
  Palette,
  Spacing,
  SpacingKey,
} from '@orfium/tokens';
export type { Theme } from './theme';
export type { Overrides } from './theme/overrides';
export type { TestProps } from './utils/types';

// Re-export dimension variables from tokens package
export { dimensionVariables } from '@orfium/tokens';

// Dimension types
export type {
  DimensionBorderRadius,
  DimensionBorderRadiusKey,
  DimensionBorderWidth,
  DimensionBorderWidthKey,
  DimensionMinHeight,
  DimensionMinHeightKey,
  DimensionOpacity,
  DimensionOpacityKey,
  DimensionSizing,
  DimensionSizingKey,
  DimensionSpacing,
  DimensionSpacingKey,
  DimensionState,
  DimensionStateKey,
} from '@orfium/tokens';

// Globals types
export type {
  BorderRadiusKey,
  BorderWidthKey,
  Colors,
  ColorsKey,
  FontFamilyKey,
  FontSizeKey,
  FontWeightKey,
  LetterSpacingKey,
  LineHeightKey,
  OpacityKey,
  Sizing,
  SizingKey,
  TextCaseKey,
  TextDecorationKey,
} from '@orfium/tokens';

// Semantic token types
export {
  semanticVariablesBoxShadow,
  semanticVariablesColors,
  semanticVariablesTypography,
} from '@orfium/tokens';
export type {
  SemanticBoxShadow,
  SemanticBoxShadowKey,
  SemanticColors,
  SemanticColorsKey,
  SemanticDisabledState,
  SemanticState,
  SemanticTypography,
  SemanticTypographyKey,
  TypographyKeys,
  TypographyObject,
} from '@orfium/tokens';

// Token utility types
export type { DotKeys, Token, TokensObject } from '@orfium/tokens';

// Hook types
export type { OnCheckHandler } from './hooks/useCheck';

export type { ClickEvent, ClickHandler } from './hooks/useLoading';

// Component types
export type { ModalContentProps } from './components/Modal/ModalContent/ModalContent';

// Utility types
export type { ColorShapeFromComponent } from '@orfium/tokens';
export type {
  CommonButtonProps,
  DivProps,
  EventProps,
  FlexDirectionProperty,
  RequiredProperties,
} from './utils/common';
export type { Dayjs } from './utils/date';
export type { ComponentSizes, DeepPartial, TestId } from './utils/types';

export * from './components/Avatar';
export { default as Avatar } from './components/Avatar';
export * from './components/Avatar/AvatarStack';
export { default as AvatarStack } from './components/Avatar/AvatarStack';
export * from './components/Box';
export { default as Box } from './components/Box';
export * from './components/Breadcrumb';
export { default as Breadcrumb } from './components/Breadcrumb';
export * from './components/Button';
export { default as Button } from './components/Button';
export * from './components/ButtonBase';
export { default as ButtonBase } from './components/ButtonBase';
export * from './components/Card';
export { default as Card } from './components/Card';
export * from './components/DropdownButton';
export { default as DropdownButton } from './components/DropdownButton';

export * from './components/Chart/BarChart';
export { default as BarChart } from './components/Chart/BarChart';
export * from './components/Chart/DonutChart';
export { default as DonutChart } from './components/Chart/DonutChart';
export * from './components/Chart/LineChart';
export { default as LineChart } from './components/Chart/LineChart';

export { CheckBox } from './components/Controls';
export * from './components/Controls/CheckBox';
export * from './components/DatePicker';
export { default as DatePicker } from './components/DatePicker';
export * from './components/ExpandCollapse';
export { default as ExpandCollapse } from './components/ExpandCollapse';
export * from './components/Icon';
export { default as Icon } from './components/Icon';
export * from './components/IconButton';
export { default as IconButton } from './components/IconButton';
export * from './components/Label';
export { default as Label } from './components/Label';
export * from './components/Link';
export { default as Link } from './components/Link';
export * from './components/List';
export { default as List } from './components/List';
export * from './components/Menu';
export { default as Menu } from './components/Menu';
export * from './components/Modal';
export { default as Modal } from './components/Modal';
export * from './components/Modal/ModalContent';
export { default as ModalContent } from './components/Modal/ModalContent';
export * from './components/MultiTextFieldBase';
export { default as MultiTextFieldBase } from './components/MultiTextFieldBase';

export * from './components/Notification/Banner';
export { default as Banner } from './components/Notification/Banner';
export * from './components/Notification/InlineNotification';
export { default as InlineNotification } from './components/Notification/InlineNotification';
export * from './components/Notification/Notification';
export * from './components/Notification/NotificationsContainer';
export { default as NotificationsContainer } from './components/Notification/NotificationsContainer';
export * from './components/Notification/NotificationVisual';
export { default as NotificationVisual } from './components/Notification/NotificationVisual';
export * from './components/Notification/Snackbar';
export { default as Snackbar } from './components/Notification/Snackbar';

export { Broadcast } from './components/Broadcast';
export { InlineAlert, type AlertStatus, type InlineAlertProps } from './components/InlineAlert';
export { toast, ToastContainer } from './components/Toast';

export { Radio, RadioGroup, Switch } from './components/Controls';
export type * from './components/Controls/Controls.types';
export * from './components/Controls/Radio';
export * from './components/Controls/Radio/components/RadioGroup';
export * from './components/Controls/Switch';
export * from './components/Drawer';
export { default as Drawer } from './components/Drawer';
export * from './components/Filter';
export { default as Filter } from './components/Filter';
export * from './components/NumberField';
export { default as NumberField } from './components/NumberField';
export * from './components/Pagination';
export { default as Pagination } from './components/Pagination';
export * from './components/ProgressIndicator';
export { default as ProgressIndicator } from './components/ProgressIndicator';
export * from './components/Search';
export { default as Search } from './components/Search';
export * from './components/Select';
export { default as Select, StatefulSelect } from './components/Select';
export * from './components/Slider';
export { default as Slider } from './components/Slider';
export * from './components/Table';
export { default as Table } from './components/Table';
export * from './components/TableV4';
export { default as TableV4 } from './components/TableV4';
export * from './components/Tabs';
export { default as Tabs } from './components/Tabs';
export * from './components/TabStepper';
export { default as TabStepper } from './components/TabStepper';
export * from './components/Tag';
export { default as Tag } from './components/Tag';
export * from './components/TextArea';
export { default as TextArea } from './components/TextArea';
export * from './components/TextField';
export { default as TextField } from './components/TextField';
export * from './components/TextInputBase';
export { default as TextInputBase } from './components/TextInputBase';
export * from './components/ThemeProvider';
export { default as ThemeProvider } from './components/ThemeProvider';
export * from './components/ToastV4';
export { default as ToastV4 } from './components/ToastV4';
export * from './components/Tooltip';
export { default as Tooltip } from './components/Tooltip';
export * from './components/TopAppBar';
export { default as TopNavBar } from './components/TopAppBar';
export * from './components/TruncatedContent';
export { default as TruncatedContent } from './components/TruncatedContent';
export * from './components/Typography';
export { default as Typography } from './components/Typography';

// hooks
export { queriesKeys, default as useBreakpoints } from './hooks/useBreakpoints';
export { useCheck } from './hooks/useCheck';
export { default as useCombinedRefs } from './hooks/useCombinedRefs';
export { default as useElementSize } from './hooks/useElementSize';
export { default as useEscape } from './hooks/useEscape';
export { default as useEventListener } from './hooks/useEventListener';
export { default as useFieldUtils } from './hooks/useFieldUtils';
export { default as useIsoMorphicLayoutEffect } from './hooks/useIsoMorphicLayoutEffect';
export { KEYBOARD_EVENT_KEYS, default as useKeyboardEvents } from './hooks/useKeyboardEvents';
export { useLoading } from './hooks/useLoading';
export { useOverlayStack } from './hooks/useOverlayStack';
export { default as usePagination } from './hooks/usePagination';
export { default as useTheme } from './hooks/useTheme';
export { ThemeSwitchProvider, useThemeSwitch } from './hooks/useThemeSwitch';
export { default as useToggle } from './hooks/useToggle';
export {
  TypeColorToColorMatchProvider,
  useTypeColorToColorMatch,
} from './hooks/useTypeColorToColorMatch';

// utilities
export {
  backgroundPickerBasedOnType,
  calculateActualColorFromComponentProp,
  colorPickerBasedOnType,
  fillPickerBasedOnType,
  getColorFromType,
  parseCompositionToken,
} from '@orfium/tokens';
export { default as dayjs } from './utils/date';
export { PropsValidationError, ValidationError } from './utils/errors';
export {
  errorHandler,
  generateTestDataId,
  generateUniqueID,
  generateUniqueKey,
  getLocaleFormat,
  isComponentFunctionType,
} from './utils/helpers';

export * from 'theme/functions';
export { default as themeConfig } from './theme';
export {
  ClickAwayListener,
  dimension,
  elevation,
  overrides,
  palette,
  queriesSizes,
  rem,
  spacing,
  typography,
};

export * from './layers';
export * from './sprinkles';
