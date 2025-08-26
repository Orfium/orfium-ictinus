import { default as React } from 'react';
import { CommonButtonProps } from '../../utils/common';
import { TestProps } from '../../utils/types';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { AvatarProps } from '../Avatar';
import { AcceptedIconNames } from '../Icon';
export type ButtonProps = ButtonBaseProps & TestProps & CommonButtonProps & {
    /** An optional icon to put on the right of the button */
    iconRightName?: AcceptedIconNames;
    /** An optional icon to put on the left of the button */
    iconLeftName?: AcceptedIconNames;
    /** An optional avatar to put on the left of the button */
    avatar?: Pick<AvatarProps, 'src' | 'color'> & {
        label?: string;
    };
};
declare const Button: React.ForwardRefExoticComponent<{
    type?: import('./Button.types').ButtonTypes;
    size?: import('../../utils/types').ComponentSizes;
    isBlock?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    isIconButton?: boolean;
    shape?: import('../IconButton').IconButtonShape;
    htmlType?: "submit" | "reset" | "button";
    sx?: {
        container?: import('@emotion/serialize').CSSObject;
    };
} & TestProps & import('../ButtonBase').EventButtonProps & Partial<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "onBlur" | "css" | "disabled" | "size">> & {
    /** An optional icon to put on the right of the button */
    iconRightName?: AcceptedIconNames;
    /** An optional icon to put on the left of the button */
    iconLeftName?: AcceptedIconNames;
    /** An optional avatar to put on the left of the button */
    avatar?: Pick<AvatarProps, "src" | "color"> & {
        label?: string;
    };
} & React.RefAttributes<HTMLButtonElement>>;
export default Button;
