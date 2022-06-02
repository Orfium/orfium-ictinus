import styled from '@emotion/styled';
import { rem } from 'polished';

import { flex } from '../../theme/functions';

export const Container = styled.div`
  ${flex};
  flex-direction: column;
  gap: ${rem(22)};
  max-width: ${rem(170)};
`;

//TODO: Finish implementing this when Prefix/Suffix component is implemented
export const InputContainer = styled.div`
  ${flex};
  gap: ${rem(64)};
  align-items: center;
  justify-content: space-between;
`;
