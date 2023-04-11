import React from 'react';

import { typographyWrapper } from './Typography.style';

export type TypographyRole =
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
  role?: TypographyRole;
  component?: TypographyComponent;
  isInverted?: boolean;
  isItalic?: boolean;
  isBold?: boolean;
  isUnderline?: boolean;
  children?: React.ReactNode;
};

export const detectComponentBasedOnType = (role: TypographyRole): TypographyComponent => {
  if (role === 'headline01') return 'h1';
  if (role === 'headline02') return 'h2';
  if (role === 'headline03') return 'h3';
  if (role === 'headline04') return 'h4';
  if (role === 'headline05') return 'h5';
  if (role.includes('title')) return 'h6';
  if (role.includes('label')) return 'span';
  if (role.includes('body')) return 'p';

  return 'p';
};

// display name breaks storybook props
// https://github.com/storybookjs/storybook/issues/13304
// eslint-disable-next-line react/display-name
const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  (
    {
      type = 'primary',
      role = 'body01',
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
    const Component = component || detectComponentBasedOnType(role);

    return (
      <Component
        ref={ref}
        css={typographyWrapper({
          isInverted,
          type,
          role,
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
