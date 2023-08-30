import { css } from '@emotion/react';
import { get, map, pick } from 'lodash';
import React, { FC } from 'react';
import globalColorsFigma from 'theme/globals/constants/colors';
import colorsFigma from 'theme/tokens/semantic/variables/colors';
import { DotKeys } from 'theme/tokens/utils';

import {
  colorStyle,
  descriptionStyle,
  stateWrapperStyle,
  typeWrapperStyle,
} from './TokenColorsShowcase.style';
import Card from 'components/Card';
import Typography from 'components/Typography';

type Props = {
  type?: 'globals' | 'tokens';
};

/**
 * Showcase component used on the `Colors` document
 */
const TokenColorsShowcase: FC<Props> = ({ type = 'globals' }) => {
  const isGlobal = type === 'globals';

  const states = isGlobal
    ? ['1', '2', '3', '4', '5']
    : ['lightest', 'light', 'main', 'dark', 'darkest'];

  const colorKeys = isGlobal
    ? ['blue', 'tinted', 'transparent', 'teal', 'purple', 'orange', 'red', 'neutral', 'gradient']
    : ['primary', 'secondary', 'tertiary', 'inverted', 'warning', 'upsell', 'error'];

  const colorsObj = isGlobal ? globalColorsFigma : colorsFigma.palette;

  // eslint-disable-next-line @typescript-eslint/ban-types
  const colors = map(pick(colorsObj as Object, colorKeys), (value, key) => ({
    key,
    ...value,
  }));

  return (
    <div css={{}}>
      <Card elevated={'03'} radius={'4'}>
        {colors.map((type) => (
          <div key={type.key} css={typeWrapperStyle}>
            <div
              css={css`
                padding: 15px;
              `}
            >
              <Typography variant={'headline04'} type={'secondary'}>
                {type.key}
              </Typography>
              <div css={stateWrapperStyle}>
                {states
                  .filter((state) => get(colorsObj, [type.key, state]))
                  .map((state) => (
                    <div
                      key={`palette.${type.key}.${state}`}
                      css={css`
                        display: flex;
                        margin: 15px 0;
                      `}
                    >
                      <div
                        css={(theme) => css`
                          ${colorStyle(theme)};
                          background: ${isGlobal
                            ? theme.globals.colors.get(
                                `${type.key}.${state}` as DotKeys<typeof globalColorsFigma>
                              )
                            : theme.tokens.colors.get(
                                `palette.${type.key}.${state}` as DotKeys<typeof colorsFigma>
                              )};
                        `}
                      />
                      <div>
                        <Typography isBold>{state}</Typography>
                        <div css={descriptionStyle}>
                          <Typography variant={'body02'} type={'secondary'}>
                            {colorsObj[type.key][state].description}
                          </Typography>
                          <Typography variant={'label03'} component={'span'} type={'active'}>
                            ${`palette.${type.key}.${state}`}
                          </Typography>
                          {' = '}
                          <Typography variant={'label03'} component={'span'} type={'active'}>
                            {colorsObj[type.key][state].value}
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
