import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import type { BreadcrumbItem } from '../../Breadcrumb/Breadcrumb.types';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
interface Props {
  initData: BreadcrumbItem[];
}

const createNewDataConfig = (routeId: number) => ({
  to: `/level-${routeId}`,
  label: `Level ${routeId}`,
});

const BreadcrumbShowcase: React.FCC<Props> = ({ initData = [] }) => {
  const [data, setData] = useState<BreadcrumbItem[]>(initData);
  const location = useLocation();

  const clickHandler = () => {
    const newDataConfig: BreadcrumbItem = createNewDataConfig(data.length + 1);

    setData((prevState) => [...prevState, newDataConfig]);
  };

  useEffect(() => {
    const currentIndex = data.findIndex((item) => item.href === location.pathname);
    const updatedBreadcrumbData = data.slice(0, currentIndex + 1);
    if (updatedBreadcrumbData.length > 0) {
      setData(updatedBreadcrumbData);
    }
  }, [location.pathname, data]);

  const routes = data.map((item) => (
    <Route
      key={uniqueId('route_')}
      path={item.href}
      element={<div style={{ marginTop: '8px' }}>Current: {item.label}</div>}
    />
  ));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Button onClick={clickHandler}>Add more levels to Breadcrumb</Button>
      <Breadcrumb items={data} />
      <Routes>{routes}</Routes>
    </div>
  );
};

export default BreadcrumbShowcase;
