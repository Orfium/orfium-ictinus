/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

type Props = {
  vertical: boolean;
};

const Stack: React.FC<Props> = ({ vertical = false, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row' }}>
      {React.Children.toArray(children).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} style={{ margin: 5 }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Stack;
