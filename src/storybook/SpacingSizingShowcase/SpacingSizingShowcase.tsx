import { map } from 'lodash';
import { rem } from 'polished';
import React from 'react';
import spacing from 'theme/globals/constants/spacing';

import { WrapperStyle } from './SpacingSizingShowcase.style';

const SpacingSizingShowcase = () => {
  const spaces = map(spacing);

  return (
    <div css={WrapperStyle}>
      {spaces.map((space, index) => (
        <div
          key={space.value}
          style={{
            width: `calc(100%/${spaces.length})`,
          }}
        >
          <div
            style={{
              height: rem(`${space.value}px`),
              background: '#1ee9b5',
            }}
          />
          <div>{space.value}px</div>
          <div>spacing.{index}</div>
        </div>
      ))}
    </div>
  );
};

export default SpacingSizingShowcase;
