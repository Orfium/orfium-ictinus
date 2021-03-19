import { css, SerializedStyles } from '@emotion/core';
import { flex } from '../../../../theme/functions';
import { rem } from 'polished';
import { Theme } from '../../../../theme';

const categories = css`
  ${flex};
  align-items: baseline;
`;

const title = (theme: Theme): SerializedStyles => css`
  font-size: ${rem(11)};
  margin-right: ${theme.spacing.xl};
  color: ${theme.utils.getColor('primary', 400, 'normal')};
`;

const item = (theme: Theme): SerializedStyles => css`
  font-size: ${rem(12)};
  font-weight: 500;
  color: ${theme.palette.black};
  padding: ${theme.spacing.md};
  white-space: nowrap;
  margin: 0;
`;

const itemsContainer = css`
  ${flex};
  flex-wrap: wrap;
`;

const category = css`
  ${flex};
  justify-content: space-between;
`;

export default {
  categories,
  title,
  item,
  itemsContainer,
  category,
};
