import useTheme from 'hooks/useTheme';
import React from 'react';
import { rem } from 'theme/utils';

type StackProps = {
  isVertical?: boolean;
  isInverted?: boolean;
  height?: number;
};

const Stack: React.FCC<StackProps> = ({
  isVertical = false,
  isInverted = false,
  height,
  children,
}) => {
  const theme = useTheme();

  return (
    <div
      css={{
        background: isInverted ? theme.tokens.colors.get('backgroundColor.inverted') : undefined,
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        flexWrap: 'wrap',
        ...(height ? { height: rem(height) } : {}),
      }}
    >
      {React.Children.toArray(children).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} style={{ margin: 5 }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Stack;
