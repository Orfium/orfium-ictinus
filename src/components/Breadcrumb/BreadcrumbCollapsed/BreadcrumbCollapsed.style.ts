import { Theme } from 'theme';
import { css } from '@emotion/core';
import { rem } from 'polished';

type BreadcrumbIconStyle = {
  open: boolean;
};

export const breadcrumbCollapsedStyles = ({ open }: BreadcrumbIconStyle) => (theme: Theme) => css`
  padding: 0.1rem;
  transform: rotate(90deg);
  border-radius: 1rem;
  background-color: ${open ? theme.palette.gray100 : theme.palette.gray};
`;

export const breadcrumbCollapsedWrapperStyles = () => css`
  display: flex;
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
