import type { Theme } from 'theme';

import type { ExtendedColumn } from '../types';

export const isItemString = (prop: string | ExtendedColumn): prop is string =>
  typeof prop === 'string';

export const hasTooltipOrSortingKey = (prop: ExtendedColumn): boolean =>
  Boolean(prop.isSortable || prop.tooltip);

export const getBorderColor = (theme: Theme): string =>
  theme.tokens.colors.get('borderColor.decorative.default');
