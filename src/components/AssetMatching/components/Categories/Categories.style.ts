import { css, SerializedStyles } from '@emotion/core';
import { flex } from '../../../../theme/functions';
import { rem } from 'polished';
import { Theme } from '../../../../theme';

const categories = css`
  ${flex};
  flex-direction: column;
  align-items: baseline;
`;

const title = (theme: Theme): SerializedStyles => css`
  font-size: ${rem(11)};
  margin-right: ${theme.spacing.xl};
  color: ${theme.utils.getColor('primary', 400, 'normal')};
`;

const item = (isItemMatched: boolean) => (theme: Theme): SerializedStyles => css`
  font-size: ${rem(12)};
  font-weight: 500;
  color: ${theme.palette.black};
  margin: ${theme.spacing.xsm};
  padding: ${theme.spacing.xsm};
  cursor: default;
  background: ${isItemMatched ? theme.utils.getColor('lightGray', 200) : 'transparent'};
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
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
