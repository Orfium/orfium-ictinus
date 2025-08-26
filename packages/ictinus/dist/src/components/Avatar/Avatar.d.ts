import { default as React } from 'react';
import { AvatarProps } from './Avatar.types';
declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
