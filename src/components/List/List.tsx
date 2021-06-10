import React from 'react';

import ListItem from './ListItem';

const List: React.FC = () => {
  return (
    <div style={{ width: '220px' }}>
      <ListItem size={'normal'} content="list item" />
    </div>
  );
};

export default List;
