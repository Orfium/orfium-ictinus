import { default as React } from 'react';
declare const ProgressIndicator: React.ForwardRefExoticComponent<{
    type?: "linear" | "circular";
    value?: number;
    status?: "normal" | "error";
    isBlock?: boolean;
} & import('../..').TestProps & React.RefAttributes<HTMLDivElement>>;
export default ProgressIndicator;
