import {
  type BorderRadiusKey,
  convertRemToPixels,
  type DimensionBorderRadiusKey,
  dimensionVariables,
  useTheme,
} from '@orfium/ictinus';
import { get } from 'lodash-es';
import { rem } from 'polished';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';

import { Typography } from '@orfium/ictinus';
import { getAllPaths } from '../TokenColorsShowcase/utils';

type Props = {
  type?: 'global' | 'dimension';
};

const RadiusShowcase = ({ type = 'global' }: Props) => {
  const isGlobal = type === 'global';
  const borderRadiusObject = dimensionVariables.borderRadius;

  const theme = useTheme();

  const keys = getAllPaths(borderRadiusObject);

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
                borderRadius: isGlobal
                  ? theme.globals.borderRadius.get(key as BorderRadiusKey)
                  : theme.dimension.borderRadius.get(key as DimensionBorderRadiusKey),
                margin: 'auto',
              })}
            />
            <div css={{ margin: 16, flex: 1 }}>
              <Typography isBold variant="title01" type="primary">
                $borderRadius.{key}
              </Typography>
              <Typography variant="body02" type="secondary" component="div">
                {get(borderRadiusObject, key).value}
                {!isGlobal
                  ? ` = ${convertRemToPixels(
                      theme.dimension.borderRadius.get(key as DimensionBorderRadiusKey)
                    )}px`
                  : ``}
              </Typography>
              {get(borderRadiusObject, key).description && (
                <Typography variant="body02" type="secondary" component="div">
                  {get(borderRadiusObject, key).description}
                </Typography>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RadiusShowcase;
