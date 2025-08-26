import { default as React } from 'react';
declare const Tabs: React.ForwardRefExoticComponent<{
    orientation?: import('react-aria').Orientation;
    selectedKey: import('react-aria').Key;
    onSelectionChange: (key: import('react-aria').Key) => void;
    items: import('./types').TabItem[];
    children?: any;
    sx?: import('./types').TabsStylesOverrides;
} & React.AriaAttributes & import('../..').TestProps & React.RefAttributes<HTMLDivElement>>;
export default Tabs;
