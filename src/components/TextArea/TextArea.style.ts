import { CSSObject } from '@emotion/serialize';

import { Theme } from '../../theme';
import { rem } from '../../theme/utils';
import { MIN_WIDTH } from '../TextInputBase/config';

export const sxProp = (
  resizeEnabled: boolean,
  theme: Theme
): { wrapper: CSSObject; textField: CSSObject; input: CSSObject } => ({
  wrapper: { width: 'auto', height: 'auto' },
  textField: { padding: theme.spacing.sm },
  input: {
    width: rem(MIN_WIDTH),
    minWidth: rem(MIN_WIDTH),
    resize: !resizeEnabled ? 'none' : 'both',
  },
});
