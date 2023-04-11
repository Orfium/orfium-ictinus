import useTheme from 'hooks/useTheme';
import React from 'react';

type StackProps = {
  isVertical?: boolean;
  isInverted?: boolean;
};

const Stack: React.FC<StackProps> = ({ isVertical = false, isInverted = false, children }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        background: theme.tokens.backgroundColor.get(isInverted ? 'invertedDark' : 'light'),
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        flexWrap: 'wrap',
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
