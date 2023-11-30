import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const typeWrapperStyle = () => (): SerializedStyles =>
  css`
    margin: 15px 0;
    display: flex;
    flex-direction: column;
  `;
export const stateWrapperStyle = () => (): SerializedStyles =>
  css`
    display: flex;
    padding: 15px 0;
  `;
export const colorStyle = (theme: Theme): SerializedStyles =>
  css`
    width: 80px;
    height: 80px;
    margin: 0 15px;
    border: 1px solid ${theme.tokens.colors.get('borderColor.decorative.muted')};
    border-radius: 100%;
  `;

export const descriptionStyle = (theme: Theme): SerializedStyles =>
  css`
    margin-top: 6px;
    font-size: rem(12);
    p {
      margin-bottom: 4px;
    }
    span {
      background: ${theme.utils.getColor('blue', 50)};
      padding: 4px;
    }
  `;
