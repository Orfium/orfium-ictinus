import { FCC } from 'react';
import { TypographyVariant } from '../../components/Typography';
export type TypographyProps = {
    children: string;
    variant: TypographyVariant;
};
declare const Typography: FCC<TypographyProps>;
export default Typography;
