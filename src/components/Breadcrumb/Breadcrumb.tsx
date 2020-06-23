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
import { last, pick } from 'lodash';
import { BreadcrumbItemData } from './types';

export type Props = {
  /** Defines the data for constructing the related breadcrumb items */
  data: BreadcrumbItemData[];
};

const MAX_LIMIT_BREADCRUMB_LENGTH = 4;
const MAX_ITEMS_TO_SHOW_AFTER_COLLAPSE = 2;
const MAX_ITEMS_TO_SHOW_BEFORE_COLLAPSE = 1;

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

  //Checks if an item is in collapsed area and if should break the breadcrumb items with a collapsed view
  const shouldCollapse = (item: React.ReactNode, itemIndex: number) =>
    item &&
    dataItems.length > MAX_LIMIT_BREADCRUMB_LENGTH &&
    itemIndex >= MAX_ITEMS_TO_SHOW_BEFORE_COLLAPSE &&
    itemIndex < dataItems.length - MAX_ITEMS_TO_SHOW_AFTER_COLLAPSE;

  const collapsedItems = useMemo(() => dataItems.filter(shouldCollapse), [dataItems]);

  const {
    label: lastItemLabel,
    onChangeHandler: lastItemOnChangeHandler,
    options: lastItemOptions,
  } = pick(last(data), ['label', 'onChangeHandler', 'options']);

  const getBreadcrumbItem = useMemo(
    () => (child: React.ReactNode, index: number) => {
      const itemKey = uniqueId('data_item_');

      if (shouldCollapse(child, index)) {
        return index === MAX_ITEMS_TO_SHOW_BEFORE_COLLAPSE ? (
          <BreadcrumbCollapsed collapsedItems={collapsedItems} key={itemKey} />
        ) : null;
      }

      const isLast = isLastItem(dataItems, index);

      return (
        <BreadcrumbItem
          key={itemKey}
          lastItemLabel={lastItemLabel}
          onChangeHandler={lastItemOnChangeHandler}
          options={lastItemOptions}
          childComponent={child}
          isLastItem={isLast}
        />
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
