import React from 'react';
import { FontSpacing } from 'theme/tokens/semantic/typography';

import { typographyWrapper } from './Typography.style';

export type TypographyVariant =
  | 'headline01'
  | 'headline02'
  | 'headline03'
  | 'headline04'
  | 'headline05'
  | 'title01'
  | 'title02'
  | 'title03'
  | 'label01'
  | 'label02'
  | 'label03'
  | 'label04'
  | 'body01'
  | 'body02'
  | 'body03'
  | 'body04';

export type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TextColorTypes = 'primary' | 'secondary' | 'error' | 'active' | 'visited';

export type TypographyProps = {
  /** Type of the Typography that will affect the color of the text */
  type?: TextColorTypes;
  /** The variant of the Typography is the style of the text (font size, weight, line height, etc) */
  variant?: TypographyVariant;
  /** The Font Spacing used in the selection of the font family */
  fontSpacing?: FontSpacing;
  /** How you want to represent it, eg div, span or other */
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

export const detectComponentBasedOnType = (variant: TypographyVariant): TypographyComponent => {
  if (variant === 'headline01') return 'h1';
  if (variant === 'headline02') return 'h2';
  if (variant === 'headline03') return 'h3';
  if (variant === 'headline04') return 'h4';
  if (variant === 'headline05') return 'h5';
  if (variant.includes('title')) return 'h6';
  if (variant.includes('label')) return 'span';
  if (variant.includes('body')) return 'p';

  return 'p';
};

// display name breaks storybook props
// https://github.com/storybookjs/storybook/issues/13304
// eslint-disable-next-line react/display-name
const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  (
    {
      type = 'primary',
      variant = 'body01',
      fontSpacing = 'normal',
      component,
      isInverted,
      isUnderline,
      isItalic,
      isBold,
      children,
      ...rest
    },
    ref
  ) => {
    const Component = component || detectComponentBasedOnType(variant);

    return (
      <Component
        ref={ref}
        css={typographyWrapper({
          isInverted,
          type,
          variant,
          fontSpacing,
          isUnderline,
          isItalic,
          isBold,
        })}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default Typography;
