import useTheme from 'hooks/useTheme';
import React from 'react';

import { iconSize } from './constants';
import { linkContainer } from './Link.style';
import type { LinkProps } from './Link.types';
import Icon from 'components/Icon';

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
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

  const theme = useTheme();

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
      <span>{children}</span>
      {iconName && (
        <Icon
          name={iconName}
          color={theme.tokens.colors.get(
            isInverted ? 'textColor.inverted.active' : 'textColor.default.active'
          )}
          size={theme.dimension.sizing.get(iconSize[size])}
          dataTestId={`${dataTestPrefixId}_link_icon`}
        />
      )}
    </Component>
  );
});

Link.displayName = 'Link';

export default Link;
