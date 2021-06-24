/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { generateTestDataId } from '../../utils/helpers';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import { TestId } from '../../utils/types';
import {
  buttonSpanStyle,
  buttonStyle,
  centralizedLoader,
  childrenWrapperStyle,
  iconStyle,
} from './Button.style';
import { useTypeColorToColorMatch } from '../../hooks/useTypeColorToColorMatch';
import { useLoading } from 'hooks/useLoading';
import Loader from '../Loader';
import { useRef } from 'react';

export type Props = {
  /** Type indicating the type of the button */
  type?: AcceptedColorComponentTypes;
  /** the color of the button based on our colors eg. red-400 */
  color?: string;
  /** This property define the size of the button. Defaults to 'md' */
  size?: 'lg' | 'md' | 'sm';
  /** Property indicating if the component is filled with a color based on the type */
  filled?: boolean;
  /** Property indicating if the component is transparent with a color based on the type */
  transparent?: boolean;
  /** An optional icon to put on the right of the button */
  iconRight?: React.Component | JSX.Element | null;
  /** An optional icon to put on the left of the button */
  iconLeft?: React.Component | JSX.Element | null;
  /** Define if the button is in disabled state */
  disabled?: boolean;
};

export type TestProps = {
  dataTestId?: TestId;
};

export type EventButtonProps = {
  onClick?: (setLoading?: (isLoading: boolean) => void) => void;
  onBlur?: () => void;
};

const Button: React.FC<Props & TestProps & EventButtonProps> = props => {
  const {
    size = 'md',
    type = 'primary',
    color = '',
    filled = true,
    transparent = false,
    iconLeft = null,
    iconRight = null,
    disabled = false,
    children,
    dataTestId = '',
    onClick,
    onBlur,
  } = props;
  const { loading, handleAsyncOperation } = useLoading(onClick);
  const childrenWrapperRef = useRef<HTMLSpanElement>(null);
  const innerButtonWidth = childrenWrapperRef?.current?.clientWidth;
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType(color, type);

  return (
    <button
      data-testid={generateTestDataId('button', dataTestId)}
      css={buttonStyle({
        type,
        filled,
        size,
        color,
        transparent,
        calculatedColor,
        iconExists: Boolean(iconLeft || iconRight),
        disabled,
        iconLeft,
        iconRight,
        childrenCount: React.Children.count(children),
      })}
      onClick={handleAsyncOperation}
      onBlur={onBlur}
      disabled={disabled || loading}
    >
      <span css={buttonSpanStyle()}>
        {iconLeft && <span css={iconStyle()}>{iconLeft}</span>}
        <span
          ref={childrenWrapperRef}
          css={childrenWrapperStyle({
            type,
            filled,
            size,
            color,
            transparent,
            iconLeft,
            iconRight,
            disabled,
            hasChildren: Boolean(React.Children.count(children)),
          })}
        >
          {loading ? (
            <div css={centralizedLoader(innerButtonWidth)}>
              <Loader type={'spinner'} />
            </div>
          ) : (
            children
          )}
        </span>

        {iconRight && <span css={iconStyle()}>{iconRight}</span>}
      </span>
    </button>
  );
};

export default Button;
