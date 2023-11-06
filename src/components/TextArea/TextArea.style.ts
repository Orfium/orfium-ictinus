import { CSSObject } from '@emotion/serialize';

import { Theme } from '../../theme';

export const sxProp = (
  resizeEnabled: boolean,
  theme: Theme
): { wrapper: CSSObject; textField: CSSObject; input: CSSObject } => ({
  wrapper: { width: 'auto', height: 'auto' },
  textField: { padding: theme.spacing.sm },
  input: {
    maxWidth: '100%',
    resize: !resizeEnabled ? 'none' : 'both',
  },
});
