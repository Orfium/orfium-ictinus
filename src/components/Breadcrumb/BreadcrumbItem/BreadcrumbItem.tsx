import useTheme from 'hooks/useTheme';
import React from 'react';

import { breadcrumbItemStyles, breadcrumbListStyles } from './BreadcrumbItem.style';
import { getBreadcrumbTokens } from '../Breadcrumb.tokens';
import Icon from 'components/Icon';

export type BreadcrumbItemProps = {
  /** Defines the child element that will be rendered inside the list element */
  childComponent: React.ReactNode;
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ childComponent, isLastItem = false }) => {
  const theme = useTheme();
  const tokens = getBreadcrumbTokens(theme);

  return (
    <li css={breadcrumbListStyles()}>
      <div css={breadcrumbItemStyles({ isLastItem })}>
        {childComponent}
        {!isLastItem && (
          <Icon name="triangleRight" color={tokens('defaultColor')} size={tokens('iconSize')} />
        )}
      </div>
    </li>
  );
};

export default BreadcrumbItem;
