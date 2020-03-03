/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import useTheme from 'hooks/useTheme';
import iconSelector from './assets/iconSelector';

export type Props = {
  /** This property defines witch icon to use */
  name?: string;
  /** Property indicating the color of the icon */
  color?: string;
  /** Property indicating the size of the icon */
  size?: number;
};

const Icon: React.FC<Props> = ({ name, color, size }) => {
  const theme = useTheme();
  console.log(theme);

  if (!name) return null;

  const Icon = iconSelector[name];

  return (
    <span>
      <Icon fill={color} />
    </span>
  );
};

export default Icon;
