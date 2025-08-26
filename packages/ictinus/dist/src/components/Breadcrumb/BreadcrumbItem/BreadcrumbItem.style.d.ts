import { SerializedStyles } from '@emotion/react';
import { BreadcrumbItemProps } from './BreadcrumbItem';
import { Theme } from '../../../theme';
export declare const breadcrumbListStyles: () => SerializedStyles;
export declare const breadcrumbItemStyles: ({ isLastItem }: Pick<BreadcrumbItemProps, "isLastItem">) => (theme: Theme) => SerializedStyles;
