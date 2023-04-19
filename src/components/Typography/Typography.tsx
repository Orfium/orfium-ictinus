import React from 'react';

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
  | 'body01'
  | 'body02'
  | 'body03';

export type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TextColorTypes = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'active';

export type TypographyProps = {
  type?: TextColorTypes;
  variant?: TypographyVariant;
  component?: TypographyComponent;
  isInverted?: boolean;
  isItalic?: boolean;
  isBold?: boolean;
  isUnderline?: boolean;
  children?: React.ReactNode;
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
