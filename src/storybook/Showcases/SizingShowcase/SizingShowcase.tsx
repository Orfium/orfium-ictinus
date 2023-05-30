import { map } from 'lodash';
import { rem } from 'polished';
import React from 'react';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import sizing from 'theme/globals/constants/sizing';

import Typography from 'components/Typography';

const SizingShowcase = () => {
  const spaces = map(sizing);

  return (
    <div css={WrapperStyle}>
      {spaces.map((space, index) => {
        return (
          <div key={space.value} css={{ display: 'flex', flex: '0 0 100%', alignItems: 'center' }}>
            <div
              css={() => ({
                height: rem(space.value),
                width: rem(space.value),
                background: 'linear-gradient(45deg, #a8b1ff 0%, #cad0ff 100%)',
                margin: 'auto',
              })}
            />
            <div css={{ margin: 10, flex: 1 }}>
              <Typography isBold variant={'title01'} type={'primary'}>
                $sizing.{index}
              </Typography>
              <Typography variant={'body02'} type={'secondary'}>
                {space.value}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SizingShowcase;
