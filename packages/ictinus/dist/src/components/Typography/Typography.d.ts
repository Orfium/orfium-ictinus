import { default as React } from 'react';
import { FontSpacing } from '../../theme/tokens/semantic/typography';
export type TypographyVariant = 'headline01' | 'headline02' | 'headline03' | 'headline04' | 'headline05' | 'title01' | 'title02' | 'title03' | 'label01' | 'label02' | 'label03' | 'label04' | 'body01' | 'body02' | 'body03' | 'body04';
export type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
export type TextColorTypes = 'primary' | 'secondary' | 'error' | 'active' | 'visited';
export type TypographyProps = {
    /** Type of the Typography that will affect the color of the text */
    type?: TextColorTypes;
    /** The variant of the Typography is the style of the text (font size, weight, line height, etc) */
    variant?: TypographyVariant;
    /** The Font Spacing used in the selection of the font family */
    fontSpacing?: FontSpacing;
    /** How you want to represent it, eg div, span or other @defaults p */
    component?: TypographyComponent;
    /** A boolean definition of the inverted case */
    isInverted?: boolean;
    /** A boolean definition to apply italic text */
    isItalic?: boolean;
    /** A boolean definition to apply bold text */
    isBold?: boolean;
    /** A boolean definition to apply underlined text */
    isUnderline?: boolean;
    children?: React.ReactNode;
    id?: string;
};
export declare const detectComponentBasedOnType: (variant: TypographyVariant) => TypographyComponent;
declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLHeadingElement>>;
export default Typography;
