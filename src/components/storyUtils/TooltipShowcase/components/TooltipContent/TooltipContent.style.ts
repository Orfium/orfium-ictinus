import { SerializedStyles, css } from '@emotion/react';
import { Theme } from 'theme';
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

// style={{
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: isInverted ? '#DCDFFF' : '#434666',
//     padding: '8px',
//     width: '240px',
//     color: isInverted ? 'black' : 'white',
//     border: '1px solid' + isInverted ? '#DCDFFF' : '#434666',
//     borderRadius: '4px',
//   }}
