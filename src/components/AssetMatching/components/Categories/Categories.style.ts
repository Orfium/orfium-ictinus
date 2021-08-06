import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex, transition } from 'theme/functions';
import { BASE_SHADE } from 'theme/palette';

import { normalFont } from '../Asset/Asset.style';

const categories = css`
  ${flex};
  flex-direction: column;
  align-items: baseline;
`;

const title = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes[11]};
  margin-right: ${theme.spacing.xl};
  color: ${theme.utils.getColor('primary', BASE_SHADE, 'normal')};
`;

const item = (isItemMatched: boolean) => (theme: Theme): SerializedStyles => css`
  ${normalFont(12, theme)};
  color: ${theme.palette.black};
  margin: ${theme.spacing.xsm};
  padding: ${theme.spacing.xsm};
  cursor: default;
  background: ${isItemMatched ? theme.utils.getColor('lightTintedGrey', 250) : 'transparent'};
  white-space: nowrap;
  ${transition(0.2)};
`;

const itemsContainer = css`
  ${flex};
  flex-wrap: wrap;
`;

const category = (order?: number) => css`
  ${flex};
  order: ${order};
  align-items: baseline;
  justify-content: space-between;
`;

export default {
  categories,
  title,
  item,
  itemsContainer,
  category,
};
