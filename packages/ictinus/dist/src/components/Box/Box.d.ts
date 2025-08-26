import { default as React } from 'react';
import { StyledBoxProps } from './Box.types';
export type BoxProps = StyledBoxProps & React.HTMLAttributes<HTMLDivElement>;
declare const Box: React.ForwardRefExoticComponent<StyledBoxProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Box;
