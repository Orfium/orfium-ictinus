import {
  convertRemToPixels,
  type DimensionMinHeightKey,
  dimensionVariables,
  rem,
  useTheme,
} from '@orfium/ictinus';
import { get } from 'lodash-es';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';

import { Typography } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';
import { getAllPaths } from '../TokenColorsShowcase/utils';

const MinHeightShowcase = () => {
  const theme = useTheme();

  const keys = getAllPaths(dimensionVariables.minHeight);

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
                background: vars.color.palette.secondary.contrast,
                margin: 'auto',
              })}
            />
            <div css={{ margin: 16, flex: 1 }}>
              <Typography isBold variant="title01" type="primary">
                $minHeight.{key}
              </Typography>
              <Typography variant="body02" type="secondary" component="div">
                {`${get(dimensionVariables.minHeight, key).value} =
                ${convertRemToPixels(
                  theme.dimension.minHeight.get(key as DimensionMinHeightKey)
                )}px`}
              </Typography>
              {get(dimensionVariables.minHeight, key).description && (
                <Typography variant="body02" type="secondary" component="div">
                  {get(dimensionVariables.minHeight, key).description}
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
