/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useMemo } from 'react';
import { breadcrumbStyles, breadcrumbLinkStyles } from './Breadcrumb.style';
import useTheme from 'hooks/useTheme';
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import { Link } from 'react-router-dom';
import BreadcrumbCollapsed from './BreadcrumbCollapsed/BreadcrumbCollapsed';
import { getLastDataItemProperty } from '../../utils/helpers';
import { BreadcrumbItemData } from './types';

export type Props = {
  /** Defines the data for constructing the related breadcrumb items */
  data: BreadcrumbItemData[];
};

const Breadcrumb: React.FC<Props> = props => {
  const { children, data = [] } = props;
  const theme = useTheme();
  const passDataToRouterLink = ({ to, label }: BreadcrumbItemData) => (
    <Link css={breadcrumbLinkStyles()(theme)} key={to} to={to}>
      {label}
    </Link>
  );
  const childrenCollection = React.Children.toArray(children);
  const dataItems = isEmpty(data) ? childrenCollection : data.map(passDataToRouterLink);

  const isLastItem = (dataItems: React.ReactNode[], itemIndex: number) =>
    itemIndex === dataItems.length - 1;
  const shouldCollapse = (item: React.ReactNode, itemIndex: number) =>
    item && dataItems.length > 4 && itemIndex > 0 && itemIndex < dataItems.length - 2;

  const collapsedItems = useMemo(() => dataItems.filter(shouldCollapse), [dataItems]);
  const lastItem = {
    label: getLastDataItemProperty(data, 'label'),
    onChangeHandler: getLastDataItemProperty(data, 'onChangeHandler'),
    options: getLastDataItemProperty(data, 'options'),
  };

  const getBreadcrumbItem = useMemo(
    () => (child: React.ReactNode, index: number) => {
      const itemKey = uniqueId('data_item_');

      if (shouldCollapse(child, index)) {
        return index === 1 ? (
          <BreadcrumbCollapsed collapsedItems={collapsedItems} key={itemKey} />
        ) : null;
      }

      const isLast = isLastItem(dataItems, index);

      return isLast ? (
        <BreadcrumbItem
          key={itemKey}
          lastItemLabel={lastItem.label}
          onChangeHandler={lastItem.onChangeHandler}
          options={lastItem.options}
          childComponent={child}
          isLastItem={isLast}
        />
      ) : (
        <BreadcrumbItem key={itemKey} childComponent={child} />
      );
    },
    [dataItems]
  );

  return (
    <ol aria-label="Breadcrumb" css={breadcrumbStyles()(theme)}>
      {dataItems.map(getBreadcrumbItem)}
    </ol>
  );
};

export default Breadcrumb;
