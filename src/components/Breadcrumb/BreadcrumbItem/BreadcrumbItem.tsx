import useTheme from 'hooks/useTheme';
import React from 'react';

import { breadcrumbItemStyles, breadcrumbListStyles } from './BreadcrumbItem.style';
import Icon from 'components/Icon';

export type BreadcrumbItemProps = {
  /** Defines the child element that will be rendered inside the list element */
  childComponent: React.ReactNode;
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ childComponent, isLastItem = false }) => {
  const theme = useTheme();

  return (
    <li css={breadcrumbListStyles()}>
      <div css={breadcrumbItemStyles({ isLastItem })}>
        {childComponent}
        {!isLastItem && (
          <Icon
            name="triangleRight"
            color={theme.tokens.colors.get('textColor.default.secondary')}
            size={theme.dimension.sizing.get('icon.md')}
          />
        )}
      </div>
    </li>
  );
};

export default BreadcrumbItem;
