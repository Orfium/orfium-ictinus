import { css } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../../theme';

type BreadcrumbIconStyle = {
  open: boolean;
};

export const ClickAwayListenerStyle = {
  margin: 'auto',
};
export const breadcrumbCollapsedStyles = ({ open }: BreadcrumbIconStyle) => (theme: Theme) => css`
  padding: ${rem(2)};
  margin-top: ${rem(1)};
  transform: rotate(90deg);
  border-radius: 3rem;
  background-color: ${open
    ? theme.utils.getColor('lightTintedGrey', 850)
    : theme.utils.getColor('lightTintedGrey', 250)};
`;

export const breadcrumbCollapsedWrapperStyles = () => css`
  display: flex;
  cursor: pointer;
  position: relative;
`;

export const collapsedItemStyles = () => (theme: Theme) => css`
  &:hover {
    transition: 0.5s all;
    background: ${theme.utils.getColor('lightTintedGrey', 250)};
  }
  font-size: ${theme.typography.fontSizes['14']};
  // getFontSize
  // getTypography('tahoma') { size, fontFamily }
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
  top: rem(40),
  width: rem(164),
};
