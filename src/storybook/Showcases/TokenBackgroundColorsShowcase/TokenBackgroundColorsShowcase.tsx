import { css } from '@emotion/react';
import useTheme from 'hooks/useTheme';
import { get, map } from 'lodash';
import React, { FC } from 'react';
import backdropFigma from 'theme/tokens/semantic/variables/backdrop';
import backgroundColorFigma from 'theme/tokens/semantic/variables/backgroundColor';
import borderColorFigma from 'theme/tokens/semantic/variables/borderColor';
import { DotKeys } from 'theme/tokens/utils';

import {
  colorStyle,
  descriptionStyle,
  stateWrapperStyle,
  typeWrapperStyle,
} from './TokenBackgroundColorsShowcase.style';
import Card from 'components/Card';
import Typography from 'components/Typography';

type Props = {
  tokenType?: 'backgroundColor' | 'backdrop' | 'borderColor';
};

/**
 * Showcase component used on colors documents of storybook such as backgroundColor, backdrop and borderColor
 */
const TokenBackgroundColorsShowcase: FC<Props> = ({ tokenType = 'backgroundColor' }) => {
  const typePicker = () => {
    if (tokenType === 'backdrop') {
      return backdropFigma;
    }
    if (tokenType === 'borderColor') {
      return borderColorFigma;
    }

    return backgroundColorFigma;
  };
  const deepMap = (
    obj: any,
    outerKey?: string
  ): {
    key?: string;
    items: { key: string; value: string; description: string }[];
  }[] => {
    if (tokenType === 'borderColor') {
      return map(obj, (value, key) => {
        if (!value.value) {
          return { key: key, items: deepMap(value, key) };
        }

        return { key: outerKey ? `${outerKey}.${key}` : key, ...value };
      });
    }

    return [
      {
        items: map(obj, (value, key) => {
          return { key, ...value };
        }),
      },
    ];
  };
  const types = deepMap(typePicker());

  return (
    <div>
      <Card elevated={'03'} radius={'4'}>
        {types.map((type) => (
          <>
            {type.key && (
              <div
                key={type.key}
                css={(theme) => css`
                  padding: 5px 15px 0 15px;

                  h4 {
                    display: grid;

                    &:after {
                      content: '';
                      margin-top: 8px;
                      background: ${theme.tokens.borderColor.get('decorative.muted')};
                      height: 1px;
                    }
                  }
                `}
              >
                <Typography variant={'headline04'} type={'secondary'}>
                  {type.key}
                </Typography>
              </div>
            )}
            {type.items.map((inType) => (
              <div key={inType.key} css={typeWrapperStyle}>
                <div css={stateWrapperStyle}>
                  <div
                    css={(theme) => css`
                      ${colorStyle(theme)};
                      background-color: ${theme.tokens[tokenType].get(`${inType.key}` as never)};
                    `}
                  />
                  <div>
                    <Typography isBold>{inType.key}</Typography>
                    <div css={descriptionStyle}>
                      <Typography variant={'body02'} type={'secondary'}>
                        {get(typePicker(), `${inType.key}.description`)}
                      </Typography>
                      <Typography variant={'label03'} component={'span'} type={'active'}>
                        ${`semantic.${tokenType}.${inType.key}`}
                      </Typography>
                      {' = '}
                      <Typography variant={'label03'} component={'span'} type={'active'}>
                        {get(typePicker(), `${inType.key}.value`)}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ))}
      </Card>
    </div>
  );
};

export default TokenBackgroundColorsShowcase;
