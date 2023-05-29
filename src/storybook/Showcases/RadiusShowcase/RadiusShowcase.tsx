import { map } from 'lodash';
import { rem } from 'polished';
import React from 'react';
import borderRadius from 'theme/globals/constants/borderRadius';

import { WrapperStyle } from './RadiusShowcase.style';

const RadiusShowcase = () => {
  const spaces = map(borderRadius);
  const figmaBoxSize = 200;
  const boxSize = 50;

  return (
    <div css={WrapperStyle}>
      {spaces.map((space, index) => {
        const percentage = (Number(space.value.replace('px', '')) / figmaBoxSize) * 100;

        return (
          <div
            key={space.value}
            style={{
              width: `80rem`,
            }}
          >
            <div
              style={{
                height: rem(boxSize),
                width: rem(boxSize),
                background: '#1ee9b5',
                borderRadius: `${percentage}%`,
                margin: 'auto',
              }}
            />
            <div>{percentage}%</div>
            <div>borderRadius.{index}</div>
            <p>{space.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RadiusShowcase;
