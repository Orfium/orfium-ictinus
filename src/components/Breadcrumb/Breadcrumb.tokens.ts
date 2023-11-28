import breadcrumb from 'theme/tokens/components/variables/breadcrumb';
import type { DotKeys} from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type BreadcrumbTokens = DotKeys<typeof breadcrumb>;

export const getBreadcrumbTokens = (theme: Theme) => {
  return getComponentTokens<BreadcrumbTokens>(breadcrumb, theme);
};
