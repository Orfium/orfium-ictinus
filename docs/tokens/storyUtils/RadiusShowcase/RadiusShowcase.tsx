import { map } from 'lodash';
import { rem } from 'polished';
import React from 'react';
import borderRadius from 'theme/globals/constants/borderRadius';

import { WrapperStyle } from './RadiusShowcase.style';

const RadiusShowcase = () => {
  const spaces = map(borderRadius);

  return (
    <div css={WrapperStyle}>
      {spaces.map((space, index) => (
        <div
          key={space.value}
          style={{
            width: `80rem`,
          }}
        >
          <div
            style={{
              height: rem(100),
              width: rem(100),
              background: '#1ee9b5',
              borderRadius: rem(space.value),
              margin: 'auto',
            }}
          />
          <div>{space.value}</div>
          <div>borderRadius.{index}</div>
          <p>{space.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RadiusShowcase;
