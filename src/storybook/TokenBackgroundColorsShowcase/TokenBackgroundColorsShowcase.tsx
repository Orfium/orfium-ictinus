import { css } from '@emotion/react';
import useTheme from 'hooks/useTheme';
import { get, map } from 'lodash';
import React, { FC } from 'react';
import backgroundColorFigma from 'theme/tokens/semantic/variables/backgroundColor';
import { DotKeys } from 'theme/tokens/utils';

import {
  colorStyle,
  stateWrapperStyle,
  typeWrapperStyle,
} from './TokenBackgroundColorsShowcase.style';
import Card from 'components/Card';
import Typography from 'components/Typography';

const TokenBackgroundColorsShowcase: FC = () => {
  const types = map(backgroundColorFigma, (value, key) => ({ key, ...value }));
  const theme = useTheme();

  return (
    <div css={{}}>
      <Card elevated={'03'}>
        {types.map((type) => (
          <div key={type.key} css={typeWrapperStyle}>
            <div css={stateWrapperStyle}>
              <div
                css={css`
                  ${colorStyle()};
                  background-color: ${theme.tokens.backgroundColor.get(
                    type.key as DotKeys<typeof backgroundColorFigma>
                  )};
                `}
              />
              <div>
                <Typography isBold>{type.key}</Typography>
                <Typography variant={'body02'}>
                  {get(backgroundColorFigma, [type.key, 'description'])}
                </Typography>
                <Typography variant={'body02'} isItalic component={'span'}>
                  ${`semantic.backgroundColor.${type.key}`}
                </Typography>
                {' - '}
                <Typography variant={'body02'} isItalic component={'span'}>
                  {get(backgroundColorFigma, [type.key, 'value'])}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default TokenBackgroundColorsShowcase;
