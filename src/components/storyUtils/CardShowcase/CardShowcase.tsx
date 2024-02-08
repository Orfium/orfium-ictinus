import React from 'react';
import type { BorderRadiusKey } from 'theme/globals/borderRadius';
import type { BoxShadowKey } from 'theme/globals/boxShadow';

import { showcaseContainerStyle } from './CardShowcase.style';
import Card from '../../Card';

type CardShowcaseProps = {
  elevation?: BoxShadowKey;
  isTransparent?: boolean;
  radius?: BorderRadiusKey;
};

const CardShowcase: React.FCC<CardShowcaseProps> = ({ elevation, isTransparent, radius }) => {
  const CardContent = () => (
    <div css={{ padding: '16px' }}>
      <div>{`Card with ${elevation ? elevation : 'no'} elevation`}</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique eros at
        fringilla fringilla. Donec volutpat lobortis euismod
      </p>
    </div>
  );

  return (
    <div css={showcaseContainerStyle}>
      <div css={{ width: '749px' }}>
        <Card elevation={elevation} isTransparent={isTransparent} radius={radius}>
          <CardContent />
        </Card>
      </div>
    </div>
  );
};

export default CardShowcase;
