import { css } from '@emotion/core';
import { darken, rem } from 'polished';

import { Theme } from 'theme';
import { flexCenter } from 'theme/functions';

export const optionsStyle = () => (theme: Theme) => css`
  max-height: ${rem(253)};
  overflow: auto;
  
  button {
    padding: ${rem(8)} ${rem(16)};
    height: ${rem(48)};
    font-size: ${theme.typography.fontSizes['14']};
    display: block;
    width: 100%;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
  }

  button:hover {
    background-color: ${darken(0.05, theme.palette.white)};
  }
`;

export const emptyStyle = () => (theme: Theme) => css`
  color: ${theme.utils.getColor('lightGray', 600)};
  height: ${rem(48)};
  padding: 0 ${rem(16)};
  font-size: ${theme.typography.fontSizes['14']};
  ${flexCenter};
`;

