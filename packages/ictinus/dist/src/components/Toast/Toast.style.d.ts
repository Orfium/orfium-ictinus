import { Theme } from '../../theme';
import { ToastOptions } from './Toast.types';
export declare const styles: {
    toastRegion: (theme: Theme) => import('@emotion/utils').SerializedStyles;
    'bottom left': import('@emotion/utils').SerializedStyles;
    'bottom right': import('@emotion/utils').SerializedStyles;
    toast: (props: ToastOptions) => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    icon: (theme: Theme) => import('@emotion/utils').SerializedStyles;
    dismiss: (theme: Theme) => import('@emotion/utils').SerializedStyles;
    toastContent: import('@emotion/utils').SerializedStyles;
    toastActions: (theme: Theme) => import('@emotion/utils').SerializedStyles;
};
export declare const getIconColor: (status: ToastOptions["status"], theme: Theme) => string;
