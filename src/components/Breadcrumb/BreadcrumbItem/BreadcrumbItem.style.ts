import { css, SerializedStyles } from '@emotion/react';
import { BASE_SHADE } from 'theme/palette';

import { Theme } from '../../../theme';
import { RequiredProperties } from '../../../utils/common';

type StyleProps = {
  isActive: boolean;
};

export const breadcrumbItemStyles =
  ({ isActive }: RequiredProperties<StyleProps>) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      cursor: default;
      font-size: ${theme.typography.fontSizes['15']};
      font-weight: ${isActive
        ? theme.typography.weights.get('medium')
        : theme.typography.weights.get('regular')};
      color: ${isActive
        ? theme.utils.getColor('primary', BASE_SHADE, 'normal')
        : theme.utils.getColor('lightGrey', 650)};
    `;
