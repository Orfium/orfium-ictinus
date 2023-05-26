import React, { useMemo } from 'react';
import backgroundColorFigma from 'theme/tokens/semantic/variables/backgroundColor';
import textColor from 'theme/tokens/semantic/variables/textColor';

import useTheme from '../../hooks/useTheme';
import { DotKeys } from '../../theme/tokens/utils';

const TextColorShowcase = () => {
  const theme = useTheme();

  const colorArrays: {
    [key: string]: { label: string; type: string; value: string; hex: string }[];
  } = useMemo(
    () =>
      Object.entries(textColor).reduce((acc, [key, value]) => {
        acc[key] = Object.entries(value).map(([nestedKey, nestedValue]) => ({
          label: `sem.textColor.${key}.${nestedKey}`,
          type: nestedKey,
          value: nestedValue.value,
          hex: theme.tokens.textColor.get(`${key}.${nestedKey}` as DotKeys<typeof textColor>),
        }));

        return acc;
      }, {}),
    [theme.tokens.textColor]
  );

  return (
    <div>
      {Object.keys(colorArrays).map((colorCategory, index) => (
        <div
          key={`textColor_${index}`}
          css={{
            background: theme.tokens.backgroundColor.get(
              colorCategory as DotKeys<typeof backgroundColorFigma>
            ),
            width: '100%',
            padding: '16px',
            border: '1px solid #E4E7FF',
            borderRadius: '8px',
            boxSizing: 'border-box',
            marginBottom: '16px',
          }}
        >
          <div
            css={{
              color: theme.tokens.textColor.get(
                `${colorCategory}.secondary` as DotKeys<typeof textColor>
              ),
              fontSize: '20px',
              fontWeight: 700,
              textTransform: 'capitalize',
            }}
          >
            {colorCategory}
          </div>
          <div
            css={{
              background: '#E4E7FF',
              height: '1px',
              width: '100%',
              marginTop: '8px',
              marginBottom: '24px',
            }}
          />
          {colorArrays[colorCategory].map((color) => (
            <div key={`textColor_${colorCategory}_${color.type}`}>
              <div
                css={{ color: color.hex, fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}
              >
                {color.type}
              </div>
              <div
                css={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  gap: '8px',
                  color: theme.tokens.textColor.get(
                    `${colorCategory}.active` as DotKeys<typeof textColor>
                  ),
                  fontSize: '12px',
                  fontWeight: 500,
                  marginBottom: '36px',
                }}
              >
                <div
                  css={{
                    background: colorCategory === 'inverted' ? '#212332' : '#E7EEFE',
                    padding: '4px',
                    borderRadius: '2px',
                  }}
                >
                  {color.label}
                </div>
                {' = '}
                <div
                  css={{
                    background: colorCategory === 'inverted' ? '#212332' : '#E7EEFE',
                    padding: '4px',
                    borderRadius: '2px',
                  }}
                >
                  {color.value}
                </div>
                {' = '}
                <div
                  css={{
                    background: colorCategory === 'inverted' ? '#212332' : '#E7EEFE',
                    padding: '4px',
                    borderRadius: '2px',
                  }}
                >
                  {color.hex}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextColorShowcase;
