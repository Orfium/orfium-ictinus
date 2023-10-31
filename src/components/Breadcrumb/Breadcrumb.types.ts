import { TestProps } from 'utils/types';

import { LinkProps } from 'components/Link/Link.types';

export type BreadcrumbItem = {
  /** Defines the label used for a link breadcrumb item */
  label: string;
} & Pick<LinkProps, 'component' | 'href'>;

export type BreadcrumbProps = {
  /** Defines the data for constructing the related breadcrumb items */
  items?: BreadcrumbItem[];
  /** Defines the data for constructing the go-back-to item  */
  backTo?: BreadcrumbItem;
} & TestProps;
