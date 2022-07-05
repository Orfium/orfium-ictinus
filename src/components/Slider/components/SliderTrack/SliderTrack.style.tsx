import styled from '@emotion/styled';
import { rem } from 'polished';
import { CSSProperties } from 'react';

export const Track = styled.div<{
  background: string;
  restStyleProps: CSSProperties;
  disabled: boolean;
}>`
  height: ${rem(3)};
  border-radius: 4px;
  background: ${({ background }) => background};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'unset')} !important;
`;
