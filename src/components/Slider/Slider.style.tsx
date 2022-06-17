import styled from '@emotion/styled';
import { rem } from 'polished';

import { flex } from '../../theme/functions';

export const Container = styled.div`
  ${flex};
  flex-direction: column;
  gap: ${rem(22)};
  max-width: ${rem(185)};
`;

export const InputsContainer = styled.div`
  ${flex};
  margin-left: ${rem(-12)};
  gap: ${rem(20)};
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: ${rem(80)};
`;
