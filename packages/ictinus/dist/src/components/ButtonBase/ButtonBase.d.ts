import { CSSObject } from '@emotion/serialize';
import { ClickEvent } from '../../hooks/useLoading';
import { default as React } from 'react';
import { CommonButtonProps } from '../../utils/common';
import { ComponentSizes, TestProps } from '../../utils/types';
import { ButtonTypes } from '../Button/Button.types';
import { IconButtonShape } from '../IconButton';
export type EventButtonProps = {
    onClick?: (event: ClickEvent) => void;
    onBlur?: () => void;
};
export type ButtonBaseProps = {
    /** The type of the button */
    type?: ButtonTypes;
    /** The size of button */
    size?: ComponentSizes;
    /** This property will make the button fit to its parent width. Defaults to false */
    isBlock?: boolean;
    /** Property indicating if the component is loading */
    isLoading?: boolean;
    /** Define if the button is in disabled state */
    isDisabled?: boolean;
    /** Define if the button is an icon button */
    isIconButton?: boolean;
    /** Define the radius type of the icon button */
    shape?: IconButtonShape;
    /** Defines the button type */
    htmlType?: 'submit' | 'reset' | 'button';
    /** Sx prop to override specific properties */
    sx?: {
        container?: CSSObject;
    };
} & TestProps & EventButtonProps & CommonButtonProps;
declare const ButtonBase: React.ForwardRefExoticComponent<{
    /** The type of the button */
    type?: ButtonTypes;
    /** The size of button */
    size?: ComponentSizes;
    /** This property will make the button fit to its parent width. Defaults to false */
    isBlock?: boolean;
    /** Property indicating if the component is loading */
    isLoading?: boolean;
    /** Define if the button is in disabled state */
    isDisabled?: boolean;
    /** Define if the button is an icon button */
    isIconButton?: boolean;
    /** Define the radius type of the icon button */
    shape?: IconButtonShape;
    /** Defines the button type */
    htmlType?: "submit" | "reset" | "button";
    /** Sx prop to override specific properties */
    sx?: {
        container?: CSSObject;
    };
} & TestProps & EventButtonProps & Partial<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "onBlur" | "css" | "disabled" | "size">> & React.RefAttributes<HTMLButtonElement>>;
export default ButtonBase;
