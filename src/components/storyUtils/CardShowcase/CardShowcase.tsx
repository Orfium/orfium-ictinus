import React from 'react';
import { Elevation } from '../../../theme/elevation';
import { Spacing } from '../../../theme/spacing';
import Card from '../../Card';
import { showcaseContainerStyle } from './CardShowcase.style';

type Props = {
  elevated?: keyof Elevation;
  transparent?: boolean;
  radius?: keyof Spacing;
};

const CardShowcase: React.FC<Props> = ({ elevated, transparent, radius }) => {
  const CardContent = () => (
    <div css={{ padding: '20px' }}>
      <div>{`Card with ${elevated ? elevated : 'no'} elevation`}</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique eros at
        fringilla fringilla. Donec volutpat lobortis euismod
      </p>
    </div>
  );

  return (
    <div css={showcaseContainerStyle}>
      <p>(Card inside a lightGray container to test the transparency/radius/elevation props)</p>
      <div css={{ width: '749px' }}>
        <Card elevated={elevated} transparent={transparent} radius={radius}>
          <CardContent />
        </Card>
      </div>
    </div>
  );
};

export default CardShowcase;
