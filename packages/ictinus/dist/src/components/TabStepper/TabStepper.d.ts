import { default as React } from 'react';
declare const TabStepper: React.ForwardRefExoticComponent<{
    items: import('./types').TabStepItem[];
    iconPosition?: "adjacent" | "end";
    children?: React.ReactNode;
    sx?: import('./types').TabStepperStylesOverrides;
} & Pick<import('../Tabs').TabsProps, "orientation" | "onSelectionChange" | "selectedKey"> & import('../..').TestProps & React.RefAttributes<HTMLDivElement>>;
export default TabStepper;
