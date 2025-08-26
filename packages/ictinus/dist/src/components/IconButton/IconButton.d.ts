import { default as React } from 'react';
import { AcceptedIconNames } from '../Icon';
import { PrimitiveButtonTypes } from '../Button/Button.types';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';
export type IconButtonShape = 'circle' | 'square';
export type IconButtonProps = Omit<ButtonBaseProps, 'type' | 'isBlock' | 'isLoading' | 'isIconButton'> & {
    /** This property defines the type of the IconButton */
    type?: PrimitiveButtonTypes;
    /** This property defines witch icon to use */
    iconName: AcceptedIconNames;
    /** This property defines the shape of the IconButton */
    shape?: IconButtonShape;
};
declare const IconButton: React.ForwardRefExoticComponent<Omit<ButtonBaseProps, "type" | "isLoading" | "isBlock" | "isIconButton"> & {
    /** This property defines the type of the IconButton */
    type?: PrimitiveButtonTypes;
    /** This property defines witch icon to use */
    iconName: AcceptedIconNames;
    /** This property defines the shape of the IconButton */
    shape?: IconButtonShape;
} & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
