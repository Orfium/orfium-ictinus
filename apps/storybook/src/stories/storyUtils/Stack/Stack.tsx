import { rem } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';
import React from 'react';

type StackProps = {
  isVertical?: boolean;
  isInverted?: boolean;
  height?: number;
  width?: number;
};

const Stack: React.FCC<StackProps> = ({
  isVertical = false,
  isInverted = false,
  height,
  width,
  children,
}) => {
  return (
    <div
      css={{
        background: isInverted ? vars.color.background.inverted : undefined,
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        flexWrap: 'wrap',
        ...(height ? { height: rem(height) } : {}),
      }}
    >
      {React.Children.toArray(children).map((item, index) => (
        <div key={index} style={{ margin: 5, ...(width ? { width: rem(width) } : {}) }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Stack;
