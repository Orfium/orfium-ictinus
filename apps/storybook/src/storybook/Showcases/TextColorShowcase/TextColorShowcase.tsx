import { semanticVariablesColors } from '@orfium/ictinus';
import { useMemo } from 'react';

import { Typography, type TextColorTypes } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';
import { descriptionStyle, dividerStyle } from './TextColorShowcase.style';

const TextColorShowcase = () => {
  const colorArrays: {
    [key: string]: { label: string; type: string; value: string; hex: string }[];
  } = useMemo(
    () =>
      Object.entries(semanticVariablesColors.textColor).reduce((acc, [key, value]) => {
        acc[key] = Object.entries(value).map(([nestedKey, nestedValue]) => ({
          label: `sem.textColor.${key}.${nestedKey}`,
          type: nestedKey,
          value: nestedValue.value,
          hex: vars.color.text[key][nestedKey],
        }));

        return acc;
      }, {}),
    []
  );

  return (
    <div>
      {Object.keys(colorArrays).map((colorCategory, index) => (
        <div
          key={`textColor_${index}`}
          css={{
            background: vars.color.background[colorCategory],
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
