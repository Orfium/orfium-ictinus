import styled from '@emotion/styled';
import { rem } from 'polished';
import type { CSSProperties } from 'react';

export const Track = styled.div<{
  background: string;
  restStyleProps: CSSProperties;
  isDisabled: boolean;
}>`
  height: ${rem(3)};
  border-radius: 4px;
  background: ${({ background }) => background};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'unset')} !important;
`;
