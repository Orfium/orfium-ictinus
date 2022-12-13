import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../theme';

export const modalContentContainer = (theme: Theme): SerializedStyles => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  color: ${theme.utils.getColor('lightGrey', 700, 'flat')};
  font-weight: ${theme.typography.weights.get('regular')};
`;

export const labelContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes.get('3')};
  margin: 0 0 ${theme.spacing.get('3')} 0;
`;

export const headingContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes.get('9')};
  color: ${theme.utils.getColor('darkGrey', 850)};
  font-weight: ${theme.typography.weights.get('medium')};
  margin: 0 0 ${theme.spacing.get('9')} 0;
`;

export const messageContainer = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes.get('4')};
  color: ${theme.utils.getColor('lightGrey', 750)};
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
  margin: ${theme.spacing.get('9')} 0 0 0;

  button {
    margin-left: ${theme.spacing.get('6')};
  }
`;
