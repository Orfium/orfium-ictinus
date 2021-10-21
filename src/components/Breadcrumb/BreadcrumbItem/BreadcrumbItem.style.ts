import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../theme';
import { RequiredProperties } from '../../../utils/common';

type StyleProps = {
  active: boolean;
};

export const breadcrumbItemStyles = ({ active }: RequiredProperties<StyleProps>) => (
  theme: Theme
) => css`
  display: flex;
  cursor: default;
  font-weight: ${active ? theme.typography.weights.medium : theme.typography.weights.regular};
  color: ${active ? theme.utils.getColor('darkGrey', 850) : theme.utils.getColor('lightGrey', 650)};

  & button {
    height: auto;
    background-color: white;
    padding: ${theme.spacing.sm};
    &:focus {
      outline: none;
      background-color: ${theme.utils.getColor('lightGrey', 250)};
    }

    & > span {
      margin-left: 0;
    }
  }

  & > div > div > div {
    top: 3rem;
    box-shadow: ${theme.utils.getColor('darkGrey', 650)} 0px 0px ${rem(16)};
  }
`;
