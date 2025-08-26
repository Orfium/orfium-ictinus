import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { FilterButtonProps } from './FilterButton';
export declare const buttonStyles: ({ isActive, isPopulated, isDisabled, }: Pick<FilterButtonProps, "isActive" | "isPopulated" | "isDisabled">) => (theme: Theme) => SerializedStyles;
export declare const iconStyles: ({ isActive }: Pick<FilterButtonProps, "isActive">) => () => SerializedStyles;
