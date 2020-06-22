import { Theme } from 'theme';
import { css } from '@emotion/core';
import { rem } from 'polished';
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

  & button {
    height: auto;
  }
  & > div > div > div {
    top: 2rem;
    box-shadow: #8080802b 0px 0px ${rem(16)};
  }
`;
