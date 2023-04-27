import { css } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const menuStyle = () => (theme: Theme) =>
  css`
    position: absolute;
    top: ${rem(48)};
    min-width: ${rem(280)};
    left: 0;
    height: auto;
    border-radius: ${theme.spacing.xsm};
    background-color: ${theme.palette.white};
    box-shadow: ${theme.elevation['02']};
    z-index: 500;
    overflow: hidden;
    min-width: 100%;
    max-width: ${rem(620)};
  `;
