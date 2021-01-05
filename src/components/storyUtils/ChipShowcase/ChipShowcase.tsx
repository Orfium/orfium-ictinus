/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Chip from '../../Chip';
import { Props } from '../../Chip/Chip';

const ChipShowcase: React.FC<Props> = ({ children, ...props }) => {
  const handleClick = (msg: string) => {
    alert(msg);
  };

  return (
    <div>
      <div css={{ marginBottom: '20px' }}>
        <Chip {...props} leftIcon={<img src="https://brandmark.io/logo-rank/random/pepsi.png" />}>
          {children}
        </Chip>
      </div>

      <div css={{ marginBottom: '20px' }}>
        <Chip {...props} rightIcon={<img src="https://brandmark.io/logo-rank/random/pepsi.png" />}>
          {children}
        </Chip>
      </div>
      <div css={{ marginBottom: '20px' }}>
        <Chip
          {...props}
          rightIcon={<img src="https://brandmark.io/logo-rank/random/pepsi.png" />}
          onRightIconClick={() => handleClick('You clicked the right icon!')}
          leftIcon={<img src="https://brandmark.io/logo-rank/random/pepsi.png" />}
          onLeftIconClick={() => handleClick('You clicked the left icon!')}
        >
          {children}
        </Chip>
      </div>
    </div>
  );
};

export default ChipShowcase;
