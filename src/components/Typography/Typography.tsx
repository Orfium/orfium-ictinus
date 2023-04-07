import React from 'react';

import { typographyWrapper } from './Typography.style';

export type TypographyType =
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

export type TypographyProps = {
  type: TypographyType;
  component?: TypographyComponent;
};

export const detectComponentBasedOnType = (type: TypographyType): TypographyComponent => {
  if (type === 'headline01') return 'h1';
  if (type === 'headline02') return 'h2';
  if (type === 'headline03') return 'h3';
  if (type === 'headline04') return 'h4';
  if (type === 'headline05') return 'h5';
  if (type.includes('title')) return 'h6';
  if (type.includes('label')) return 'span';
  if (type.includes('body')) return 'p';

  return 'p';
};

// display name breaks storybook props
// https://github.com/storybookjs/storybook/issues/13304
// eslint-disable-next-line react/display-name
const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ type = 'body01', component, children, ...rest }, ref) => {
    const Component = component || detectComponentBasedOnType(type);

    return (
      <Component
        ref={ref}
        css={typographyWrapper({
          type,
        })}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default Typography;
