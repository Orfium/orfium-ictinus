import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { getControlsTokens } from '../Controls.tokens';
import { LabelConfig } from '../Controls.types';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const labelContainerStyles = () => (theme: Theme) => {
  const tokens = getControlsTokens(theme);

  return css`
    display: flex;
    flex-direction: column;
    gap: ${tokens('label.gap')};
  `;
};

export const labelStyles =
  ({ size = 'normal' }: Pick<LabelConfig, 'size'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getControlsTokens(theme);

    return css`
      ${generateStylesFromTokens(tokens(`label.${size}` as const))};
      color: ${tokens('textColor.label')};
    `;
  };

export const helpTextStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getControlsTokens(theme);

    return css`
      ${generateStylesFromTokens(tokens('helpText'))};
      color: ${tokens('textColor.helpText')};
    `;
  };
