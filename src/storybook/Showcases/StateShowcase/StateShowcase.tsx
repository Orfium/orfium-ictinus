import useTheme from 'hooks/useTheme';
import { get } from 'lodash';
import React from 'react';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import type { DimensionStateKey } from 'theme/dimension/state';
import dimensionState from 'theme/dimension/variables/state';
import { convertRemToPixels } from 'theme/utils';

import { getAllPaths } from '../TokenColorsShowcase/utils';
import Typography from 'components/Typography';

const StateShowcase = () => {
  const theme = useTheme();

  const keys = getAllPaths(dimensionState);

  return (
    <div css={WrapperStyle}>
      {keys.map((key) => {
        return (
          <div key={key} css={{ display: 'flex', flex: '0 0 100%', alignItems: 'center' }}>
            <div
              css={() => ({
                height: theme.dimension.state.get(key as DimensionStateKey),
                width: theme.dimension.state.get(key as DimensionStateKey),
                background: theme.tokens.colors.get('palette.secondary.contrast'),
                borderRadius: theme.dimension.borderRadius.get('circle'),
              })}
            />
            <div css={{ margin: 16, flex: 1 }}>
              <Typography isBold variant="title01" type="primary">
                $state.{key}
              </Typography>
              <Typography variant="body02" type="secondary" component="div">
                {`${get(dimensionState, key).value} = ${convertRemToPixels(
                  theme.dimension.state.get(key as DimensionStateKey)
                )}px`}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StateShowcase;
