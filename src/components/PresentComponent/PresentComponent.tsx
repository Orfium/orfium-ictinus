/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

type Props = {
  name: string;
};

const PresentComponent: React.FC<Props> = ({ name, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
      <p
        style={{
          paddingTop: '8px',
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default PresentComponent;
