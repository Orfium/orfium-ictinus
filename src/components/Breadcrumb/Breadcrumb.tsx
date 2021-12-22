import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { breadcrumbLinkStyles, breadcrumbStyles } from './Breadcrumb.style';
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';
import { BreadcrumbItemData } from './types';

export type Props = {
  /** Defines the data for constructing the related breadcrumb items */
  data?: BreadcrumbItemData[];
};

const Breadcrumb: React.FC<Props> = props => {
  const { children, data = [] } = props;

  const isLastItem = (dataItems: React.ReactNode[], itemIndex: number) =>
    itemIndex === dataItems.length - 1;

  const passDataToRouterLink = (dataItem: BreadcrumbItemData, index: number) => {
    const { to, label } = dataItem;

    const isLast = isLastItem(data, index);

    return to ? (
      <Link css={breadcrumbLinkStyles(isLast)} key={to} to={to}>
        {label}
      </Link>
    ) : (
      <div>{label}</div>
    );
  };
  
  const childrenCollection = React.Children.toArray(children);
  const dataItems = isEmpty(data) ? childrenCollection : data.map(passDataToRouterLink);

  const getBreadcrumbItem = React.useMemo(
    // eslint-disable-next-line react/display-name
    () => (child: React.ReactNode, index: number) => {
      const itemKey = uniqueId('data_item_');

      const isLast = isLastItem(dataItems, index);

      return <BreadcrumbItem key={itemKey} childComponent={child} isLastItem={isLast} />;
    },
    [dataItems]
  );

  return (
    <ol aria-label="Breadcrumb" css={breadcrumbStyles()}>
      {dataItems.map(getBreadcrumbItem)}
    </ol>
  );
};

export default Breadcrumb;
