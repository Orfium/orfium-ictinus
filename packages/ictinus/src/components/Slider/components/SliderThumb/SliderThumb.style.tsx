import styled from '@emotion/styled';
import { vars } from '@orfium/tokens';
import { rem, rgba } from 'polished';
import type { CSSProperties } from 'react';

import { transition } from 'theme/functions';

export const Thumb = styled.div<{
  isDisabled: boolean;
  isChanged: boolean;
  restStyleProps: CSSProperties;
}>`
  height: ${rem(16)};
  width: ${rem(16)};
  border-radius: 100px;
  background-color: ${({ isChanged }) =>
    isChanged ? vars.color.palette.primary.base : vars.color.background.default};
  border: 2px solid ${vars.color.palette.primary.base};
  ${({ restStyleProps }) => ({ ...restStyleProps })};
  box-sizing: border-box;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'unset')} !important;

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
      border-color: ${({ isDisabled }) => (!isDisabled ? rgba(14, 14, 23, 0.1) : undefined)};
    }
  }
`;
