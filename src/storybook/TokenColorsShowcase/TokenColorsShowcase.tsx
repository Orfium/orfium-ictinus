import { css } from '@emotion/react';
import { map } from 'lodash';
import React, { FC } from 'react';
import paletteFigma from 'theme/tokens/semantic/variables/palette';
import { DotKeys } from 'theme/tokens/utils';

import {
  colorStyle,
  descriptionStyle,
  stateWrapperStyle,
  typeWrapperStyle,
} from './TokenColorsShowcase.style';
import Card from 'components/Card';
import Typography from 'components/Typography';

const TokenColorsShowcase: FC<{ type: 'systemic' | 'accents' }> = ({ type = 'systemic' }) => {
  const states = ['light', 'main', 'dark'];
  const systemics = map(paletteFigma.systemic, (value, key) => ({
    key,
    category: 'systemic',
    ...value,
  }));
  const accents = map(paletteFigma.accents, (value, key) => ({
    key,
    category: 'accents',
    ...value,
  }));

  return (
    <div css={{}}>
      <Card elevated={'03'} radius={'4'}>
        {(type === 'systemic' ? systemics : accents).map((type: any) => (
          <div key={type.key} css={typeWrapperStyle}>
            <div
              css={css`
                padding: 15px;
              `}
            >
              <Typography variant={'headline03'} type={'secondary'}>
                {type.key}
              </Typography>
              <div css={stateWrapperStyle}>
                {/* //TODO discuss contrast use */}
                {(type.category === 'systemic' ? states : [...states, 'contrast']).map((state) => (
                  <div
                    key={`${type.category}.${type.key}.${state}`}
                    css={css`
                      display: flex;
                      margin: 15px 0;
                    `}
                  >
                    <div
                      css={(theme) => css`
                        ${colorStyle(theme)};
                        background-color: ${theme.tokens.palette.get(
                          `${type.category}.${type.key}.${state}` as DotKeys<typeof paletteFigma>
                        )};
                      `}
                    />
                    <div>
                      <Typography isBold>{state}</Typography>
                      <div css={descriptionStyle}>
                        <Typography variant={'body02'} type={'secondary'}>
                          {paletteFigma[type.category][type.key][state].description}
                        </Typography>
                        <Typography variant={'body02'} component={'span'}>
                          ${`${type.category}.${type.key}.${state}`}
                        </Typography>
                        {' = '}
                        <Typography variant={'body02'} component={'span'}>
                          {paletteFigma[type.category][type.key][state].value}
                        </Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default TokenColorsShowcase;
