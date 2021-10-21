import { css } from '@emotion/react';
import { rem } from 'theme/utils';

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
    ? theme.utils.getColor('lightGrey', 650)
    : theme.utils.getColor('lightGrey', 200)};
`;

export const breadcrumbCollapsedWrapperStyles = () => css`
  display: flex;
  cursor: pointer;
  position: relative;
`;

export const inlineBreadcrumbWrapperStyles = {
  padding: 0,
  boxShadow: `#8080802b 0px 0px ${rem(16)}`,
  top: rem(40),
  width: rem(164),
};
