import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

export const nestedHeaderStyle = (): SerializedStyles =>
  css({
    color: vars.color.text.default.primary,
    fontSize: vars['font-size']['2'],
    paddingBottom: vars.spacing['3'],
    fontWeight: vars.weight.bold,
  });
