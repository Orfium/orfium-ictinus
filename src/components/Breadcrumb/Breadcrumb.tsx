import { isEmpty, omit } from 'lodash-es';
import * as React from 'react';
import { generateUniqueKey } from 'utils/helpers';

import BackToItem from './BackToItem';
import { breadcrumbStyles } from './Breadcrumb.style';
import type { BreadcrumbProps, BreadcrumbItem as BreadcrumbItemType } from './Breadcrumb.types';
import BreadcrumbItem from './BreadcrumbItem';
import Link from 'components/Link';

const isLastItem = (dataItems: BreadcrumbItemType[], itemIndex: number) =>
  itemIndex === dataItems.length - 1;

const Breadcrumb = React.forwardRef<HTMLOListElement, BreadcrumbProps>(
  ({ items = [], backTo, dataTestPrefixId = '' }, ref) => {
    const passDataToRouterLink = React.useCallback(
      (item: BreadcrumbItemType, index: number) => {
        const { label, href } = item;

        const isLast = isLastItem(items, index);

        return !isLast ? (
          <Link
            size={2}
            key={href}
            dataTestPrefixId={`${dataTestPrefixId}_breadcrumb_link_${label}`}
            {...omit(item, 'label')}
          >
            {label}
          </Link>
        ) : (
          <span data-testid={`${dataTestPrefixId}_breadcrumb_${label}`}>{label}</span>
        );
      },
      [dataTestPrefixId, items]
    );

    const getBreadcrumbItem = React.useMemo(
      // eslint-disable-next-line react/display-name
      () => (child: React.ReactNode, index: number) => {
        const itemKey = generateUniqueKey('data_item_');

        const isLast = isLastItem(items, index);

        return <BreadcrumbItem key={itemKey} childComponent={child} isLastItem={isLast} />;
      },
      [items]
    );

    const itemsToRender = React.useMemo(() => {
      if (!isEmpty(items)) {
        return items.map(passDataToRouterLink).map(getBreadcrumbItem);
      }

      if (backTo) {
        return (
          <BackToItem href={backTo.href} label={backTo.label} dataTestPrefixId={dataTestPrefixId} />
        );
      }

      return undefined;
    }, [backTo, dataTestPrefixId, getBreadcrumbItem, items, passDataToRouterLink]);

    return (
      <ol
        aria-label="Breadcrumb"
        ref={ref}
        css={breadcrumbStyles()}
        data-testid={`${dataTestPrefixId}_breadcrumb`}
      >
        {itemsToRender}
      </ol>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
