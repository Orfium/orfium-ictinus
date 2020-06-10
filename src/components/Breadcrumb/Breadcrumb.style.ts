import { Theme } from 'theme';
import { css } from '@emotion/core';
import { RequiredProperties } from '../../utils/common';

type StyleProps = {
  active: boolean;
};

export const breadcrumbStyles = () => (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const breadcrumbItemStyles = ({ active }: RequiredProperties<StyleProps>) => (
  theme: Theme
) => css`
  color: ${active ? theme.palette.gray300 : theme.palette.gray100};
`;
