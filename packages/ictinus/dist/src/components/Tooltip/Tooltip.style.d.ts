import { SerializedStyles } from '@emotion/react';
import { TooltipProps } from './Tooltip.types';
import { Theme } from '../../theme';
export declare const tooltipStyle: ({ isInverted, isInteractive, }: Pick<TooltipProps, "isInverted" | "isInteractive">) => (theme: Theme) => SerializedStyles;
