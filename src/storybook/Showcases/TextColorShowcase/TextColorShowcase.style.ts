import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';
import { Theme } from 'theme';
import backgroundColorFigma from 'theme/tokens/semantic/variables/backgroundColor';
import { DotKeys } from 'theme/tokens/utils';

export const dividerStyle = () =>
  css({
    background: '#E4E7FF',
    height: '1px',
    width: '100%',
    marginTop: '8px',
    marginBottom: '24px',
  });

export const descriptionStyle =
  (colorCategory: DotKeys<typeof backgroundColorFigma>) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: 4px;
      color: ${theme.tokens.textColor.get(
        colorCategory === 'inverted' ? 'inverted.secondary' : 'light.secondary'
      )};
      font-weight: 500;
      margin-bottom: 36px;
      margin-top: 6px;
      font-size: ${rem(12)};
      p {
        margin-bottom: 4px;
      }
      span {
        background: ${colorCategory === 'inverted'
          ? theme.tokens.backgroundColor.get('invertedDark')
          : theme.utils.getColor('blue', 50)};
        padding: 4px;
      }
    `;
