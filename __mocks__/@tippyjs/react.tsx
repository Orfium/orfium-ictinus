import React, { PropsWithChildren } from 'react';

const Tippy = (props: PropsWithChildren<{ content: string }>) => {
  const { children, content, ...rest } = props;

  return (
    <>
      <div {...rest}>{children}</div>
      <div>{content}</div>
    </>
  );
};

export default Tippy;
