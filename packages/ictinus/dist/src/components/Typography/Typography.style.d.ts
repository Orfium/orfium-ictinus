import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { FontSpacing } from '../../theme/tokens/semantic/typography';
import { TypographyVariant, TextColorTypes } from './Typography';
export declare const typographyWrapper: ({ variant, isInverted, fontSpacing, isItalic, isBold, isUnderline, type, }: {
    variant: TypographyVariant;
    fontSpacing: FontSpacing;
    isInverted?: boolean;
    isItalic?: boolean;
    isBold?: boolean;
    isUnderline?: boolean;
    type: TextColorTypes;
}) => (theme: Theme) => SerializedStyles;
