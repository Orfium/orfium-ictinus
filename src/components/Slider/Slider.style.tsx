import styled from '@emotion/styled';
import { rem } from 'polished';

import { flex } from '../../theme/functions';

export const Container = styled.div`
  ${flex};
  flex-direction: column;
  gap: ${rem(22)};
`;

export const InputsContainer = styled.div`
  ${flex};
  margin-left: ${rem(-7)};
  margin-right: ${rem(-7)};
  gap: ${rem(20)};
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: ${rem(80)};
`;
