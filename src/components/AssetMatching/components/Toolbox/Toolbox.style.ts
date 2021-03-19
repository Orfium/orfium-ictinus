import { Theme } from '../../../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { flex } from '../../../../theme/functions';
import styled from '@emotion/styled';
import { cardElevation } from '../../../Card/Card.style';

const list = (theme: Theme): SerializedStyles => css`
  flex-direction: column;
  z-index: 10;
  position: absolute;
  background: white;
  top: 55px;
  right: 0;
  margin: 0;
  padding: 0;
  ${cardElevation(theme, '02')};
  > li {
    margin: 0;
    width: 220px;
    list-style: none;
    > button {
      width: 100%;
      border: none;
      color: ${theme.palette.black};
    }
  }
`;

const buttonWrapper = css`
  > button {
    border: none;
  }
`;

const secondaryActionsWrapper = css`
  ${flex};
  position: relative;
`;

export const Flex = styled.div`
  ${flex};
`;

export default {
  buttonWrapper,
  list,
  secondaryActionsWrapper,
};
