import { createBrowserHistory } from 'history';
import { uniqueId } from 'lodash';
import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { BreadcrumbItem } from '../../Breadcrumb/Breadcrumb.types';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
interface Props {
  initData: BreadcrumbItem[];
}

const createNewDataConfig = (routeId: number) => ({
  to: `/level-${routeId}`,
  label: `Level ${routeId}`,
});

const browserHistory = createBrowserHistory();

const BreadcrumbShowcase: React.FC<Props> = ({ initData = [] }) => {
  const [data, setData] = useState<BreadcrumbItem[]>(initData);

  const clickHandler = () => {
    const newDataConfig: BreadcrumbItem = createNewDataConfig(data.length + 1);

    setData((prevState) => [...prevState, newDataConfig]);
  };

  useEffect(() => {
    const unregister = browserHistory.listen((match) => {
      const currentIndex = data.findIndex((item) => item.to === match.pathname);
      const updatedBreadcrumbData = data.slice(0, currentIndex + 1);
      setData(updatedBreadcrumbData);
    });

    return () => unregister();
  });

  const routes = data.map((item) => {
    return (
      <Route key={uniqueId('route_')} path={item.to}>
        {() => <div style={{ marginTop: '8px' }}>Current: {item.label}</div>}
      </Route>
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Button onClick={clickHandler}>Add data to Breadcrumb</Button>
      <Router history={browserHistory}>
        <Breadcrumb items={data} />
        <Switch>{routes}</Switch>
      </Router>
    </div>
  );
};

export default BreadcrumbShowcase;
