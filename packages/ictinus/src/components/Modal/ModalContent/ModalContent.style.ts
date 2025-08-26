import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { Theme } from '../../../theme';

export const modalContentContainer = (theme: Theme): SerializedStyles => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  color: ${theme.tokens.colors.get('textColor.default.primary')};
  font-weight: ${theme.globals.typography.fontWeight.get('regular')};
`;

export const labelContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.globals.typography.fontSize.get('3')};
  margin: 0 0 ${theme.globals.spacing.get('3')} 0;
`;

export const headingContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.globals.typography.fontSize.get('9')};
  color: ${theme.tokens.colors.get('textColor.default.primary')};
  font-weight: ${theme.globals.typography.fontWeight.get('medium')};
  margin: 0 0 ${theme.globals.spacing.get('9')} 0;
`;

export const messageContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.globals.typography.fontSize.get('4')};
  color: ${theme.tokens.colors.get('textColor.default.secondary')};
  max-height: ${rem(430)};
  overflow-y: hidden;
  margin: 0;
`;

export const actionsContainer = (theme: Theme): SerializedStyles => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin: ${theme.globals.spacing.get('9')} 0 0 0;

  button {
    margin-left: ${theme.globals.spacing.get('6')};
  }
`;
