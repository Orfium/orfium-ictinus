import { FCC, FC } from 'react';
type LayoutProps = {
    hasLeftSlider?: boolean;
    hasRightSlider?: boolean;
};
type GridProps = {
    containers: number[];
};
export declare const ExamplesContainer: FCC;
export declare const Layout: FC<LayoutProps>;
export declare const Grid: FC<GridProps>;
export {};
