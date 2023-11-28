import type { SerializedStyles} from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

import { generateStylesFromTokens } from 'components/Typography/utils';

export const illustrationStyles =
  (isInverted?: boolean) =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      height: ${rem(142)};
      width: ${rem(198)};
      align-items: flex-end;
      justify-content: center;
      border-radius: ${theme.globals.borderRadius.get('3')};
      background: ${isInverted
        ? theme.tokens.colors.get('backgroundColor.tinted')
        : theme.tokens.colors.get('backgroundColor.invertedAlt')};
    `;
  };

export const containerStyles =
  (isInverted?: boolean) =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.globals.spacing.get('6')};
      color: ${isInverted
        ? theme.tokens.colors.get('textColor.default.secondary')
        : theme.tokens.colors.get('textColor.inverted.secondary')};

      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};
    `;
  };
