import { ClickEvent } from '../../hooks/useLoading';
import { default as React } from 'react';
import { ComponentSizes, TestProps } from '../../utils/types';
import { PrimitiveButtonTypes } from '../Button/Button.types';
import { AcceptedIconNames } from '../Icon';
import { MenuPositionAllowed } from '../utils/DropdownOptions';
export type DropdownButtonProps = TestProps & {
    /** The size of the DropdownButton */
    size?: ComponentSizes;
    /** The Dropdown Items' CTA */
    onOptionSelect: (option: string | number) => void;
    /** The type of the Dropdown Button */
    type?: PrimitiveButtonTypes;
    /** The Button's CTA */
    onButtonClick?: (event: ClickEvent) => void;
    /** The items on the Dropdown List */
    items?: string[];
    /** The name of the iconButton */
    iconButtonName?: AcceptedIconNames;
    /** Dropdown menu position when open */
    menuPosition?: MenuPositionAllowed;
    children?: React.ReactNode;
};
declare const DropdownButton: React.ForwardRefExoticComponent<TestProps & {
    /** The size of the DropdownButton */
    size?: ComponentSizes;
    /** The Dropdown Items' CTA */
    onOptionSelect: (option: string | number) => void;
    /** The type of the Dropdown Button */
    type?: PrimitiveButtonTypes;
    /** The Button's CTA */
    onButtonClick?: (event: ClickEvent) => void;
    /** The items on the Dropdown List */
    items?: string[];
    /** The name of the iconButton */
    iconButtonName?: AcceptedIconNames;
    /** Dropdown menu position when open */
    menuPosition?: MenuPositionAllowed;
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export default DropdownButton;
