import React from 'react';

const Tippy: React.FC<{ content: string }> = props => {
  const { children, content, ...rest } = props;

  return (
    <>
      <div {...rest}>{children}</div>
      <div>{content}</div>
    </>
  );
};

export default Tippy;
