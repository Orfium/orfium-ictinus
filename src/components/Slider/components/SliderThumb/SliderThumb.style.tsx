import styled from '@emotion/styled';
import { rem, rgba } from 'polished';
import { CSSProperties } from 'react';

import { transition } from '../../../../theme/functions';

export const Thumb = styled.div<{
  disabled: boolean;
  isChanged: boolean;
  restStyleProps: CSSProperties;
}>`
  height: ${rem(16)};
  width: ${rem(16)};
  border-radius: 100px;
  background-color: ${({ theme, isChanged }) =>
    isChanged ? theme.utils.getColor('blue', 500) : '#fff'};
  border: 2px solid ${({ theme, disabled }) => theme.utils.getColor('blue', disabled ? 250 : 500)};
  ${({ restStyleProps }) => ({ ...restStyleProps })};
  box-sizing: border-box;

  &::after {
    content: '';

    height: ${rem(16)};
    width: ${rem(16)};

    border: 8px solid transparent;
    border-radius: 100px;

    position: absolute;
    top: ${rem(-10)};
    left: ${rem(-10)};

    ${transition(0.15)};
  }

  :hover {
    &::after {
      border-color: ${({ disabled }) => (!disabled ? rgba(14, 14, 23, 0.1) : undefined)};
    }
  }
`;
