import useTheme from 'hooks/useTheme';
import React from 'react';

import { linkContainer } from './Link.style';
import { LinkTokens, getLinkTokens } from './Link.tokens';
import { LinkProps } from './Link.types';
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

  return (
    <Component
      css={linkContainer({ placement, type, size, isDisabled })}
      ref={ref}
      data-testid={`${dataTestPrefixId}_link`}
      {...rest}
    >
      <span>{children}</span>
      {/** @TODO Set the right size for the icon based on tokens once Icon component is refactored */}
      {iconName && (
        <Icon
          name={iconName}
          color={tokens(`textColor.${type}.default` as LinkTokens)}
          size={12}
          dataTestId={`${dataTestPrefixId}_link_icon`}
        />
      )}
    </Component>
  );
});

Link.displayName = 'Link';

export default Link;
