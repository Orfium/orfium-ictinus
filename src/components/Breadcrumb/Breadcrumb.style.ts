import { Theme } from 'theme';
import { css } from '@emotion/core';
import { RequiredProperties } from '../../utils/common';

type StyleProps = {
  active: boolean;
};

export const breadcrumbStyles = () => (theme: Theme) => css`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
`;

export const breadcrumbItemStyles = ({ active }: RequiredProperties<StyleProps>) => (
  theme: Theme
) => css`
  display: flex;
  color: ${active ? theme.palette.gray300 : theme.palette.gray100};
`;
