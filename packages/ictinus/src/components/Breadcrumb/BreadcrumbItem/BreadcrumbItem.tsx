import React from 'react';

import { vars } from '@orfium/tokens';
import Icon from 'components/Icon';
import { Box } from '~/vanilla';
import { breadcrumbItemStyles, breadcrumbListStyles } from './BreadcrumbItem.style';

export type BreadcrumbItemProps = {
  /** Defines the child element that will be rendered inside the list element */
  childComponent: React.ReactNode;
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ childComponent, isLastItem = false }) => {
  return (
    <li css={breadcrumbListStyles()}>
      <Box
        css={breadcrumbItemStyles({ isLastItem })}
        {...(isLastItem ? { typography: 'body02' } : {})}
      >
        {childComponent}
        {!isLastItem && (
          <Icon
            name="triangleRight"
            color={vars.color.text.default.secondary}
            size={vars.sizing['5']}
          />
        )}
      </Box>
    </li>
  );
};

export default BreadcrumbItem;
