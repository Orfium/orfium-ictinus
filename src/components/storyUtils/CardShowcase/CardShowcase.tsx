import React from 'react';

import { showcaseContainerStyle } from './CardShowcase.style';
import type { Elevation } from '../../../theme/globals/elevation';
import type { SpacingKey } from '../../../theme/globals/spacing';
import Card from '../../Card';

type CardShowcaseProps = {
  elevated?: keyof Elevation;
  isTransparent?: boolean;
  radius?: SpacingKey;
};

const CardShowcase: React.FCC<CardShowcaseProps> = ({ elevated, isTransparent, radius }) => {
  const CardContent = () => (
    <div css={{ padding: '16px' }}>
      <div>{`Card with ${elevated ? elevated : 'no'} elevation`}</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique eros at
        fringilla fringilla. Donec volutpat lobortis euismod
      </p>
    </div>
  );

  return (
    <div css={showcaseContainerStyle}>
      <p>(Card inside a lightGrey container to test the transparency/radius/elevation props)</p>
      <div css={{ width: '749px' }}>
        <Card elevated={elevated} isTransparent={isTransparent} radius={radius}>
          <CardContent />
        </Card>
      </div>
    </div>
  );
};

export default CardShowcase;
