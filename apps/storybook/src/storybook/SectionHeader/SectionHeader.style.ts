import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const sectionHeaderWrapper = () => (): SerializedStyles =>
  css`
    width: auto;
    height: 128px;
    background-image: url('./assets/header.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
    h1 {
      margin: 0;
    }
  `;

export const sectionHeaderContainer = () => (): SerializedStyles =>
  css`
    display: flex;
    align-items: center;
  `;

export const sectionHeaderLinksDivider =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding: 0 12px;
      color: ${theme.tokens.colors.get('textColor.default.active')};
    `;
