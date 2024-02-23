import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'polished';
import type { Theme } from 'theme';

export const typeWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      margin: 0;
      flex-direction: column;
      padding: 16px;

      h4 {
        padding-bottom: 10px;
        text-transform: capitalize;
        border-bottom: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
      }
    `;
export const stateWrapperStyle = () => (): SerializedStyles => css``;
export const colorStyle = (theme: Theme): SerializedStyles =>
  css`
    width: 80px;
    height: 80px;
    margin: 0 15px;
    border: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
    border-radius: 100%;
  `;

export const descriptionStyle = (theme: Theme): SerializedStyles =>
  css`
    margin-top: 6px;
    font-size: ${rem(12)};
    p {
      margin-bottom: 4px;
    }
    span {
      background: ${theme.tokens.colors.get('palette.secondary.main')};
      padding: 4px;
    }
  `;
