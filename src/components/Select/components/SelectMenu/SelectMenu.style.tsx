import { css, SerializedStyles } from '@emotion/core';
import { darken, rem } from 'polished';
import { Theme } from 'theme';
import { Props } from '../../../TextField/TextField';

export const optionStyle = ({
  selected,
  size,
  noResultsExist,
}: { selected: boolean; noResultsExist?: boolean } & Props) => (theme: Theme): SerializedStyles => {
  return css`
    padding: ${theme.spacing.md};
    font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
    background-color: ${selected ? darken(0.07, theme.palette.white) : theme.palette.white};
    cursor: default;
    color: ${noResultsExist ? theme.utils.getColor('lightGray', 600) : 'initial'};
    text-align: ${noResultsExist ? 'center' : 'initial'};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;

    &:hover {
      background-color: ${darken(0.03, theme.palette.white)};
    }
  `;
};

/** we should search for an alternative for this function.... */
const getHeight = ({ items, size }: { items: number; size: 'md' | 'sm' | undefined }) => {
  if (size === 'md') {
    if (items * 46 < 277) {
      return items * 46;
    } else {
      return 277;
    }
  } else {
    if (items * 46 < 265) {
      return items * 46;
    } else {
      return 265;
    }
  }
};

export const menuStyle = ({ status, size, itemsCount }: Props & { itemsCount: number }) => (
  theme: Theme
): SerializedStyles => css`
  background-color: ${theme.palette.white};
  border-radius: 4px;
  box-shadow: ${theme.elevation['02']};
  top: ${status !== 'normal' ? '70%' : '110%'};
  z-index: 500;
  position: absolute;
  min-height: ${`${getHeight({ items: itemsCount, size })}px`};
  max-height: ${size === 'md' ? 277 : 265}px;
  overflow-y: auto;
  // TODO we need a technique to identify menu position left or right
  min-width: 100%;
  max-width: ${rem(620)};
`;
