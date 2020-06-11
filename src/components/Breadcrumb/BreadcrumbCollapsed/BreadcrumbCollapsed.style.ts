import { Theme } from 'theme';
import { css } from '@emotion/core';

export const breadcrumbCollapsedStyles = () => (theme: Theme) => css`
  border-radius: 50px;
  padding: 5px 10px;
  background-color: ${theme.palette.gray50};
  &:hover {
    transition: 0.5s all;
    background-color: ${theme.palette.gray100};
  }
`;

export const breadcrumbCollapsedWrapperStyles = () => css`
  cursor: pointer;
  position: relative;
`;

export const collapsedItemStyles = () => (theme: Theme) => css`
  &:hover {
    background: ${theme.palette.gray50};
  }
`;
