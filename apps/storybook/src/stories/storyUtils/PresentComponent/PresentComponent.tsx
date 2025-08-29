import * as React from 'react';

import { Typography } from '@orfium/ictinus';

type PresentComponentProps = {
  name: string;
  width?: string | number;
  isVertical?: boolean;
};

const PresentComponent: React.FCC<PresentComponentProps> = ({
  name,
  width = 'auto',
  isVertical = false,
  children,
}) => {
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
      <div
        style={{
          display: 'flex',
          flexDirection: isVertical ? 'column' : 'row',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
          width,
        }}
      >
        {children}
      </div>
      <Typography variant="label03" type="secondary">
        {name}
      </Typography>
    </div>
  );
};

export default PresentComponent;
