/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import uniqueId from 'lodash/uniqueId';
import Separator from 'components/Breadcrumb/Separator/Separator';
import { breadcrumbItemStyles } from './BreadcrumbItem.style';
import useTheme from 'hooks/useTheme';

interface Props {
  childComponent: JSX.Element;
  isLastItem: boolean;
  separatorContent: '*' | '>' | '/';
}

const BreadcrumbItem: React.FC<Props> = props => {
  const { childComponent, isLastItem, separatorContent } = props;
  const theme = useTheme();

  return (
    <li key={uniqueId('breadcrumb_item_')} css={breadcrumbItemStyles({ active: false })(theme)}>
      {childComponent}
      <Separator isLastItem={isLastItem} separatorContent={separatorContent} />
    </li>
  );
};

export default BreadcrumbItem;
