import { Data } from './BarChart';
type Values = {
    maxDomainValue: number;
    tickCount: number;
};
export declare const getValues: (max: number | undefined) => Values;
export declare const customTickFormatter: (tickValue: number, maxDomainValue: number) => string;
export declare const getBarColors: (data: Data[], defaultColor: string) => string[];
export declare const getColoringOptions: (data: Data[], operator?: (cur: Data) => string) => {};
export {};
