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
import { SeparatorStyle } from './Separator/Separator';

export type Props = {
  /** Defines the separator's content */
  separatorContent?: SeparatorStyle;
  /** Defines the data for constructing the related breadcrumb items */
  data: BreadcrumbItemData[];
};

export type BreadcrumbItemData = {
  to: string;
  label: string;
  /** Defines the options used to render a Menu button */
  options?: string[];
  /** Defines the method where a developer can manipulate the selection of an menu item */
  onChangeHandler: (selectedItem: string) => void;
};

const Breadcrumb: React.FC<Props> = props => {
  const { children, data = [], separatorContent = '>' } = props;
  const theme = useTheme();
  const passDataToRouterLink = ({ to, label }: BreadcrumbItemData) => (
    <Link css={breadcrumbLinkStyles()(theme)} key={to} to={to}>
      {label}
    </Link>
  );

  const childrenCollection = React.Children.toArray(children);
  const dataItems = isEmpty(data) ? childrenCollection : data.map(passDataToRouterLink);

  const isLastItem = (itemIndex: number) => itemIndex === dataItems.length - 1;
  const getDataItemPropertyValue = (index: number, property: string) => {
    const dataItem = data[index];
    const shouldGetProperty = dataItem && isLastItem(index);
    if (shouldGetProperty) {
      return dataItem[property] || undefined;
    }

    return undefined;
  };

  const shouldCollapse = (item: React.ReactNode, itemIndex: number) =>
    item && dataItems.length > 4 && itemIndex > 0 && itemIndex < dataItems.length - 2;

  const collapsedItems = useMemo(() => dataItems.filter(shouldCollapse), [data, children]);

  const getBreadcrumbItem = (child: React.ReactNode, index: number) => {
    const itemKey = uniqueId('data_item_');
    const lastItemOnChangeHandler = getDataItemPropertyValue(index, 'onChangeHandler');
    const lastItemOptions = getDataItemPropertyValue(index, 'options');

    if (shouldCollapse(child, index)) {
      return index === 1 ? (
        <BreadcrumbCollapsed
          collapsedItems={collapsedItems}
          key={itemKey}
          separatorContent={separatorContent}
        />
      ) : null;
    }

    return (
      <BreadcrumbItem
        key={itemKey}
        onChangeHandler={lastItemOnChangeHandler}
        options={lastItemOptions}
        childComponent={child}
        isLastItem={isLastItem(index)}
        separatorContent={separatorContent}
      />
    );
  };

  return (
    <ol aria-label="Breadcrumb" css={breadcrumbStyles()(theme)}>
      {dataItems.map(getBreadcrumbItem)}
    </ol>
  );
};

export default Breadcrumb;
