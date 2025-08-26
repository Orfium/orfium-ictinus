import { Theme } from 'theme';
import { BroadcastProps } from './Broadcast.types';
export declare const getIconColor: (status: BroadcastProps["status"], theme: Theme) => string;
export declare const styles: {
    broadcast: (props: BroadcastProps) => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    icon: () => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    content: () => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    actions: () => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    dismiss: () => (theme: Theme) => import('@emotion/utils').SerializedStyles;
};
