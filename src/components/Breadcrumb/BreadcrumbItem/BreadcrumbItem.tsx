import React from 'react';

import { breadcrumbItemStyles } from './BreadcrumbItem.style';
import Separator from 'components/Breadcrumb/Separator/Separator';

export type BreadcrumbItemProps = {
  /** Defines the child element that will be rendered inside the list element */
  childComponent: React.ReactNode;
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
  /** Defines the label of the current level of breadcrumb */
};

const BreadcrumbItem: React.FCC<BreadcrumbItemProps> = ({ childComponent, isLastItem = false }) => {
  return (
    <li>
      <div css={breadcrumbItemStyles({ isActive: isLastItem })}>
        {childComponent}
        <Separator isLastItem={isLastItem} />
      </div>
    </li>
  );
};

export default BreadcrumbItem;
