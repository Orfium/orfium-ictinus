/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { breadcrumbStyles } from './Breadcrumb.style';
import useTheme from 'hooks/useTheme';
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import { Link } from 'react-router-dom';

export type Props = {
  separatorContent?: '*' | '>' | '/';
  data: [];
};

export type BreadcrumbElement = {
  to: string;
  label: string;
};

const Breadcrumb: React.FC<Props> = props => {
  const { children, data = [], separatorContent = '>' } = props;
  const theme = useTheme();
  const childrenCollection = React.Children.toArray(children);
  const isLastItem = (indicator: number, array: [] | React.ReactNode[]) =>
    indicator === (Array.isArray(array) && array.length - 1);

  const getBreadcrumbItem = (child: React.ReactNode | BreadcrumbElement, index: number) => {
    const itemKey = uniqueId('data_item_');

    return (
      <BreadcrumbItem
        key={itemKey}
        childComponent={child}
        isLastItem={isLastItem(index, childrenCollection)}
        separatorContent={separatorContent}
      />
    );
  };

  const enhanceIncomingDataWithLink = ({ to, label }: BreadcrumbElement) => (
    <Link key={to} to={to}>
      {label}
    </Link>
  );

  const breadcrumbItems: JSX.Element[] = isEmpty(data)
    ? childrenCollection.map(getBreadcrumbItem)
    : data.map(enhanceIncomingDataWithLink).map(getBreadcrumbItem);

  return <ul css={breadcrumbStyles()(theme)}>{breadcrumbItems}</ul>;
};

export default Breadcrumb;
