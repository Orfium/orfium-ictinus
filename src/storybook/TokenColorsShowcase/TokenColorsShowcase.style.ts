import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

export const typeWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      margin: 0;
      flex-direction: column;

      h3 {
        padding-bottom: 10px;
        text-transform: capitalize;
        border-bottom: 1px solid ${theme.tokens.borderColor.get('decorative.muted')};
      }
    `;
export const stateWrapperStyle = () => (): SerializedStyles => css``;
export const colorStyle = (theme: Theme): SerializedStyles =>
  css`
    width: 80px;
    height: 80px;
    margin: 0 15px;
    border: 1px solid ${theme.tokens.borderColor.get('decorative.muted')};
    border-radius: 100%;
  `;

export const descriptionStyle = (theme: Theme): SerializedStyles =>
  css`
    margin-top: 6px;
    p {
      margin-bottom: 4px;
    }
    span {
      background: ${theme.utils.getColor('blue', 50)};
      padding: 4px;
      color: ${theme.tokens.palette.get('accents.darkBlue.contrast')};
    }
  `;
