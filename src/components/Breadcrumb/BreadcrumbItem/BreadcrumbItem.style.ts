import { css, SerializedStyles } from '@emotion/react';
import { BASE_SHADE } from 'theme/palette';

import { Theme } from '../../../theme';
import { RequiredProperties } from '../../../utils/common';

type StyleProps = {
  active: boolean;
};

export const breadcrumbItemStyles = ({ active }: RequiredProperties<StyleProps>) => (
  theme: Theme
): SerializedStyles => css`
  display: flex;
  cursor: default;
  font-size: ${theme.typography.fontSizes[15]};
  font-weight: ${active ? theme.typography.weights.medium : theme.typography.weights.regular};
  color: ${active
    ? theme.utils.getColor('primary', BASE_SHADE, 'normal')
    : theme.utils.getColor('lightGrey', 650)};
`;
