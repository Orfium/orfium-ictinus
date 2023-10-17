import { TestProps } from 'utils/types';

export type BreadcrumbItem = {
  /** Defines the path used for a link breadcrumb item*/
  to?: string;
  /** Defines the label used for a link breadcrumb item */
  label: string;
};

export type BreadcrumbProps = {
  /** Defines the data for constructing the related breadcrumb items */
  items?: BreadcrumbItem[];
  /** Defines the data for constructing the go-back-to item  */
  backTo?: BreadcrumbItem;
} & TestProps;
