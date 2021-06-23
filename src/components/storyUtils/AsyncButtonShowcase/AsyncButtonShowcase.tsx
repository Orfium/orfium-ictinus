import React from 'react';
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

const AsyncButtonShowcase = () => {
  return (
    <Button
      size={'sm'}
      onClick={setLoading => {
        setLoading?.(true);

        serviceMock()
          .then(res => {
            console.log(res);
          })
          .finally(() => setLoading?.(false));
      }}
    >
      Async Action
    </Button>
  );
};

export default AsyncButtonShowcase;
