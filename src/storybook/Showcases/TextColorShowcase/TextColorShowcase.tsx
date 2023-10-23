import useTheme from 'hooks/useTheme';
import React, { useMemo } from 'react';
import type { SemanticColorsKey } from 'theme/tokens/semantic/colors';
import colors from 'theme/tokens/semantic/variables/colors';

import { descriptionStyle, dividerStyle } from './TextColorShowcase.style';
import type { TextColorTypes } from 'components/Typography';
import Typography from 'components/Typography';

const TextColorShowcase = () => {
  const theme = useTheme();

  const colorArrays: {
    [key: string]: { label: string; type: string; value: string; hex: string }[];
  } = useMemo(
    () =>
      Object.entries(colors.textColor).reduce((acc, [key, value]) => {
        acc[key] = Object.entries(value).map(([nestedKey, nestedValue]) => ({
          label: `sem.textColor.${key}.${nestedKey}`,
          type: nestedKey,
          value: nestedValue.value,
          hex: theme.tokens.colors.get(`textColor.${key}.${nestedKey}` as SemanticColorsKey),
        }));

        return acc;
      }, {}),
    [theme.tokens.colors]
  );

  return (
    <div>
      {Object.keys(colorArrays).map((colorCategory, index) => (
        <div
          key={`textColor_${index}`}
          css={{
            background: theme.tokens.colors.get(
              `backgroundColor.${colorCategory}` as SemanticColorsKey
            ),
            width: '100%',
            padding: '16px',
            border: '1px solid #E4E7FF',
            borderRadius: '8px',
            boxSizing: 'border-box',
            marginBottom: '16px',
          }}
        >
          <Typography
            variant="headline04"
            type="secondary"
            isInverted={colorCategory === 'inverted'}
          >
            {colorCategory}
          </Typography>
          <div css={dividerStyle} />
          {colorArrays[colorCategory].map((color) => (
            <div key={`textColor_${colorCategory}_${color.type}`}>
              <div css={{ marginBottom: '8px' }}>
                <Typography
                  type={color.type as TextColorTypes}
                  variant="title01"
                  isInverted={colorCategory === 'inverted'}
                >
                  {color.type}
                </Typography>
              </div>
              <div css={descriptionStyle(colorCategory)}>
                <Typography
                  variant="label03"
                  component="span"
                  type="active"
                  isInverted={colorCategory === 'inverted'}
                >
                  {color.label}
                </Typography>
                {' = '}
                <Typography
                  variant="label03"
                  component="span"
                  type="active"
                  isInverted={colorCategory === 'inverted'}
                >
                  {color.value}
                </Typography>
                {' = '}
                <Typography
                  variant="label03"
                  component="span"
                  type="active"
                  isInverted={colorCategory === 'inverted'}
                >
                  {color.hex}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextColorShowcase;
