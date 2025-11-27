import { type SemanticBoxShadowKey, semanticVariablesBoxShadow, useTheme } from '@orfium/ictinus';
import { map } from 'lodash-es';
import { rem } from 'polished';
import { WrapperStyle } from 'storybook/styles/OverviewCard.style';

import { Typography } from '@orfium/ictinus';

const BoxShadowShowcase = () => {
  const spaces = map<{
    value: {
      x: string;
      y: string;
      blur: string;
      spread: string;
      color: string;
      type: string;
    };
    type: string;
  }>(semanticVariablesBoxShadow);
  const boxSize = 72;
  const theme = useTheme();

  return (
    <div css={WrapperStyle}>
      {spaces.map((space, index) => {
        const value = theme.tokens.boxShadow.get(String(index) as SemanticBoxShadowKey);

        return (
          <div key={value} css={{ display: 'flex', flex: '0 0 100%', alignItems: 'center' }}>
            <div
              css={() => ({
                height: rem(boxSize),
                width: rem(boxSize),
                background: '#fff',
                margin: 'auto',
                boxShadow: value,
              })}
            />
            <div css={{ margin: 10, flex: 1 }}>
              <Typography isBold variant="title01" type="primary">
                $boxShadow.{index}
              </Typography>
              <Typography variant="body02" type="secondary">
                {value}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BoxShadowShowcase;
