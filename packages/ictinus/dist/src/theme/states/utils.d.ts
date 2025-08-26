import { colorShades } from '../palette';
import { ColorScheme } from '../types';
type GetShadeWithStepProps = {
    shade: typeof colorShades[number] | 0;
    step: number;
    colorScheme: ColorScheme;
};
export declare const getShadeWithStep: ({ shade, step, colorScheme, }: GetShadeWithStepProps) => (typeof colorShades)[number];
export {};
