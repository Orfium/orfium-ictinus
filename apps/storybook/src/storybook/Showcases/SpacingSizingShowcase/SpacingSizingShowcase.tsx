import {
  convertRemToPixels,
  type DimensionSpacingKey,
  dimensionVariables,
  type SpacingKey,
  useTheme,
} from '@orfium/ictinus';
import { get } from 'lodash-es';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';

import { Typography } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';
import { getAllPaths } from '../TokenColorsShowcase/utils';

type Props = {
  type?: 'global' | 'dimension';
};

const SpacingSizingShowcase = ({ type = 'global' }: Props) => {
  const isGlobal = type === 'global';
  const spacingObject = dimensionVariables.spacing;

  const theme = useTheme();

  const keys = getAllPaths(spacingObject);

  return (
    <div css={WrapperStyle}>
      {keys.map((key) => (
        <div
          key={key}
          css={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'start',
              width: '108px',
              justifyContent: 'center',
            }}
          >
            <div
              css={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: vars.color.palette.upsell.muted,
              }}
            />
            <div
              css={{
                width: isGlobal
                  ? theme.globals.spacing.get(key as SpacingKey)
                  : theme.dimension.spacing.get(key as DimensionSpacingKey),
                height: '32px',
                backgroundColor: vars.color.palette.primary.muted,
              }}
            />
            <div
              css={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: vars.color.palette.upsell.muted,
              }}
            />
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: '32px',
            }}
          >
            <Typography isBold variant="title01" type="primary">
              $spacing.{key}
            </Typography>
            <Typography variant="body02" type="secondary" component="div">
              {get(spacingObject, key).value}
              {!isGlobal
                ? ` = ${convertRemToPixels(
                    theme.dimension.spacing.get(key as DimensionSpacingKey)
                  )}px`
                : ``}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpacingSizingShowcase;
