/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Card from '../../Card';
import { Elevation } from '../../../theme/elevation';

type Props = {
  elevated?: keyof Elevation;
};

const CardShowcase: React.FC<Props> = ({ elevated }) => {
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
    <div css={{ width: '749px' }}>
      <Card elevated={elevated}>
        <CardContent />
      </Card>
    </div>
  );
};

export default CardShowcase;
