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
  cursor: pointer;
  color: ${active ? theme.palette.gray300 : theme.palette.gray100};
  &:hover {
    color: ${theme.palette.gray300};
  }
`;
