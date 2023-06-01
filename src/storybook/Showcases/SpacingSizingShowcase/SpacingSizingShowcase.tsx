import useTheme from 'hooks/useTheme';
import { map } from 'lodash';
import React from 'react';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';
import spacing from 'theme/globals/constants/spacing';

const SpacingSizingShowcase = () => {
  const spaces = map(spacing);
  const theme = useTheme();

  return (
    <div css={WrapperStyle}>
      {spaces.map((space, index) => (
        <div
          key={`spacing_${index}`}
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              width: '108px',
            }}
          >
            <div
              css={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: theme.tokens.palette.get('systemic.secondary.dark'),
              }}
            />
            <div
              css={{
                width: `${space.value}`,
                height: '32px',
                backgroundColor: theme.utils.getColor('lightPurple', 550),
              }}
            />
            <div
              css={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: theme.tokens.palette.get('systemic.secondary.dark'),
              }}
            />
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span
              css={{
                fontWeight: theme.globals.typography.fontWeight.get('medium'),
                color: theme.tokens.textColor.get('light.primary'),
              }}
            >
              spacing.{index}
            </span>
            <span
              css={{
                color: theme.tokens.textColor.get('light.secondary'),
                fontSize: '14px',
                fontWeight: theme.globals.typography.fontWeight.get('regular'),
              }}
            >
              {space.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpacingSizingShowcase;
