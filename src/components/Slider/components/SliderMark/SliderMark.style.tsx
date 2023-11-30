import styled from '@emotion/styled';
import { rem, rgba } from 'polished';
import type { CSSProperties } from 'react';

export const Mark = styled.div<{
  background: string;
  isDisabled: boolean;
  labelValue: string;
  restStyleProps: CSSProperties;
}>`
  height: ${rem(7)};
  width: ${rem(7)};
  border-radius: 100%;
  background: ${({ background }) => background};
  position: relative;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'unset')};

  :hover {
    background: ${({ theme, isDisabled }) =>
      !isDisabled ? theme.utils.getColor('blue', 600) : undefined};

    ::before {
      content: '${({ labelValue }) => labelValue}';
      color: white;
      display: ${({ isDisabled }) => (isDisabled ? 'none' : 'flex')};
      justify-content: center;
      font-size: ${({ theme }) => theme.globals.typography.fontSize[11]};
      background: black;
      position: absolute;
      padding: ${({ theme }) => theme.globals.spacing.get('4')};
      box-sizing: border-box;
      top: ${rem(-35)};
      left: ${rem(-14.5)};
      width: ${rem(35)};
      height: ${rem(27)};
      border-radius: 2px;
    }

    ::after {
      content: ' ';
      display: ${({ isDisabled }) => (isDisabled ? 'none' : 'unset')};
      position: absolute;
      top: ${rem(-10)};
      left: ${rem(-2.5)};
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #000;
    }
  }
`;

export const MarkHoverCircle = styled.div<{ isDisabled: boolean }>`
  ::after {
    content: ' ';

    height: ${rem(7)};
    width: ${rem(7)};

    border: 4px solid transparent;
    border-radius: 100px;

    position: absolute;
    top: ${rem(-4)};
    left: ${rem(-4)};
  }

  :hover {
    &::after {
      border-color: ${({ isDisabled }) => (!isDisabled ? rgba(14, 14, 23, 0.1) : undefined)};
    }
  }
`;
