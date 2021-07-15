import React, { FC } from 'react';

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

const AsyncButtonShowcase: FC<{ text: string; btnSize?: 'lg' | 'md' | 'sm' | undefined }> = ({
  text,
  btnSize,
}) => {
  return (
    <Button
      type={'secondary'}
      size={btnSize}
      onClick={setLoading => {
        setLoading?.(true);

        serviceMock()
          .then(res => {
            console.log(res);
          })
          .finally(() => setLoading?.(false));
      }}
    >
      {text}
    </Button>
  );
};

export default AsyncButtonShowcase;
