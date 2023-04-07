import { css, SerializedStyles } from '@emotion/react';

export const WrapperStyle = (): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 40px 15px;

  > div {
    margin: 0 5px;
    text-align: center;

    > div:nth-child(2) {
      margin: 10px 0;
    }

    > div:last-of-type {
      font-size: 0.8rem;
    }
  }
`;
