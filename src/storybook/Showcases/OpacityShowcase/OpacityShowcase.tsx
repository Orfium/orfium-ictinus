import useTheme from 'hooks/useTheme';
import { get } from 'lodash';
import { rem } from 'polished';
import React from 'react';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import type { DimensionOpacityKey } from 'theme/dimension/opacity';
import dimensionOpacity from 'theme/dimension/variables/opacity';

import { getAllPaths } from '../TokenColorsShowcase/utils';
import Typography from 'components/Typography';

const OpacityShowcase = () => {
  const theme = useTheme();

  const keys = getAllPaths(dimensionOpacity);

  const boxSize = 64;

  return (
    <div css={WrapperStyle}>
      {keys.map((key) => {
        return (
          <div key={key} css={{ display: 'flex', flex: '0 0 100%', alignItems: 'flex-start' }}>
            <div
              css={() => ({
                height: rem(boxSize),
                width: rem(boxSize),
                background: theme.tokens.colors.get('palette.secondary.contrast'),
                opacity: theme.dimension.opacity.get(key as DimensionOpacityKey),
                margin: 'auto',
              })}
            />
            <div css={{ margin: 16, flex: 1 }}>
              <Typography isBold variant="title01" type="primary">
                $opacity.{key}
              </Typography>
              <Typography variant="body02" type="secondary" component="div">
                {get(dimensionOpacity, key).value}
              </Typography>
              {get(dimensionOpacity, key).description && (
                <Typography variant="body02" type="secondary" component="div">
                  {get(dimensionOpacity, key).description}
                </Typography>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OpacityShowcase;
