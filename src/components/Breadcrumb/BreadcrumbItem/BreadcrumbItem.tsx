/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Separator from 'components/Breadcrumb/Separator/Separator';
import { breadcrumbItemStyles } from './BreadcrumbItem.style';
import useTheme from 'hooks/useTheme';
import { BreadcrumbItemData } from '../Breadcrumb';

type Props<T> = {
  childComponent: T;
  isLastItem: boolean;
  separatorContent: '*' | '>' | '/';
  clickHandler?: () => void;
};

const BreadcrumbItem: React.FC<Props<BreadcrumbItemData | React.ReactNode>> = props => {
  const { childComponent, isLastItem, separatorContent, clickHandler } = props;
  const theme = useTheme();

  return (
    <li onClick={clickHandler} css={breadcrumbItemStyles({ active: false })(theme)}>
      {childComponent}
      <Separator isLastItem={isLastItem} separatorContent={separatorContent} />
    </li>
  );
};

export default BreadcrumbItem;
