import { Theme } from 'theme';
import { css } from '@emotion/core';
import { rem } from 'polished';

export const breadcrumbCollapsedStyles = () => (theme: Theme) => css`
  border-radius: 1rem;
  padding: 5px 10px;
  color: ${theme.palette.gray200};
  background-color: ${theme.palette.gray};
  font-size: ${theme.typography.fontSizes['18']};
  &:hover {
    color: ${theme.palette.white};
    transition: 0.5s background-color;
    background-color: ${theme.palette.gray50};
  }
`;

export const breadcrumbCollapsedWrapperStyles = () => css`
  cursor: pointer;
  position: relative;
`;

export const collapsedItemStyles = () => (theme: Theme) => css`
  &:hover {
    transition: 0.5s all;
    background: ${theme.palette.gray};
  }
  font-size: ${theme.typography.fontSizes['14']};
  list-style-type: none;
  & > a {
    padding: ${rem(16)};
    display: block;
    text-align: left;
  }
`;

export const inlineBreadcrumbWrapperStyles = {
  padding: 0,
  boxShadow: `#8080802b 0px 0px ${rem(16)}`,
  top: rem(32),
  width: rem(164),
};
