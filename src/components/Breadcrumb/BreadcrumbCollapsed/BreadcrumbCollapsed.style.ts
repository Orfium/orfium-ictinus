import { Theme } from 'theme';
import { css } from '@emotion/core';
import { rem } from 'polished';

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
    transition: 0.5s all;
    background: ${theme.palette.gray50};
  }
  height: ${rem(32)};
  font-size: ${theme.typography.fontSizes['14']};
  list-style-type: none;
  padding-top: ${rem(16)};
  height: ${rem(32)};
  font-size: 0.875rem;
`;
