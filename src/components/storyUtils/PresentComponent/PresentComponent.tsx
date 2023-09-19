import * as React from 'react';

import { ReactFCC } from '../../../utils/types';

type Props = {
  name: string;
  width?: string;
};

const PresentComponent: ReactFCC<Props> = ({ name, width = 'auto', children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        width,
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
