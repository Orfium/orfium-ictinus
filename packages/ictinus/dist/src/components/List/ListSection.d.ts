import { SectionProps } from '@react-types/shared';
import { ReactNode, default as React } from 'react';
import { ListRowSize } from './types';
export type ListSectionProps = {
    /** Rendered contents of the section, e.g. a header. */
    title: ReactNode;
    /** An accessibility label for the section. */
    'aria-label'?: string;
    /** @default normal */
    rowSize?: ListRowSize;
} & SectionProps<unknown>;
declare const ListSection: React.FCC<ListSectionProps>;
export default ListSection;
