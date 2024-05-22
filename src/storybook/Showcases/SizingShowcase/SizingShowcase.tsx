import useTheme from 'hooks/useTheme';
import { get } from 'lodash';
import React from 'react';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import type { DimensionSizingKey } from 'theme/dimension/sizing';
import dimensionSizing from 'theme/dimension/variables/sizing';
import globalSizing from 'theme/globals/constants/sizing';
import type { SizingKey } from 'theme/globals/sizing';
import { convertRemToPixels } from 'theme/utils';

import { getAllPaths } from '../TokenColorsShowcase/utils';
import Typography from 'components/Typography';

type Props = {
  type?: 'global' | 'dimension';
};

const SizingShowcase = ({ type = 'global' }: Props) => {
  const isGlobal = type === 'global';
  const sizingObject = isGlobal ? globalSizing : dimensionSizing;

  const theme = useTheme();

  const keys = getAllPaths(sizingObject);

  return (
    <div css={WrapperStyle}>
      {keys.map((key) => {
        return (
          <div key={key} css={{ display: 'flex', flex: '0 0 100%', alignItems: 'center' }}>
            <div
              css={() => ({
                height: isGlobal
                  ? theme.globals.sizing.get(key as SizingKey)
                  : theme.dimension.sizing.get(key as DimensionSizingKey),
                width: isGlobal
                  ? theme.globals.sizing.get(key as SizingKey)
                  : theme.dimension.sizing.get(key as DimensionSizingKey),
                background: 'linear-gradient(45deg, #a8b1ff 0%, #cad0ff 100%)',
                margin: 'auto',
              })}
            />
            <div css={{ margin: 16, flex: 1 }}>
              <Typography isBold variant="title01" type="primary">
                $sizing.{key}
              </Typography>
              <Typography variant="body02" type="secondary" component="div">
                {get(sizingObject, key).value}{' '}
                {!isGlobal
                  ? ` = ${convertRemToPixels(
                      theme.dimension.sizing.get(key as DimensionSizingKey)
                    )}px`
                  : ``}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SizingShowcase;
