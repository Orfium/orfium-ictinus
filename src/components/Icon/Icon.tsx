import * as React from 'react';

import iconSelector from './assets/iconSelector';
import { iconContainerStyle, iconStyle } from './Icon.style';
import type { AcceptedIconNames } from './types';
import type { colorShades } from '../../theme/palette';
import type { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import type { TestProps } from '../../utils/types';

export type OwnProps = {
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** Property indicating the color of the icon. Defaults to primary */
  color?: AcceptedColorComponentTypes | string;
  /** Property indicating the size of the icon. Defaults to 16 */
  size?: number;
  /** Callback fired when the `span` is clicked. */
  onClick?: React.MouseEventHandler<HTMLSpanElement>;

  /** Property indicating the color's variant of the icon. */
  variant?: (typeof colorShades)[number];
};

export type IconProps = OwnProps & TestProps;

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ variant, name, color = 'primary', size = 16, dataTestId, onClick = () => {} }, ref) => {
    const Icon = iconSelector[name];

    return (
      <span ref={ref} css={iconContainerStyle()} onClick={onClick} data-testid={dataTestId}>
        <Icon css={iconStyle({ color, size, variant })} />
      </span>
    );
  }
);
Icon.displayName = 'Icon';

export default Icon;
