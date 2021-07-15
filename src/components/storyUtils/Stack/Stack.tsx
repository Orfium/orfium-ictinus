import React from 'react';

type Props = {
  vertical?: boolean;
};

const Stack: React.FC<Props> = ({ vertical = false, children }) => {
  return (
    <div css={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', flexWrap: 'wrap' }}>
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
