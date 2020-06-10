/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { breadcrumbStyles, breadcrumbLinkStyles } from './Breadcrumb.style';
import useTheme from 'hooks/useTheme';
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import { Link } from 'react-router-dom';

export type Props = {
  separatorContent?: '*' | '>' | '/';
  data: [];
  breadcrumbItemClickHandler: () => void;
};

export type BreadcrumbItemData = {
  to: string;
  label: string;
};

const Breadcrumb: React.FC<Props> = props => {
  const { children, data = [], separatorContent = '>', breadcrumbItemClickHandler } = props;
  const theme = useTheme();
  const childrenCollection = React.Children.toArray(children);
  const isLastItem = (itemIndex: number) =>
    itemIndex === childrenCollection.length - 1 || itemIndex === data.length - 1;

  const getBreadcrumbItem = (child: React.ReactNode | BreadcrumbItemData, index: number) => {
    const itemKey = uniqueId('data_item_');

    return (
      <BreadcrumbItem
        key={itemKey}
        clickHandler={breadcrumbItemClickHandler}
        childComponent={child}
        isLastItem={isLastItem(index)}
        separatorContent={separatorContent}
      />
    );
  };

  const enhanceIncomingDataWithLink = ({ to, label }: BreadcrumbItemData) => (
    <Link css={breadcrumbLinkStyles()(theme)} key={to} to={to}>
      {label}
    </Link>
  );

  const breadcrumbItems: JSX.Element[] = isEmpty(data)
    ? childrenCollection.map(getBreadcrumbItem)
    : data.map(enhanceIncomingDataWithLink).map(getBreadcrumbItem);

  return (
    <ol aria-label="Breadcrumb" css={breadcrumbStyles()(theme)}>
      {breadcrumbItems}
    </ol>
  );
};

export default Breadcrumb;
