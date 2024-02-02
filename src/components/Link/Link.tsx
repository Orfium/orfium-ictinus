import useTheme from 'hooks/useTheme';
import React from 'react';

import { linkContainer } from './Link.style';
import type { LinkTokens } from './Link.tokens';
import { getLinkTokens } from './Link.tokens';
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

  const tokens = getLinkTokens(theme);

  const Component = component ?? 'a';

  const componentProps = component ? { to: props.href } : {};

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
          color={tokens(`textColor.${type}.default` as LinkTokens)}
          size={tokens(`iconSize.${size}`)}
          dataTestId={`${dataTestPrefixId}_link_icon`}
        />
      )}
    </Component>
  );
});

Link.displayName = 'Link';

export default Link;
