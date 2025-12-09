import React from 'react';

import { vars } from '@orfium/tokens';
import Icon from 'components/Icon';
import { useSlotProps } from '../utils/Slots';
import { linkContainer } from './Link.style';
import type { LinkProps } from './Link.types';

const ICON_SIZE = {
  1: vars.sizing['5'],
  2: vars.sizing['4'],
  3: vars.sizing['3'],
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  props = useSlotProps(props, 'link');
  const {
    type = 'primary',
    placement = 'block',
    size = 1,
    iconName,
    isDisabled,
    component,
    dataTestPrefixId = '',
    children,
    ...rest
  } = props;

  const Component = component ?? 'a';

  const componentProps = component ? { to: props.href } : {};

  const isInverted = type === 'inverted';

  return (
    <Component
      css={linkContainer({ placement, type, size, isDisabled })}
      ref={ref}
      data-testid={`${dataTestPrefixId}_link`}
      {...componentProps}
      {...rest}
    >
      {children}
      {iconName && (
        <Icon
          name={iconName}
          color={vars.color.text[isInverted ? 'inverted' : 'default'].active}
          size={ICON_SIZE[size]}
          dataTestId={`${dataTestPrefixId}_link_icon`}
        />
      )}
    </Component>
  );
});

Link.displayName = 'Link';

export default Link;
