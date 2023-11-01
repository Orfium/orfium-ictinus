import * as React from 'react';

type PresentComponentProps = {
  name: string;
  width?: string | number;
};

const PresentComponent: React.FCC<PresentComponentProps> = ({ name, width = 'auto', children }) => {
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
