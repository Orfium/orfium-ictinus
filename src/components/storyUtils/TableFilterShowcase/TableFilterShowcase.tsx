import React from 'react';

import Table from '../../Table';
// @ts-ignore
import db from './db.json';

type User = {
  id: string;
  name: string;
  username: string;
  address: { street: string; city: string; zipcode: string };
};

const TableFilterShowcase: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const data = db.users; // call simulator

      setUsers(data);
    })();
  }, []);

  const newUsers = React.useMemo(() => {
    const manipulateTableData = (arr: User[]) =>
      arr.map(user => {
        return {
          id: user.id,
          cells: [
            { content: user.name },
            { content: user.username },
            { content: `${user.address.street} ${user.address.city} ${user.address.zipcode}` },
          ],
        };
      });

    return manipulateTableData(
      users.filter(
        user =>
          user.name.includes(search) ||
          user.username.includes(search) ||
          user.address.street.includes(search) ||
          user.address.city.includes(search) ||
          user.address.zipcode.includes(search)
      )
    );
  }, [search, users]);
  const columns = React.useMemo(() => ['name', 'username', 'address'], []);

  return (
    <div style={{ margin: 20 }}>
      <p>search more than 3 characters </p>
      <input placeholder={'search'} value={search} onChange={e => setSearch(e.target.value)} />
      <Table data={newUsers} columns={columns} />
    </div>
  );
};

export default TableFilterShowcase;
