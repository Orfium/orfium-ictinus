import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { LinkProps } from './Link.types';
export declare const linkContainer: ({ placement, type, size, isDisabled, }: Pick<LinkProps, "placement" | "type" | "size" | "isDisabled">) => (theme: Theme) => SerializedStyles;
