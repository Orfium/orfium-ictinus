import { Theme } from 'theme';
import { css } from '@emotion/core';
import { RequiredProperties } from 'utils/common';

type StyleProps = {
  active: boolean;
};

export const breadcrumbItemStyles = ({ active }: RequiredProperties<StyleProps>) => (
  theme: Theme
) => css`
  display: flex;
  cursor: default;
  color: ${active ? theme.palette.gray200 : theme.palette.gray100};
  &:hover {
    color: ${theme.palette.gray200};
  }
`;
