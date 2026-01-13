import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

export const textFieldWrapper = () => css`
  border-bottom: 1px solid ${vars.color['border-color'].decorative.default};

  label {
    display: none;
  }

  & > div > div {
    border-radius: unset;
  }

  input {
    border: none;

    top: 0;

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
`;

export const iconWrapper = () => () => css`
  display: flex;
  gap: ${rem(25)};
`;
