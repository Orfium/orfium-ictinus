import { createBrowserHistory } from 'history';
import { uniqueId } from 'lodash';
import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { BreadcrumbItemData } from '../../Breadcrumb/types';
import Breadcrumb from 'components/Breadcrumb';
interface Props {
  initData: BreadcrumbItemData[];
}

const createNewDataConfig = (routeId: number) => ({
  to: `/level-${routeId}`,
  label: `Level ${routeId}`,
});

const browserHistory = createBrowserHistory();

const BreadcrumbShowcase: React.FCC<Props> = ({ initData = [] }) => {
  const [data, setData] = useState<BreadcrumbItemData[]>(initData);

  const clickHandler = () => {
    const newDataConfig: BreadcrumbItemData = createNewDataConfig(data.length + 1);

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
    <div>
      <button type="button" onClick={clickHandler} style={{ marginBottom: '16px' }}>
        Add data to Breadcrumb
      </button>
      <Router history={browserHistory}>
        <Breadcrumb data={data} />
        <Switch>{routes}</Switch>
      </Router>
    </div>
  );
};

export default BreadcrumbShowcase;
