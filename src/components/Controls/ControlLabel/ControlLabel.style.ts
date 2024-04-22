import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import type { SemanticTypographyKey } from 'theme/tokens/semantic/typography';

import type { LabelConfig } from '../Controls.types';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const labelContainerStyles = () => (theme: Theme) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimension.spacing.get('2xs')};
  `;
};

const labelSize: Record<string, SemanticTypographyKey> = {
  normal: 'normal.body02',
  large: 'normal.headline04',
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
    `;
  };
