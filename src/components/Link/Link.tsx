import useTheme from 'hooks/useTheme';
import type { AnchorHTMLAttributes } from 'react';
import React from 'react';

import { linkContainer } from './Link.style';
import type { LinkTokens} from './Link.tokens';
import { getLinkTokens } from './Link.tokens';
import type { LinkProps } from './Link.types';
import Icon from 'components/Icon';

const Link = React.forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps
>((props, ref) => {
  const {
    type = 'primary',
    placement = 'block',
    size = 1,
    iconName,
    isDisabled,
    dataTestPrefixId = '',
    children,
    ...rest
  } = props;

  const theme = useTheme();

  const tokens = getLinkTokens(theme);

  return (
    <a
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
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
