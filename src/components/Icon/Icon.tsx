import * as React from 'react';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import iconSelector from './assets/iconSelector';
import { iconContainerStyle, iconStyle } from './Icon.style';
import { AcceptedIconNames } from './types';
import { colorShades } from '../../theme/palette';

export type Props = {
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** Property indicating the color of the icon. Defaults to primary */
  color?: AcceptedColorComponentTypes | string;
  /** Property indicating the size of the icon. Defaults to 16 */
  size?: number;
  /** Callback fired when the `span` is clicked. */
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  /** Property indicating the color's variant of the icon. */
  variant?: typeof colorShades[number];
};

const Icon: React.FC<Props> = ({
  variant,
  name,
  color = 'primary',
  size = 16,
  onClick = () => {},
}) => {
  const Icon = iconSelector[name];

  return (
    <span css={iconContainerStyle()} onClick={onClick}>
      <Icon css={iconStyle({ color, size, variant })} />
    </span>
  );
};

export default Icon;
