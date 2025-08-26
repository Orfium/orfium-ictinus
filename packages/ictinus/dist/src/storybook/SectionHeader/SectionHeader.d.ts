import { FCC } from 'react';
export type SectionHeaderProps = {
    title?: string;
    isPending?: boolean;
    sections?: {
        title: string;
        href: string;
    }[];
};
declare const SectionHeader: FCC<SectionHeaderProps>;
export default SectionHeader;
