import { css } from '@emotion/react';
import React, { FC, useState } from 'react';

import Button from '../../Button';

const serviceMock = (isSuccess = true) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (isSuccess) {
        res('success');
      } else {
        rej('fail');
      }
    }, 3000);
  });

const AsyncButtonShowcase: FC<{
  text: string;
  btnSize?: 'lg' | 'md' | 'sm' | undefined;
  type?: 'primary' | 'secondary';
}> = ({ text, btnSize, type = 'primary' }) => {
  const [state, setState] = useState('');
  const [response, setResponse] = useState('');

  return (
    <>
      <Button
        type={type}
        size={btnSize}
        onClick={(setLoading, event) => {
          setLoading?.(true);
          setState((event?.target as HTMLElement).innerText);
          serviceMock()
            .then(res => {
              setResponse(res as string);
            })
            .finally(() => setLoading?.(false));
        }}
      >
        {text}
      </Button>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div>Button inner text from event: {state}</div>
        <div>Fake response: {response}</div>
      </div>
    </>
  );
};

export default AsyncButtonShowcase;
