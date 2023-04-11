import { css } from '@emotion/react';
import useTheme from 'hooks/useTheme';
import { get } from 'lodash';
import React, { FC } from 'react';
import paletteFigma from 'theme/tokens/semantic/variables/palette';
import { DotKeys } from 'theme/tokens/utils';

import { colorStyle, stateWrapperStyle, typeWrapperStyle } from './TokenColorsShowcase.style';
import Card from 'components/Card';
import Typography from 'components/Typography';

const TokenColorsShowcase: FC = () => {
  const states = ['light', 'main', 'dark'];
  const typesLight = ['primary', 'secondary', 'tertiary'];
  const types = ['error', 'success', 'warning'];
  const theme = useTheme();

  return (
    <div css={{}}>
      {typesLight.map((typeLight) => (
        <div key={typeLight} css={typeWrapperStyle}>
          <Card elevated={'03'}>
            <div
              css={css`
                padding: 15px;
              `}
            >
              <Typography role={'headline03'}>{typeLight}</Typography>
              <div css={stateWrapperStyle}>
                {states.map((state) => (
                  <div
                    key={`systemic.light.${typeLight}.${state}`}
                    css={css`
                      width: 30%;
                    `}
                  >
                    <Typography>{state}</Typography>
                    <div
                      css={css`
                        ${colorStyle()};
                        background-color: ${theme.tokens.palette.get(
                          `systemic.light.${typeLight}.${state}` as DotKeys<typeof paletteFigma>
                        )};
                      `}
                    />
                    <Typography role={'body02'} isItalic>
                      ${`systemic.light.${typeLight}.${state}`}
                    </Typography>
                    <Typography role={'body02'} isItalic>
                      {paletteFigma.systemic.light[typeLight][state].value}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      ))}

      {types.map((type) => (
        <div key={type} css={typeWrapperStyle}>
          <Card elevated={'03'}>
            <div
              css={css`
                padding: 15px;
              `}
            >
              <Typography role={'headline03'}>{type}</Typography>
              <div css={stateWrapperStyle}>
                {states.map((state) => (
                  <div
                    key={`systemic.${type}.${state}`}
                    css={css`
                      width: 30%;
                    `}
                  >
                    <Typography>{state}</Typography>
                    <div
                      css={css`
                        ${colorStyle()};
                        background-color: ${theme.tokens.palette.get(
                          `systemic.${type}.${state}` as DotKeys<typeof paletteFigma>
                        )};
                      `}
                    />
                    <Typography role={'body02'} isItalic>
                      ${`systemic.${type}.${state}`}
                    </Typography>
                    <Typography role={'body02'} isItalic>
                      {get(paletteFigma.systemic, [type, state, 'value'])}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default TokenColorsShowcase;
