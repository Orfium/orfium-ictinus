/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import iconSelector from './assets/iconSelector';
import { iconContainerStyle, iconStyle } from './Icon.style';
import { AcceptedIconNames } from './types';
import { ColorConfig } from '../TextField/TextField.style';

export type Props = {
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** Property indicating the color of the icon. Defaults to primary */
  color?: AcceptedColorComponentTypes | string;
  /** Property indicating the size of the icon. Defaults to 16 */
  size?: number;
  /** Property indicating the color type and the variant to pick icon color  from swatches*/
  colorConfig?: ColorConfig;
};

const Icon: React.FC<Props> = ({ name, color = 'primary', size = 16, colorConfig }) => {
  const Icon = iconSelector[name];

  return (
    <span css={iconContainerStyle()}>
      <Icon css={iconStyle({ color, size, colorConfig })} />
    </span>
  );
};

export default Icon;
