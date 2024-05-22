import useTheme from 'hooks/useTheme';
import { get } from 'lodash';
import { rem } from 'polished';
import React from 'react';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import type { DimensionBorderRadiusKey } from 'theme/dimension/borderRadius';
import dimensionBorderRadius from 'theme/dimension/variables/borderRadius';
import type { BorderRadiusKey } from 'theme/globals/borderRadius';
import globalBorderRadius from 'theme/globals/constants/borderRadius';
import { convertRemToPixels } from 'theme/utils';

import { getAllPaths } from '../TokenColorsShowcase/utils';
import Typography from 'components/Typography';

type Props = {
  type?: 'global' | 'dimension';
};

const RadiusShowcase = ({ type = 'global' }: Props) => {
  const isGlobal = type === 'global';
  const borderRadiusObject = isGlobal ? globalBorderRadius : dimensionBorderRadius;

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
