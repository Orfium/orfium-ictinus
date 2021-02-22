import React from 'react';
import useBreakpoints, { queriesKeys } from 'hooks/useBreakpoints';

const Breakpoints = () => {
  const breakpoints = useBreakpoints();

  return (
    <div>
      {queriesKeys.map(key => (
        <div
          key={key}
          style={{
            width: 140,
            padding: 8,
            textAlign: 'center',
            border: '1px solid #cecece',
            color: breakpoints[key] ? 'green' : 'gray',
          }}
        >
          {key}
        </div>
      ))}
    </div>
  );
};

export default Breakpoints;
