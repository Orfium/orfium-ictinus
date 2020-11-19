/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import iconSelector from './assets/iconSelector';
import { iconContainerStyle, iconStyle } from './Icon.style';
import { AcceptedIconNames } from './types';
import { getColor } from '../../theme';

export type Props = {
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** Property indicating the color of the icon. Defaults to primary */
  color?: AcceptedColorComponentTypes | string;
  /** Property indicating the size of the icon. Defaults to 16 */
  size?: number;
};

const Icon: React.FC<Props> = ({ name, color = 'primary', size = 16 }) => {
  const Icon = iconSelector[name];

  return (
    <span css={iconContainerStyle()}>
      <div style={{ color: getColor('lightBlue', 400) }}>asd</div>
      <Icon css={iconStyle({ color, size })} />
    </span>
  );
};

export default Icon;
