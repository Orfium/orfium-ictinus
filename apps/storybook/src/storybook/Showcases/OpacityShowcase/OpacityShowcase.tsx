import { type DimensionOpacityKey, dimensionVariables, useTheme } from '@orfium/ictinus';
import { get } from 'lodash-es';
import { rem } from 'polished';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';

import { Typography } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';
import { getAllPaths } from '../TokenColorsShowcase/utils';

const OpacityShowcase = () => {
  const theme = useTheme();

  const keys = getAllPaths(dimensionVariables.opacity);

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
                background: vars.color.palette.secondary.contrast,
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
