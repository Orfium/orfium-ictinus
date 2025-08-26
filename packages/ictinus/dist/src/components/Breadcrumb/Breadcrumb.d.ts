import { BreadcrumbItem as BreadcrumbItemType } from './Breadcrumb.types';
import * as React from 'react';
declare const Breadcrumb: React.ForwardRefExoticComponent<{
    items?: BreadcrumbItemType[];
    backTo?: BreadcrumbItemType;
} & import('../..').TestProps & React.RefAttributes<HTMLOListElement>>;
export default Breadcrumb;
