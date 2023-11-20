import breadcrumb from 'theme/tokens/components/variables/breadcrumb';
import { DotKeys, getComponentTokens } from 'theme/tokens/utils';

import { Theme } from '../../theme';

export type BreadcrumbTokens = DotKeys<typeof breadcrumb>;

export const getBreadcrumbTokens = (theme: Theme) => {
  return getComponentTokens<BreadcrumbTokens>(breadcrumb, theme);
};
