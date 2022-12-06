import React from 'react';

type StackProps = {
  isVertical?: boolean;
};

const Stack: React.FC<StackProps> = ({ isVertical = false, children }) => {
  return (
    <div css={{ display: 'flex', flexDirection: isVertical ? 'column' : 'row', flexWrap: 'wrap' }}>
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
