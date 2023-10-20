import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { BASE_SHADE } from 'theme/palette';

import type { Theme } from '../../../theme';
import type { RequiredProperties } from '../../../utils/common';

type StyleProps = {
  isActive: boolean;
};

export const breadcrumbItemStyles =
  ({ isActive }: RequiredProperties<StyleProps>) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      cursor: default;
      font-size: ${theme.globals.typography.fontSize['15']};
      font-weight: ${isActive
        ? theme.globals.typography.fontWeight.get('medium')
        : theme.globals.typography.fontWeight.get('regular')};
      color: ${isActive
        ? theme.utils.getColor('primary', BASE_SHADE, 'normal')
        : theme.utils.getColor('lightGrey', 650)};
    `;
