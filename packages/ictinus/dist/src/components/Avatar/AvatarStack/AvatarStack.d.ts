import { default as React } from 'react';
import { TestProps } from '../../../utils/types';
import { AvatarStackProps } from './AvatarStack.types';
declare const AvatarStack: React.ForwardRefExoticComponent<Omit<AvatarStackProps & TestProps & Partial<Omit<React.HTMLProps<HTMLDivElement>, "color" | "css" | "size">>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default AvatarStack;
