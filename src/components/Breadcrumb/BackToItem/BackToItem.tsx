import React from 'react';
import type { TestProps } from 'utils/types';

import { backToContainerStyles } from './BackToItem.style';
import type { BreadcrumbItem } from '../Breadcrumb.types';
import Link from 'components/Link';

const GO_BACK_TO = 'Go back to';

const BackToItem: React.FC<BreadcrumbItem & TestProps> = ({
  href,
  label,
  dataTestPrefixId = '',
}) => {
  return (
    <div css={backToContainerStyles()}>
      <Link
        size={2}
        href={href}
        dataTestPrefixId={`${dataTestPrefixId}_breadcrumb_go_back_to_${label}`}
      >
        {`${GO_BACK_TO} ${label}`}
      </Link>
    </div>
  );
};

export default BackToItem;
