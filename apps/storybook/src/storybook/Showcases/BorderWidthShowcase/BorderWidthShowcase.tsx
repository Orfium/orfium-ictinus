import { useTheme } from '@orfium/ictinus';
import { get } from 'lodash-es';
import { rem } from 'polished';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import type { DimensionBorderWidthKey } from 'theme/dimension/borderWidth';
import dimensionBorderWidth from 'theme/dimension/variables/borderWidth';
import { convertRemToPixels } from 'theme/utils';

import { Typography } from '@orfium/ictinus';
import { getAllPaths } from '../TokenColorsShowcase/utils';

const BorderWidthShowcase = () => {
  const theme = useTheme();

  const keys = getAllPaths(dimensionBorderWidth);

  const boxSize = 64;

  return (
    <div css={WrapperStyle}>
      {keys.map((key) => {
        return (
          <div key={key} css={{ display: 'flex', flex: '0 0 100%', alignItems: 'center' }}>
            <div
              css={() => ({
                height: rem(boxSize),
                width: rem(boxSize),
                background: 'linear-gradient(45deg, #a8b1ff 0%, #cad0ff 100%)',
                border: `${theme.dimension.borderWidth.get(
                  key as DimensionBorderWidthKey
                )} solid ${theme.tokens.colors.get('borderColor.interactive.upsell')}`,
                margin: 'auto',
              })}
            />
            <div css={{ margin: 16, flex: 1 }}>
              <Typography isBold variant="title01" type="primary">
                $borderRadius.{key}
              </Typography>
              <Typography variant="body02" type="secondary" component="div">
                {`${get(dimensionBorderWidth, key).value} =
                ${convertRemToPixels(
                  theme.dimension.borderWidth.get(key as DimensionBorderWidthKey)
                )}px`}
              </Typography>
              {get(dimensionBorderWidth, key).description && (
                <Typography variant="body02" type="secondary" component="div">
                  {get(dimensionBorderWidth, key).description}
                </Typography>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BorderWidthShowcase;
