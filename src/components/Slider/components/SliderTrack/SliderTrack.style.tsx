import styled from '@emotion/styled';
import { rem } from 'polished';
import { CSSProperties } from 'react';

export const Track = styled.div<{
  background: string;
  restStyleProps: CSSProperties;
}>`
  height: ${rem(3)};

  max-width: ${rem(190)};

  border-radius: 4px;
  background: ${({ background }) => background};
`;
