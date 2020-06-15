/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Separator, { SeparatorStyle } from 'components/Breadcrumb/Separator/Separator';
import { breadcrumbItemStyles } from './BreadcrumbItem.style';
import useTheme from 'hooks/useTheme';

type Props = {
  childComponent: React.ReactNode;
  isLastItem: boolean;
  separatorContent: SeparatorStyle;
};

const BreadcrumbItem: React.FC<Props> = props => {
  const { childComponent, isLastItem, separatorContent = '>' } = props;
  const theme = useTheme();

  return (
    <li css={breadcrumbItemStyles({ active: isLastItem })(theme)}>
      {childComponent}
      <Separator isLastItem={isLastItem} separatorContent={separatorContent} />
    </li>
  );
};

export default BreadcrumbItem;
