import { Theme } from 'theme';
import { InlineAlertProps } from './InlineAlert.types';
export declare const getIconColor: (status: InlineAlertProps["status"], theme: Theme) => string;
export declare const styles: {
    'inline-alert': (props: InlineAlertProps) => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    icon: () => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    content: () => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    actions: () => (theme: Theme) => import('@emotion/utils').SerializedStyles;
    dismiss: () => (theme: Theme) => import('@emotion/utils').SerializedStyles;
};
