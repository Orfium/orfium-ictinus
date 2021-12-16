import React from 'react';

import { breadcrumbItemStyles } from './BreadcrumbItem.style';
import Separator from 'components/Breadcrumb/Separator/Separator';

type Props = {
  /** Defines the child element that will be rendered inside the list element */
  childComponent: React.ReactNode;
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
  /** Defines the label of the current level of breadcrumb */
};

const BreadcrumbItem: React.FC<Props> = props => {
  const { childComponent, isLastItem = false } = props;

  return (
    <li>
      <div css={breadcrumbItemStyles({ active: isLastItem })}>
        {childComponent}
        <Separator isLastItem={isLastItem} />
      </div>
    </li>
  );
};

export default BreadcrumbItem;
