import useTheme from 'hooks/useTheme';
import * as React from 'react';
import { useRef } from 'react';
import type { DivProps } from 'utils/common';
import type { TestProps } from 'utils/types';

import iconSelector from './assets/iconSelector';
import { iconContainerStyles, iconStyles } from './Icon.style';
import type { AcceptedIconNames } from './Icon.types';
import useCombinedRefs from '../../hooks/useCombinedRefs';

export type IconProps = {
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** Property indicating the color of the icon. Accepts all css:color values */
  color?: string;
  /**
   * Property indicating the size of the icon. If number or string ending in 'px' is imported, it's converted to rem.
   * Otherwise it's passed directly to the css:width/height. Defaults to 20px (converted to rem)
   */
  size?: string | number;
  /** Whether the icon has a onHover style. Defaults to true if onClick is provided */
  hasHover?: boolean;
} & DivProps &
  TestProps;

const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const theme = useTheme();
  const {
    name,
    color = theme.tokens.colors.get('textColor.default.secondary'),
    size = 20,
    onClick,
    dataTestId,
    ...rest
  } = props;
  const combinedRef = useCombinedRefs<HTMLDivElement>(ref, useRef(null));
  const isInteractive = Boolean(onClick);
  const { hasHover = isInteractive } = props;
  const Icon = iconSelector[name];

  return (
    <div
      onClick={onClick}
      css={iconContainerStyles({ size, hasHover, isInteractive })}
      data-testid={dataTestId}
      ref={combinedRef}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClick) {
          combinedRef.current.click();
        }
      }}
      {...rest}
    >
      <Icon css={iconStyles({ color, size })} />
    </div>
  );
});

Icon.displayName = 'Icon';

export default Icon;
