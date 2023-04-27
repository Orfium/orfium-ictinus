import { css } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { textInputConfig } from 'components/TextInputBase/config';

export const textFieldWrapper = () =>
  css`
    & > div > div {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  `;

export const optionsWrapper = () => (theme: Theme) => {
  const borderConfig = textInputConfig.types[theme.colorScheme].outlined.border;

  return css`
    & > div {
      box-shadow: 0 0 0 ${rem(borderConfig.width)}
        ${theme.utils.getColor(borderConfig.color.default.name, borderConfig.color.default.shade)};
      border: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `;
};

export const menuStyle = () => (theme: Theme) => {
  const borderConfig = textInputConfig.types[theme.colorScheme].outlined.border;

  return css`
    position: absolute;
    top: ${rem(48)};
    min-width: ${rem(280)};
    left: 0;
    height: auto;
    border: ${rem(borderConfig.width)} solid
      ${theme.utils.getColor(borderConfig.color.default.name, borderConfig.color.default.shade)};
    border-radius: ${theme.spacing.xsm};
    background-color: ${theme.palette.white};
    box-shadow: ${theme.elevation['02']};
    z-index: 500;
    overflow: hidden;
    min-width: 100%;
    max-width: ${rem(440)};
  `;
};
