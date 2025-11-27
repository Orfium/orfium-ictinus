import React from 'react';
import type { TestProps } from 'utils/types';

import Link from 'components/Link';
import type { BreadcrumbItem } from '../Breadcrumb.types';

const GO_BACK_TO = 'Go back to';

const BackToItem: React.FC<BreadcrumbItem & TestProps> = ({
  href,
  label,
  dataTestPrefixId = '',
}) => {
  return (
    <Link
      size={2}
      href={href}
      dataTestPrefixId={`${dataTestPrefixId}_breadcrumb_go_back_to_${label}`}
    >
      {`${GO_BACK_TO} ${label}`}
    </Link>
  );
};

export default BackToItem;
