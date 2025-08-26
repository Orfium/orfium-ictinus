import { default as React } from 'react';
declare const TabsContainer: React.ForwardRefExoticComponent<{
    orientation?: import('react-aria').Orientation;
    selectedKey: import('react-aria').Key;
    onSelectionChange: (key: import('react-aria').Key) => void;
    children: any;
    sx?: import('@emotion/serialize').CSSObject;
} & React.AriaAttributes & React.RefAttributes<HTMLDivElement>>;
export default TabsContainer;
