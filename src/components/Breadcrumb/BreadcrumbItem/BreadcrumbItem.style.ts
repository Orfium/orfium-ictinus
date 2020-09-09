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
  color: ${active ? theme.palette.flat.darkGray[400] : theme.palette.flat.lightGray[700]};

  & button {
    height: auto;
    background-color: white;
    padding: ${theme.spacing.sm};
    &:focus {
      outline: none;
      background-color: ${theme.palette.flat.lightGray[200]};
    }

    & > span {
      margin-left: 0;
    }
  }

  & > div > div > div {
    top: 3rem;
    box-shadow: ${theme.palette.flat.darkGray[500]} 0px 0px ${rem(16)};
  }
`;
