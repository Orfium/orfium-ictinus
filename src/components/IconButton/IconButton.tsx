/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { EventProps } from '../../utils/common';
import { generateTestDataId } from '../../utils/helpers';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import { TestId } from '../../utils/types';
import Button from '../Button';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';

export type Props = {
  /** Type indicating the type of the button */
  type?: AcceptedColorComponentTypes;
  /** the color of the button based on our colors eg. red-400 */
  color?: string;
  /** Property indicating the size of the icon. Defaults to 16 */
  iconSize?: number;
  /** This property define the size of the button. Defaults to 'md' */
  size?: 'lg' | 'md' | 'sm';
  /** Property indicating if the component is filled with a color based on the type */
  filled?: boolean;
  /** This property defines witch icon to use */
  name: AcceptedIconNames;
  /** Define if the button is in disabled state */
  disabled?: boolean;
  /** Defines the icon's color **/
  iconColor?: AcceptedColorComponentTypes | string;
};

export type TestProps = {
  dataTestId?: TestId;
};

const IconButton: React.FC<Props & TestProps & EventProps> = ({
  size = 'md',
  iconSize,
  color = '',
  type = 'primary',
  filled = true,
  name,
  dataTestId = '',
  onClick,
  onBlur,
  disabled,
  iconColor,
}) => {
  return (
    <Button
      dataTestId={generateTestDataId('button', dataTestId)}
      onClick={onClick}
      onBlur={onBlur}
      size={size}
      color={color}
      type={type}
      filled={filled}
      disabled={disabled}
      iconLeft={<Icon name={name} color={iconColor || color || type} size={iconSize} />}
    />
  );
};

export default IconButton;
