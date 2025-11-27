import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { generateStylesFromTokens, rem, type Theme } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';

export const illustrationStyles = (isInverted?: boolean): SerializedStyles => {
  return css`
    display: flex;
    height: ${rem(142)};
    width: ${rem(198)};
    align-items: flex-end;
    justify-content: center;
    border-radius: ${vars['border-radius']['3']};
    background: ${isInverted ? vars.color.background.default : vars.color.background.invertedAlt};
  `;
};



export const containerStyles =
  (isInverted?: boolean) =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${vars.spacing['6']};
      color: ${isInverted ? vars.color.text.default.secondary : vars.color.text.inverted.secondary};

      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};
    `;
  };
