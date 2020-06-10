/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { breadcrumbStyles } from './Breadcrumb.style';
import useTheme from 'hooks/useTheme';
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';

export type Props = {
  separatorContent?: '*' | '>' | '/';
};

const Breadcrumb: React.FC<Props> = props => {
  const { children } = props;
  const theme = useTheme();
  const childrenCollection = React.Children.toArray(children);

  const getBreadcrumbItem = (child: any, index: number): JSX.Element => {
    const { separatorContent = '>' } = props;
    const isLastItem = index === childrenCollection.length - 1;

    return (
      <BreadcrumbItem
        childComponent={child}
        isLastItem={isLastItem}
        separatorContent={separatorContent}
      />
    );
  };

  const breadcrumb: JSX.Element[] = childrenCollection.map(getBreadcrumbItem);

  return (
    <div>
      <ul css={breadcrumbStyles()(theme)}>{breadcrumb}</ul>
    </div>
  );
};

export default Breadcrumb;
