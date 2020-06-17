/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Separator, { SeparatorStyle } from 'components/Breadcrumb/Separator/Separator';
import { breadcrumbItemStyles } from './BreadcrumbItem.style';
import useTheme from 'hooks/useTheme';

type Props = {
  /** Defines the child element that will be rendered inside the list element */
  childComponent: React.ReactNode;
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem: boolean;
  /** Defines the separator's content */
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
