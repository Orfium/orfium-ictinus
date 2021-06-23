import { css, SerializedStyles } from '@emotion/react';
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

export const menuStyle = ({ status, size }: Props) => (theme: Theme): SerializedStyles => css`
  background-color: ${theme.palette.white};
  border-radius: 4px;
  box-shadow: ${theme.elevation['02']};
  top: ${status !== 'normal' ? '70%' : '110%'};
  z-index: 500;
  position: absolute;
  max-height: ${size === 'md' ? 277 : 265}px;
  overflow-y: auto;
  // TODO we need a technique to identify menu position left or right
  min-width: 100%;
  max-width: ${rem(620)};
`;
