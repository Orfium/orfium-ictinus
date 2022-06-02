import styled from '@emotion/styled';
import { rem } from 'polished';
import { CSSProperties } from 'react';

export const Mark = styled.div<{
  background: string;
  restStyleProps: CSSProperties;
}>`
  height: ${rem(7)};
  width: ${rem(7)};
  border-radius: 100%;
  background: ${({ background }) => background};
`;
