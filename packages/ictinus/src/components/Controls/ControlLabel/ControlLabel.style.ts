import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars, type SemanticTypographyKey } from '@orfium/tokens';
import type { Theme } from 'theme';

import { generateStylesFromTokens } from 'components/Typography/utils';
import type { LabelConfig } from '../Controls.types';

const labelSize: Record<string, SemanticTypographyKey> = {
  normal: 'normal.body02',
  large: 'normal.title01',
};

export const labelContainerStyles = () => {
  return css`
    display: flex;
    flex-direction: column;
    gap: ${vars.spacing['2']};
  `;
};

export const labelStyles =
  ({ size = 'normal' }: Pick<LabelConfig, 'size'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${generateStylesFromTokens(theme.tokens.typography.get(labelSize[size]))};
      color: ${vars.color.text.default.primary};
    `;
  };

export const helpTextStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body03'))};
      color: ${vars.color.text.default.secondary};
      padding-top: ${vars.spacing['2']};
    `;
  };
