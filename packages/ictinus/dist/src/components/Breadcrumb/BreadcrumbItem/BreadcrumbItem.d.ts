import { default as React } from 'react';
export type BreadcrumbItemProps = {
    /** Defines the child element that will be rendered inside the list element */
    childComponent: React.ReactNode;
    /** Defines if the current item of the breadcrumb is the last one */
    isLastItem?: boolean;
};
declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
export default BreadcrumbItem;
