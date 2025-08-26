import { DivProps } from '../../utils/common';
import { TestProps } from '../../utils/types';
import { AcceptedIconNames } from './Icon.types';
import * as React from 'react';
export type IconProps = {
    /** This property defines witch icon to use */
    name: AcceptedIconNames;
    /** Property indicating the color of the icon. Accepts all css:color values */
    color?: string;
    /**
     * Property indicating the size of the icon. If number or string ending in 'px' is imported, it's converted to rem.
     * Otherwise it's passed directly to the css:width/height. Defaults to 20px (converted to rem)
     */
    size?: string | number;
    /** Whether the icon has a onHover style. Defaults to true if onClick is provided */
    hasHover?: boolean;
} & DivProps & TestProps;
declare const Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Icon;
