import React from 'react';
import { TestProps } from 'utils/types';

import { backToContainerStyles, backToStyles } from './BackToItem.style';
import { BreadcrumbItem } from '../Breadcrumb.types';
import Link from 'components/Link';

const GO_BACK_TO = 'Go back to';

const BackToItem: React.FC<BreadcrumbItem & TestProps> = ({ to, label, dataTestPrefixId = '' }) => {
  return (
    <div css={backToContainerStyles()}>
      <div css={backToStyles()}>{GO_BACK_TO}</div>
      <Link
        size={2}
        href={to}
        dataTestPrefixId={`${dataTestPrefixId}_breadcrumb_go_back_to_${label}`}
      >
        {label}
      </Link>
    </div>
  );
};

export default BackToItem;
