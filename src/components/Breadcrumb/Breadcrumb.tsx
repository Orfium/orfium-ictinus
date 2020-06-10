/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { breadcrumbStyles, breadcrumbItemStyles } from './Breadcrumb.style';
import uniqueId from 'lodash/uniqueId';
import useTheme from 'hooks/useTheme';
import Separator from 'components/Breadcrumb/Separator/Separator';

export type Props = {
  separatorContent?: '*' | '>' | '/';
  // flexWrap?: 'nowrap' | 'wrap-reverse';
};

const Breadcrumb: React.FC<Props> = props => {
  const { children } = props;
  const theme = useTheme();
  const childrenCollection = React.Children.toArray(children);

  const getBreadcrumbItem = (child: any, index: number): JSX.Element => {
    const { separatorContent = '>' } = props;
    const BreadcrumbItem = child.props.originalType;
    const innerText = child.props.children;
    const isLastItem = index === childrenCollection.length - 1;

    if (!React.isValidElement(<BreadcrumbItem />)) throw new Error('Child element is not valid.');

    return (
      <li key={uniqueId('breadcrumb_')} css={breadcrumbItemStyles({ active: false })(theme)}>
        <BreadcrumbItem>{innerText}</BreadcrumbItem>
        <Separator isLastItem={isLastItem} separatorContent={separatorContent} />
      </li>
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
