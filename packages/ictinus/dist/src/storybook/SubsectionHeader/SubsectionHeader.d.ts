import { FC } from 'react';
import { TypographyVariant } from '../../components/Typography';
export type SectionHeaderProps = {
    title?: string;
    variant?: TypographyVariant;
};
declare const SubsectionHeader: FC<SectionHeaderProps>;
export default SubsectionHeader;
