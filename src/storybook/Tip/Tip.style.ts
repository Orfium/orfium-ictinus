import styled from '@emotion/styled';

import { BoxWrapper } from '../../components/Box/Box.style';

export const TipWrapper = styled.div`
  position: relative;
  padding: 16px;
  width: auto;
  height: fit-content;
  background: #e7eefe;
  display: flex;
  align-items: center;
  line-height: 135%;
  margin: 32px 0;
  border-radius: 4px;

  h4 {
    margin: 0 0 8px 0;
  }

  p {
    margin: 0;
  }

  ${BoxWrapper} {
    margin: 0;
  }
`;
