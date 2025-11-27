import { css } from '@emotion/react';
import { type DotKeys, globalColors, semanticVariablesColors } from '@orfium/ictinus';
import { get } from 'lodash-es';
import type { FCC } from 'react';

import { Card, Typography } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';
import { colorStyle, descriptionStyle, typeWrapperStyle } from './TokenColorsShowcase.style';
import { getColors } from './utils';

type Props = {
  type?: 'globals' | 'tokens';
};

/**
 * Showcase component used on the `Colors` document
 */
const TokenColorsShowcase: FCC<Props> = ({ type = 'globals' }) => {
  const isGlobal = type === 'globals';

  const colorsObjFigma = isGlobal ? semanticVariablesColors : semanticVariablesColors;

  const colorsObj = getColors(colorsObjFigma);

  const renderDescription = (category: string, path: string) => {
    const fullPath = `${category}.${path}`;

    return (
      <div css={descriptionStyle}>
        <Typography variant="body02" type="secondary">
          {get(colorsObjFigma, fullPath, { value: '', description: '' }).description}
        </Typography>
        <div>
          <Typography variant="label03" component="span" type="active">
            ${fullPath}
          </Typography>
          {' = '}
          <Typography variant="label03" component="span" type="active">
            {get(colorsObjFigma, fullPath, { value: '', description: '' }).value}
          </Typography>
          {!isGlobal && (
            <>
              {' = '}
              <Typography variant="label03" component="span" type="active">
                {vars.color[category][path]}
              </Typography>
            </>
          )}
        </div>
      </div>
    );
  };

  const colorTokens = ({ color, variant }) => (
    <div
      key={`${color}_${variant}`}
      css={css`
        display: flex;
        padding: 24px 0;
      `}
    >
      <div
        css={(theme) => css`
          ${colorStyle()};
          background: ${isGlobal
            ? theme.globals.colors.get(
                `${color}.${colorsObj[color][variant]}` as DotKeys<typeof globalColors>
              )
            : theme.tokens.colors.get(
                `${color}.${colorsObj[color][variant]}` as DotKeys<typeof semanticVariablesColors>
              )};
        `}
      />
      <div>
        <Typography css={{ margin: '0 0 16px 0' }} isBold>
          {colorsObj[color][variant]}
        </Typography>
        <div css={descriptionStyle}>{renderDescription(color, colorsObj[color][variant])}</div>
      </div>
    </div>
  );

  return (
    <div>
      <Card elevated="03" radius="4">
        {Object.keys(colorsObj).map((color) => (
          <div key={`${color}_section`} css={typeWrapperStyle()}>
            <Typography variant="headline04" type="secondary" id={color}>
              {color}
            </Typography>

            {Object.keys(colorsObj[color]).map((variant) => colorTokens({ color, variant }))}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default TokenColorsShowcase;
