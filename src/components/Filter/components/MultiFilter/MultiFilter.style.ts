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


