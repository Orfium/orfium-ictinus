import { map } from 'lodash';
import { rem } from 'polished';
import React from 'react';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import borderRadius from 'theme/globals/constants/borderRadius';

import Typography from 'components/Typography';

// import { WrapperStyle } from './RadiusShowcase.style';

const RadiusShowcase = () => {
  const spaces = map(borderRadius);
  const figmaBoxSize = 200;
  const boxSize = 124;

  return (
    <div css={WrapperStyle}>
      {spaces.map((space, index) => {
        const percentage = (Number(space.value.replace('px', '')) / figmaBoxSize) * 100;

        return (
          <div key={space.value} css={{ display: 'flex', flex: '0 0 100%', alignItems: 'center' }}>
            <div
              css={() => ({
                height: rem(boxSize),
                width: rem(boxSize),
                background: 'linear-gradient(45deg, #a8b1ff 0%, #cad0ff 100%)',
                borderRadius: `${percentage}%`,
                margin: 'auto',
              })}
            />
            <div css={{ margin: 10, flex: 1 }}>
              <Typography isBold variant={'title01'} type={'primary'}>
                $borderRadius.{index}
              </Typography>
              <Typography variant={'body02'} type={'secondary'}>
                {percentage}%
              </Typography>
              <Typography variant={'body02'} type={'secondary'}>
                {space.description}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RadiusShowcase;
