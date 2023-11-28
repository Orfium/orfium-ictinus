import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const WrapperStyle = (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 20px 15px;
  row-gap: 20px;
  column-gap: 64px;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  background: ${theme.tokens.colors.get('backgroundColor.tinted')};
`;
