import { AlertStatus } from '../../components/InlineAlert';
type Action = {
    url: string;
    content: string;
};
type AlertProps = {
    status: AlertStatus;
    action?: Action;
    description: string;
};
export declare function Alert({ status, action, description }: AlertProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
