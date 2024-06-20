import useTheme from 'hooks/useTheme';
import { get } from 'lodash-es';
import React from 'react';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import type { DimensionMinHeightKey } from 'theme/dimension/minHeight';
import dimensionMinHeight from 'theme/dimension/variables/minHeight';
import { convertRemToPixels, rem } from 'theme/utils';

import { getAllPaths } from '../TokenColorsShowcase/utils';
import Typography from 'components/Typography';

const MinHeightShowcase = () => {
  const theme = useTheme();

  const keys = getAllPaths(dimensionMinHeight);

  const boxSize = 100;

  return (
    <div css={WrapperStyle}>
      {keys.map((key) => {
        return (
          <div key={key} css={{ display: 'flex', flex: '0 0 100%', alignItems: 'flex-start' }}>
            <div
              css={() => ({
                height: theme.dimension.minHeight.get(key as DimensionMinHeightKey),
                width: rem(boxSize),
                background: theme.tokens.colors.get('palette.secondary.contrast'),
                margin: 'auto',
              })}
            />
            <div css={{ margin: 16, flex: 1 }}>
              <Typography isBold variant="title01" type="primary">
                $minHeight.{key}
              </Typography>
              <Typography variant="body02" type="secondary" component="div">
                {`${get(dimensionMinHeight, key).value} =
                ${convertRemToPixels(
                  theme.dimension.minHeight.get(key as DimensionMinHeightKey)
                )}px`}
              </Typography>
              {get(dimensionMinHeight, key).description && (
                <Typography variant="body02" type="secondary" component="div">
                  {get(dimensionMinHeight, key).description}
                </Typography>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MinHeightShowcase;
