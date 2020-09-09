/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { EventProps } from 'utils/common';
import { generateTestDataId } from 'utils/helpers';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';
import Button from '../Button';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import { TestId } from 'utils/types';

export type Props = {
  /** Type indicating the type of the button. Defaults to 'primary' */
  type?: AcceptedColorComponentTypes;
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
};

export type TestProps = {
  dataTestId?: TestId;
};

const IconButton: React.FC<Props & TestProps & EventProps> = ({
  size = 'md',
  iconSize,
  type = 'primary',
  filled = true,
  name,
  dataTestId = '',
  onClick,
  onBlur,
  disabled,
}) => {
  return (
    <Button
      dataTestId={generateTestDataId('button', dataTestId)}
      onClick={onClick}
      onBlur={onBlur}
      size={size}
      type={type}
      filled={filled}
      disabled={disabled}
      icon={<Icon name={name} color={disabled ? 'gray50' : type} size={iconSize} />}
    />
  );
};

export default IconButton;
