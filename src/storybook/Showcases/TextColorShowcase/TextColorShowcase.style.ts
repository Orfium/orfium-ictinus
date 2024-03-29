import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'polished';
import type { Theme } from 'theme';

export const dividerStyle = () =>
  css({
    background: '#E4E7FF',
    height: '1px',
    width: '100%',
    marginTop: '8px',
    marginBottom: '24px',
  });

export const descriptionStyle =
  (colorCategory: string) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: 4px;
      color: ${theme.tokens.colors.get(
        colorCategory === 'inverted'
          ? 'textColor.inverted.secondary'
          : 'textColor.default.secondary' // light doesnt exist
      )};
      font-weight: 500;
      margin-bottom: 36px;
      margin-top: 6px;
      font-size: ${rem(12)};
      p {
        margin-bottom: 4px;
      }
      span {
        background: ${theme.tokens.colors.get('palette.secondary.muted')};
        border-radius: 4px;
        padding: 4px;
      }
    `;
