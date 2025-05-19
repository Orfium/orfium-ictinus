import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import type { SemanticTypographyKey } from 'theme/tokens/semantic/typography';

import { generateStylesFromTokens } from 'components/Typography/utils';
import type { LabelConfig } from '../Controls.types';

const labelSize: Record<string, SemanticTypographyKey> = {
  normal: 'normal.body02',
  large: 'normal.title01',
};

export const labelContainerStyles = () => (theme: Theme) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimension.spacing.get('2xs')};
  `;
};

export const labelStyles =
  ({ size = 'normal' }: Pick<LabelConfig, 'size'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${generateStylesFromTokens(theme.tokens.typography.get(labelSize[size]))};
      color: ${theme.tokens.colors.get('textColor.default.primary')};
    `;
  };

export const helpTextStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body03'))};
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
      padding-top: ${theme.globals.spacing.get('2')};
    `;
  };
