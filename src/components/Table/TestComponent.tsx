import React from 'react';
import Table from './Table';

// @TODO to be deleted
const TestComponent = () => {
  const [data, setData] = React.useState(
    new Array(50).fill(null).map((item, index) => ({
      id: Math.random(),
      cells: [
        { content: 'title', widthPercentage: 40 },
        { content: 'firstname' },
        { content: 'lastname' },
        { content: 4.221 },
      ],
      expanded: () => <div>Hey i am an expandable content</div>,
    }))
  );

  const deleteItem = () => {
    setData((data) => {
        const t = data.splice(0, 2);
        return [...t];
    })
  }

  return (
    <React.Fragment>
      <button onClick={deleteItem}>delete</button>
      <Table
        columns={['Title', 'Name', 'Surname', 'Age']}
        type="nested-header"
        padded
        onCheck={g => console.log('on table change: ', g)}
        topLeftText={'topLeftText'}
        topRightArea={() => (
          <div>
            <div>top right section</div>
          </div>
        )}
        data={data}
      />
    </React.Fragment>
  );
};

export default TestComponent;
