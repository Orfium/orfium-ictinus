import React, { useState, useEffect } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import { BreadcrumbItemData } from '../../Breadcrumb/types';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { uniqueId } from 'lodash';
interface Props {
  initData: BreadcrumbItemData[];
}

const createNewDataConfig = (routeId: string) => ({
  to: `/extra-level-${routeId}`,
  label: `Extra Level ${routeId}`,
  options: ['random option 1', 'random option 2'],
  onChangeHandler: (text: string) => text && alert(text),
});

const browserHistory = createBrowserHistory();

const BreadcrumbShowcase: React.FC<Props> = ({ initData = [] }) => {
  const [data, setData] = useState<BreadcrumbItemData[]>(initData);

  const clickHandler = () => {
    const randomId = uniqueId('level_');
    const newDataConfig: BreadcrumbItemData = createNewDataConfig(randomId);

    setData(prevState => [...prevState, newDataConfig]);
  };

  useEffect(() => {
    const unregister = browserHistory.listen(match => {
      const currentIndex = data.findIndex(item => item.to === match.pathname);
      const updatedBreadcrumbData = data.slice(0, currentIndex + 1);
      setData(updatedBreadcrumbData);
    });

    return () => unregister();
  });

  const routes = data.map(item => {
    return (
      <Route key={uniqueId('route_')} path={item.to}>
        {() => <div>{item.label}</div>}
      </Route>
    );
  });

  return (
    <div>
      <button type="button" onClick={clickHandler}>
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
