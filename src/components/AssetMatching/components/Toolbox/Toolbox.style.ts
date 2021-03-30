import { Theme } from 'theme';
import { css, SerializedStyles } from '@emotion/core';
import { flex } from 'theme/functions';
import { cardElevation } from 'components/Card/Card.style';
import { rem } from 'polished';

const list = (theme: Theme): SerializedStyles => css`
  flex-direction: column;
  z-index: 9;
  position: absolute;
  background: white;
  top: ${rem(55)};
  right: 0;
  margin: 0;
  padding: 0;
  ${cardElevation(theme, '02')};
  > li {
    margin: 0;
    width: ${rem(220)};
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

export default {
  buttonWrapper,
  list,
  secondaryActionsWrapper,
};
