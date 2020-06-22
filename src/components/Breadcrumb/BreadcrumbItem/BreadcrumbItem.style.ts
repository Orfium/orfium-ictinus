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
    background-color: white;
    padding: ${theme.spacing.sm};
    &:focus {
      outline: none;
      background-color: ${theme.palette.gray};
    }

    & > span {
      margin-left: 0;
    }
  }

  & > div > div > div {
    top: 3rem;
    box-shadow: #8080802b 0px 0px ${rem(16)};
  }
`;
